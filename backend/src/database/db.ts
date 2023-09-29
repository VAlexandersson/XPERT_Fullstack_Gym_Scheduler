import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./testDB.db');


db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, gym_id TEXT, password TEXT, role TEXT, UNIQUE(gym_id))');
});

export default db;
