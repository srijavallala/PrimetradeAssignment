const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, '../../database/database.sqlite'), (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite database.');
});

// Create users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'User'
)`);

// Create tasks table
db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
)`);

module.exports = db;
