const express = require('express');
//Adjust the route handlers to work on the `router` rather than `app`
const router = express.Router();

//import helpers module
const helpers = require('./helpers');
/*
* Route Handlers
*/

router.get('/trigger-error', (req, res, next) => {
  const err = new Error('This route is triggering an error');
  next(err);
})
// Home route
router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handling request to root or "home" route, "/"');
  
    // Create greeting and use helper functions to reverse and shorten a string
    const greeting = 'Hello World!'
    const reversedGreeting = helpers.reverseString(greeting);
    const shortenedDesc = helpers.shortenString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien diam. Vestibulum sed turpis id eros varius cursus.');
  
    // Send greeting to the page
    res.send(`
      <h1>${greeting} &#128075;</h1>
      <p><strong>Reversed greeting:</strong> ${reversedGreeting}</p>
      <p><strong>Shortened description:</strong> ${shortenedDesc}</p>
    `);
  });
  
  // Custom error route
  router.get('/error', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handling request to custom "error" route, "/error"');
  
    // Create custom error and print error message to the page
    const err = new Error('err');
    err.message = 'Oops, it looks like an error occurred.';
    throw err;
  });

  module.exports = router;

