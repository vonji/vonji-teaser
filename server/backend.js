const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const createDb = require('./database');

module.exports = (PORT) => {
  const app = express();
  const db = createDb();

  const buildPath = path.resolve(__dirname, '../build');

  app.use('/build', express.static(buildPath));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/iknow/random', (req, res) => {
    db.get(
      `SELECT name, activity
       FROM iknow
       WHERE confirmed=1
       ORDER BY RANDOM() LIMIT 1`,
    (err, row) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(row);
      }
    });
  });

  app.get('/api/iknow', (req, res) => {
    db.all(
      `SELECT name, activity
      FROM iknow
      WHERE confirmed=1`,
    (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).json(err);
      } else {
        res.json(row);
      }
    });
  });

  app.post('/api/iknow', (req, res) => {
    console.log(req.body);
    db.run('INSERT INTO iknow VALUES (?, ?, 0, ?)',
      [req.body.name, req.body.activity, req.body.email],
      err => {
        if (err === null) {
          console.log('inserted at ' + this.lastID);
          res.status(202).json({ id: this.lastID });
        } else {
          console.log('not inserted at ' + err);
          res.status(500).json(err);
        }
      });
  });

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../assets/index.html'));
  });

  app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
  });
};
