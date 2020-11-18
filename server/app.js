//import the DB connection
require('./db/config/index');
const express = require('express'),
  app = express(),
  openRoutes = require('./routes/open/index'),
  userRouter = require('./routes/secure/user');
(repairRouter = require('./routes/secure/repair')),
  (cyclistRouter = require('./routes/secure/cyclist')),
  (bikeshopRouter = require('./routes/secure/bikeshop')),
  (reviewRouter = require('./routes/secure/reviews')),
  (passport = require('./middleware/authentication/index')),
  (fileUpload = require('express-fileupload')),
  (cookieParser = require('cookie-parser')),
  (path = require('path'));

// Parse incoming JSON into objects
app.use(express.json());

//Unauthenticated routes
app.use('/api', openRoutes);

//Middleware to parse through incoming cookies in the requests.
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

//Authenticated Routes
app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use('/api/user', userRouter);
app.use('/api/cyclist', cyclistRouter);
app.use('/api/bikeshop', bikeshopRouter);
app.use('/api/repair', repairRouter);
app.use('/api/review', reviewRouter);

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

module.exports = app;
