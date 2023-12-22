const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3030;


// Database connection
/*
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
*/

const condb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'oceanbase'
});


condb.connect(function(err) {
  if(err) {
      console.log("Error in Connection");
  } else {
      console.log("Connected");
  }
})


// hashing code example
app.get('/hash', (req, res) => { 
  bcrypt.hash("123456", 10, (err, hash) => {
      if(err) return res.json({Error: "Error in hashing password"});
      const values = [
          hash
      ]
      return res.json({result: hash});
  } )
})



// login API
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM visitors Where email = ?";
  condb.query(sql, [req.body.email], (err, result) => {
      if(err) return res.json({Status: "Error", Error: "Error in runnig query"});
      if(result.length > 0) {
          bcrypt.compare(req.body.password.toString(), result[0].password, (err, response)=> {
              if(err) return res.json({Error: "password error"});
              if(response) {
                  const token = jwt.sign({role: "gamer"}, "jwt-secret-key", {expiresIn: '1d'});
                  return res.json({Status: "Success", Token: token})
              } else {
                console.log(result)

                  return res.json({Status: "Error", Error: "Wrong Email or Password"});
              }
          })
      } else {
          return res.json({Status: "Error", Error: "Wrong Email or Password"});
      }
  })
})

// Registration API
app.post('/register',(req, res) => {
  const sql = "INSERT INTO visitors (username,email,password) VALUES (?)"; 
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
      if(err) return res.json({Error: "Error in hashing password"});
      const values = [
          req.body.username,
          req.body.email,
          hash,
      ]
      condb.query(sql, [values], (err, result) => {
          if(err){
            // Check if error is due to unique constraint violation
            if (err.code === 'ER_DUP_ENTRY') {
              return res.json({ Status: "Error", Error: "Username or Email already exists" });
            } else {
              return res.json({ Status: "Error", Error: "Error in query" });
            }
          }
          return res.json({Status: "Success"});
      })
  } )
})


// Score submission API
app.post('/submit-score', (req, res) => {
  const userId = 1; // Hardcoded for now, replace with dynamic data as needed
  const { score } = req.body; // Extracting score from the request body

  const sql = "INSERT INTO history_score (user_id, score) VALUES (?,?)";
  condb.query(sql, [userId, score], (err, result) => {
      if(err) {
        console.error('Error in inserting score:', err);
        return res.json({ Status: "Error", Error: "Error in inserting score" });
      }
      return res.json({ Status: "Success", Message: "Score submitted successfully" });
  });
});


// hello world part

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// outputting the data from 
const POLL_INTERVAL = 10000; // 10 seconds
let cachedData = [];

function fetchDataFromDatabase() {
  condb.query('SELECT * FROM scoreboard', (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
    } else {
      cachedData = results;
    }
  });
}

// Poll the database for new data every 10 seconds
setInterval(fetchDataFromDatabase, POLL_INTERVAL);

app.get("/ScoreBoard", (req, res) => {
  const filteredData = cachedData.map(item => ({
    highscore: item.highscore,
    user_id: item.user_id
  }));
  res.json(filteredData);
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