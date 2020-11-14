require('./db/config');
const express = require('express'),
  cookieParser = require('cookie-parser'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication'),
  path = require('path');

const app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes
// app.use(openRoutes);
app.use('/api/cyclist', openRoutes);
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
