import { Request, Response } from 'express';

import db from '../database/db';
import { Console } from 'console';

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
    const { username, gym_id, password } = req.body;
    db.get('SELECT * FROM User WHERE ID = ?', [gym_id], (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error creating user' });
        }
        if (row) {
            console.log('User already exists');
            return res.status(409).json({ message: 'User already exists' });
        }
        db.run('INSERT INTO User (ID, username ,password) VALUES (?, ?, ?)', [gym_id, username, password], (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Error creating user' });
            }
        return res.status(201).json({ message: 'Success User created' });
    });
    });
    console.log('test');
}


export const getUser = (req: Request, res: Response) => {
    const { gym_id, password } = req.body;
    console.log('getUser');
    console.log(gym_id);
    console.log(password);
    db.get('SELECT * FROM User WHERE username = ? AND password = ?', [gym_id, password], (err, row) => {
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
