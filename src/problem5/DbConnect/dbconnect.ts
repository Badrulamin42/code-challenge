import Database from "better-sqlite3";

const db = new Database("database.sqlite");

db.prepare(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    createdAt TEXT NOT NULL
  )
`).run();

export default db;


