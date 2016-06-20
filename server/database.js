const fs = require('fs');
const sql = require('sqlite3').verbose();
const dbExists = fs.existsSync('./db.sqlite');
const db = new sql.Database('./db.sqlite');

module.exports = () => {
  db.serialize(() => {
    if (!dbExists) {
      db.run(`CREATE TABLE iknow (
        name TEXT NOT NULL,
        activity TEXT NOT NULL,
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
