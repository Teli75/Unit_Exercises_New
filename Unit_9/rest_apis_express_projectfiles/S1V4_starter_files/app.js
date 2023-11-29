const express = require('express');
const app = express();

//second argument is the call back function we want to run
//By visiting the site we're sending a get request to the greetings route which we've programmed to send a json object
app.get('/greetings', (req, res)=> {
    res.json({greeting: "Hello World!"})
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
