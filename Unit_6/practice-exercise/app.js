// Import Express and set up the app
const express = require('express');
const app = express();

//Import router
const routes = require('./routes');

//Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

//Use `app.use()` to pass the new `routes` module to the Express app
app.use(routes);

//Pass error handlers to app
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);

// Turn on Express server
app.listen(3002, () => {
  console.log('Server listening on port 3000');
})

