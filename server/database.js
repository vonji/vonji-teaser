const fs = require('fs');
const sql = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../db.sqlite');
const dbExists = fs.existsSync(dbPath);
const db = new sql.Database(dbPath);

module.exports = () => {
  db.serialize(() => {
    if (!dbExists) {
      db.run(`CREATE TABLE iknow (
        name TEXT NOT NULL,
        skill TEXT NOT NULL,
        confirmed INTEGER (1),
        email TEXT PRIMARY KEY
      )`);
      const stmt = db.prepare('INSERT INTO iknow VALUES (?, ?, ?, ?)');
      stmt.run('Loup', 'coder', 1, 'loup.peluso@vonji.fr');
      stmt.run('Harris', 'gérer', 1, 'harris.ratsimba@vonji.fr');
      stmt.run('David', 'faire le café', 1, 'david.lancar@vonji.fr');
      stmt.finalize();
    }
  });

  return db;
};
