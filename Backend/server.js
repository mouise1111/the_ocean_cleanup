const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
/*
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
*/

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'oceanbase'
});

// login API
app.post('/login', (req, res) => {
  console.log('POST request to /login received');

  const sql = "SELECT * FROM logintest WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("login failed");
    }
    if (data.length > 0) {
      return res.json("Login Successfully");
    }
    else{
      return res.json("No Record")
    }
  });
});

// Registration API

app.post('/register', (req, res) => {
  const sql = "INSERT INTO logintest (username,email,password) VALUES (?,?,?)"
  const values = [
    req.body.username,
    req.body.email,
    req.body.password
  ]
  db.query(sql,[req.body.username,req.body.email, req.body.password], (err, data) => {
    if (err){
      return res.json(err);
    }
    return res.json("you just created an account");
  })

})



app.listen(8081, () => {
  console.log("Listening...")

})










// hello world part

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
  listTables();
});
function listTables() {
  db.query('SHOW TABLES', (err, result) => {
    if (err) {
      console.error('Error fetching tables: ', err);
      return;
    }
    console.log('Tables in the database:');
    console.log(result);
  });
}







/* 
// Existing route
const POLL_INTERVAL = 10000; // 10 seconds
let cachedData = [];

function fetchDataFromDatabase() {
  db.query('SELECT * FROM USERS', (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
    } else {
      cachedData = results;
    }
  });
}

// Poll the database for new data every 10 seconds
setInterval(fetchDataFromDatabase, POLL_INTERVAL);

app.get("/api/data", (req, res) => {
  res.json(cachedData);
});





function listTables() {
    db.query('SHOW TABLES', (err, result) => {
      if (err) {
        console.error('Error fetching tables: ', err);
        return;
      }
      console.log('Tables in the database:');
      console.log(result);
    });
}
*/