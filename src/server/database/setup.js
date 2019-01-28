const sqlite3 = require('sqlite3').verbose();
const requireDir = require('require-dir');

const models = requireDir('./models');

const db = new sqlite3.Database('shosetsu.db');

console.log(Object.keys(models.Project.fields));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS project (
      id integer PRIMARY KEY,
      name text NOT NULL,
      createdDate timestamp DEFAULT (strftime('%Y-%m-%d %H:%M:%S:%s','now', 'localtime')),
      modifiedDate timestamp DEFAULT (strftime('%Y-%m-%d %H:%M:%S:%s','now', 'localtime'))
    )`);
  db.run(`
    CREATE TRIGGER project_modifiedDate AFTER UPDATE ON project 
      begin
        update project set modifiedDate = strftime('%Y-%m-%d %H:%M:%S:%s','now', 'localtime') where id = old.id;
      end`);

  const stmt = db.prepare('INSERT INTO project (name) VALUES (?)');

  for (let i = 0; i < 10; i += 1) {
    stmt.run(`Test Project ${i}`);
  }

  stmt.finalize();

  db.run("UPDATE project SET name='Test Project 0 updated' where project.id=1");

  // db.each('SELECT * FROM project', (err, row) => {
  //   console.log(row);
  // });

  db.run('DROP TABLE project');
});

db.close();
