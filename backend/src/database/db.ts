import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./db.sqlite');


db.serialize(() => {
/*     db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, gym_id TEXT, password TEXT, role TEXT, UNIQUE(gym_id))');
    db.run('CREATE TABLE IF NOT EXISTS exercise (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, UNIQUE(name))');
 */});

export default db;
