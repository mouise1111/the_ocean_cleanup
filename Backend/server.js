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


app.post('/users', (req, res) => {
  console.log('POST request to /users received');

  const sql = "SELECT * FROM users WHERE username = ? AND password_hash = ? AND email = ?";
  db.query(sql, [req.body.username,req.body.email, req.body.password_hash], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error querying the database", error: err });
    }
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json({ message: "User Connected", user: data[0] });
  });
});



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




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