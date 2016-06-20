const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const createDb = require('./database');
const httpProxy = require('http-proxy');
const bundle = require('./bundle.js');

const app = express();
const db = createDb();

const proxy = httpProxy.createProxyServer();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Webserver starts for production : ' + isProduction);

if (!isProduction) {
  bundle();
  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080',
    });
  });
} else {
  app.get('/build/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/bundle.js'));
  });
}

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
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

proxy.on('error', () => {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
