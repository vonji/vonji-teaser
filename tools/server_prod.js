const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081;

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
