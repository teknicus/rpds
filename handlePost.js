const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8085;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/QR', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.listen(port, () => console.log(`Hello world app alistening on port ${port}!`));