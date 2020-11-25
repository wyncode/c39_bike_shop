//import the DB connection
require('./db/config/index');
const express = require('express'),
  app = express(),
  openRoutes = require('./routes/open/index'),
  userRouter = require('./routes/secure/user'),
  repairRouter = require('./routes/secure/repair'),
  cyclistRouter = require('./routes/secure/cyclist'),
  bikeshopRouter = require('./routes/secure/bikeshop'),
  reviewRouter = require('./routes/secure/reviews'),
  bikeRouter = require('./routes/secure/bicycle'),
  orderRouter = require('./routes/secure/serviceorder'),
  passport = require('./middleware/authentication/index'),
  fileUpload = require('express-fileupload'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  http = require('http'),
  MessgaingResponse = require('twilio').twiml.MessagingResponse;

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

//twilio
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, { 'Content-Type': 'text/xm;' });
  res.end(twiml.toString());
});

app.use('/api/user', userRouter);
app.use('/api/cyclist', cyclistRouter);
app.use('/api/bikeshop', bikeshopRouter);
app.use('/api/repair', repairRouter);
app.use('/api/review', reviewRouter);
app.use('/api/order', orderRouter);
app.use('/api/cyclist/', bikeRouter);

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});

module.exports = app;
