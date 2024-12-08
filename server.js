const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 5001;

// Middleware to parse URL-encoded form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pokexydawnstla22',
  database: 'members',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve 'index.html' when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ensure it's named 'index.html' in the 'public' folder
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { first_name, last_name, email, company_email, phone, club } = req.body;

  if (!first_name || !last_name || !email || !phone || !club) {
    return res.status(400).send('All required fields must be filled out.');
  }

  const sql = `INSERT INTO registrations (first_name, last_name, email, company_email, phone, club)
               VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [first_name, last_name, email, company_email, phone, club], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Failed to submit the form.');
    }

    console.log('Form submitted successfully!');
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: white;
            text-align: center;
            padding: 50px;
          }
          pre {
            font-family: monospace;
            color: #888;
            font-size: 20px;
            margin: 20px auto;
            white-space: pre-wrap;
          }
          h1 {
            color: #f1f1f1;
          }
          p {
            color: #bbb;
          }
        </style>
      </head>
      <body>
        <h1>Thank You for Your Submission!</h1>
        <p>Your form has been successfully submitted. We appreciate your interest!</p>
        <pre>
  TTTTT  H   H   A   N   N   K   K    Y   Y   OOO   U   U
    T    H   H  A A  NN  N   K  K      Y Y   O   O  U   U
    T    HHHH  AAAAA N N N   KKK        Y    O   O  U   U
    T    H   H  A   A N  NN   K  K       Y    O   O  U   U
    T    H   H  A   A N   N   K   K      Y     OOO    UUU
        </pre>
        <p>Keep working hard and stay strong!</p>
      </body>
      </html>
    `);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
