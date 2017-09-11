require('dotenv').config();

const {
    PORT: port,
    HOST: host
} = process.env;

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db');
db.connect();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './../../zylovue-frontend/public')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../zylovue-frontend/public/index.html'));
});

// handle error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
  
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(port, host, () => {
    console.log(`Server is listening to port : ${port}`);
});

io.on('connection', (client) => {
    console.log('Client is connected', client);
});
