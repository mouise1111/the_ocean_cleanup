const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());


-
app.use(cors());



// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
  listTables();
});

// Existing route
app.get("/api/data", (req, res) => {
  db.query('SELECT * FROM USERS', (err, results) => {
    if (err) {
      res.status(500).send('Huston, we have a problem!');
    } else {  
      res.json(results);
    }
  });
});



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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
