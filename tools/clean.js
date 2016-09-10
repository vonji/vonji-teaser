import fs from 'fs-extra';
import del from 'del';
import path from 'path';
import ncp from 'ncp';

function clean() {
  return del([
      path.resolve(__dirname, '../build/**'),
  ])
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.ensureDir(
        path.resolve(__dirname, '../build'),
        err => { if (err) { reject(err); } else { resolve(); } }
      );
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      ncp(
        path.resolve(__dirname, '../public/index.html'),
        path.resolve(__dirname, '../build/index.html'),
        err => { if (err) { reject(err); } else { resolve(); } }
      );
    });
  })
  .catch(err => console.error(err));
};

export default clean;
