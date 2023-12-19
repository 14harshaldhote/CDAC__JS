const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hey there, it\'s a response from Express!');
});
app.get('/about', (req, res) => {
    res.send('Hey there, it\'s a response from Express! <h1>About</h1>');
});
app.get('/contact', (req, res) => {
    res.send('Hey there, it\'s a response from Express! <h1>Contact</h1>');
});
app.get('/service', (req, res) => {
    res.send('Hey there, it\'s a response from Express! <h1>Service</h1>');
});


const port = 3030;
const host = '127.0.0.1';
const serverPath = path.join(__dirname, 'Server.js');

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});
