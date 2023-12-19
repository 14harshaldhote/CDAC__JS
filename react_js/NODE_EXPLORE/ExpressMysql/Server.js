const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.post("/saveRegister", (req, res) => {

    const formdata = req.body;
    const name = formdata.name;
    const email = formdata.email;
    const age = formdata.age;
    const mobile = formdata.mobile;
    const password = formdata.password;

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "persondb"
    })
    con.connect((err) => {
        try {
            if (err) {
                //console.log(err)
                throw err
            }
            const sql = `INSERT INTO person (name, age, mobile, email, password) VALUES
            ('${name}', '${age}', '${mobile}', '${email}', '${password}')`;


            con.query(sql, (err, res) => {
                if (err) {
                    console.log(err)
                    throw err
                }
                console.log("register Sucessfully...")
            });
            con.commit()
            }
            catch (err) {
                console.log(err)
            }
    })

   // console.log(email, password)

    res.sendFile(path.join(__dirname, "login.html"))

})

app.post('/checkLogin', (req, res) => {
    const loginData = req.body
    const email = loginData.email
    const password = loginData.password

    res.send("<h1> ")
})






const port = 3030;
const host = '127.0.0.1';

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});
