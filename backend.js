const express = require('express');
const path = require('path');

module.exports = PORT => {
  const app = express();
  app.use('/build', express.static(path.resolve(__dirname, 'public/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
  });
  app.listen(PORT, () => {
    console.log('BACKEND running on port ' + PORT);
  });
};
