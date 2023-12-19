// server/server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

// Your MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mumma@123', // Update with your MySQL password
  database: 'persondb',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define your API routes
app.post('/saveRegister', (req, res) => {
  const { name, age, mobile, email, password } = req.body;

  const sql = `INSERT INTO person (name, age, mobile, email, password) VALUES (?, ?, ?, ?, ?)`;
  const values = [name, age, mobile, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving registration:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Registration saved successfully');
      res.sendFile(path.join(__dirname, '../public', 'login.html'));
    }
  });
});

app.post('/checkLogin', (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM person WHERE email = ? AND password = ?`;
  const values = [email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error checking login:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.length > 0) {
        console.log('Login successful');
        res.sendFile(path.join(__dirname, '../public', 'home.html'));
      } else {
        console.log('Login failed');
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});

// Other routes...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
