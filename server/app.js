require('./db/config/index');
const express = require('express'),
  app = express(),
  cookieParser = require('cookie-parser'),
  openRoutes = require('./routes/open/'),
  // passport = require('./middleware/authentication'),
  path = require('path');

//Middleware
app.use(express.json());
// app.use('/api/*', passport.authenticate('jwt', { session: false }));

// Unauthenticated routes

app.use('/api', openRoutes);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use(cookieParser());

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
