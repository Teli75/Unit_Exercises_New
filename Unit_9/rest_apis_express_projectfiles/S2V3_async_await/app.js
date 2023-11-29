const express = require('express');
const app = express();

const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', async (req, res)=>{
    const quotes = await records.getQuotes();
    res.json(quotes);
});
// Send a GET request to /quotes/:id to READ(view) a quote
app.get('/quotes/:id', async (req, res)=>{
    const quote = await records.getQuote(req.params.id);
    res.json(quote);

});
// Send a POST request to /quotes to  CREATE a new quote
app.post('/quotes', async (req, res) => {
    const quote = await records.createQuote({
        //the request object has a property called body.
        //We're making a post req containing json for a new quote with postman our client. We're then accessing that info with express through req.body and setting those values to a new object that we're passing to the create quote function. Storing the newly created quote to a quote variable and sending it back to the client. 
        quote: req.body.quote,
        author: req.body.author
    });
        res.json(quote);
})

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
// Send a DELETE request to /quotes/:id DELETE a quote 
// Send a GET request to /quotes/quote/random to READ (view) a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));

