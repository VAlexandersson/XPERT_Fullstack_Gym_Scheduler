import { Request, Response } from 'express';

import db from '../database/db';

export const getAllUsers = (req: Request, res: Response) => {
    console.log('testFunction');

    db.all('SELECT * FROM User', (err, rows) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error getting users' });
        } 
        if (rows.length > 0) {
            console.log(rows);
             return res
            .status(200)
            .json({ message: rows });
        }
        console.log('No users found');
        return res.status(404).json({ message: 'No users found' });

    });
}

export const createUser = (req: Request, res: Response) => {
    console.log('createUser');
    const { name, gym_id, password } = req.body;
    db.run('INSERT INTO users (name, gym_id, password) VALUES (?, ?, ?)', [name, gym_id, password], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error creating user' });
        }
        return res.status(201).json({ message: 'Success User created' });
    });
}


export const getUser = (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log('getUser');
    console.log(username);
    console.log(password);
    db.get('SELECT * FROM User WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error getting user' });
        }
        if (row) {
            console.log(row);
            return res.status(200).json({ message: 'Success', user: row });
        }
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
    })
};
