const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecobin_monitor'
});

app.get('/api/waste-bins', (req, res) => {
  db.query('SELECT * FROM waste_bins', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: 'Error retrieving waste bins' });
    } else {
      res.send(results);
    }
  });
});

app.get('/api/notifications', (req, res) => {
  db.query('SELECT * FROM notifications', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: 'Error retrieving notifications' });
    } else {
      res.send(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});