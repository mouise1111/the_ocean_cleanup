const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());



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
  database: 'ocean'
});


// Tutorial part



app.post('/users', (req, res) => {

  const sql = "SELECT * FROM users WHERE username = ? AND password_hash = ?";
  db.query(sql, [req.body.username, req.body.password_hash], (err, data) => {

    if(err) return res.json("user does't exist" + err);
    return res.json("User Connected"+ data);

  });
});



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/* 
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
  listTables();
});

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