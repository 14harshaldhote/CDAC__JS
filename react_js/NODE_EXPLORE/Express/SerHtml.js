const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'namepage.html'));
});

// app.get('/name', (req, res) => {
//     const q = req.query;
//     console.log("Username:", q.username);
//     console.log("Password:", q.password);

//     res.send(`<h1>Name got ....: ${q.username}</h1><h1>Password got ....: ${q.password}</h1>`);
// });



app.post('/name', (req, res) => {
    const { username, password } = req.body;
    console.log("Username:", username);
    console.log("Password:", password);
  
    res.send(`<h1>Name got ....: ${username}</h1><h1>Password got ....: ${password}</h1>`);
  });
  

const port = 3030;
const host = '127.0.0.1';

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});
