const devServer = require('./devServer.js');
const backend = require('./backend.js');

 process.env.NODE_ENV = 'production';

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === 'production';

if (PROD) {
  backend(PORT);
} else {
  devServer(PORT, backend);
}
