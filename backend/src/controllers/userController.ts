import { Request, Response } from 'express';

import db from '../database/db';

export const testFunction = (req: Request, res: Response) => {
    console.log('testFunction');
    res.send('XPERT API!');

}


export const createUser = (req: Request, res: Response) => {
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
    const { gym_id, password } = req.body;

    db.get('SELECT * FROM users WHERE gym_id = ? AND password = ?', [gym_id, password], (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error getting user' });
        }
        if (row) {
            return res.status(200).json({ message: 'Success', user: row });
        }
        return res.status(404).json({ message: 'User not found' });
    })
};

