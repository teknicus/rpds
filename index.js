const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8085;



app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use('/client', express.static(__dirname + '/client'));

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + '/client', 'alt.html'));
});

app.post('/QR', (req, res) => {
    const reqObj = req.body;

    var parsedObj = JSON.parse(reqObj);
    console.log(JSON.stringify(parsedObj));


    res.send('QR Code Data received');
});

app.post('/Auth', (req, res) => {
    const reqObj = req.body;

    var parseString = require('xml2js').parseString;

    parseString(reqObj, function (err, result) {
        console.dir(result);
    });

    console.log(JSON.stringify(parsedObj));


    res.send('QR Code Data received');
});


app.post('/FE', (req, res) => {
    const reqObj = req.body;
    console.log(reqObj);


//    res.send('FE Code Data received');
});

app.get('/FE', (req, res) => {
    console.log(req);

    res.send('FE Code Data received');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));