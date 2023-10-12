import { Request, Response } from 'express';
import db from '../database/db';

export const getAllUsers = (req: Request, res: Response) => {
    db.all('SELECT * FROM User', (err, rows) => {
        if (err)                return res.status(500).json({ message: 'Error getting users' });
        if (rows.length > 0)    return res.status(200).json({ message: rows } );
        return res.status(404).json({ message: 'No users found' });
    });
}

export const createUser = (req: Request, res: Response) => {
    const { username, gym_id, password } = req.body;
    db.get('SELECT * FROM User WHERE ID = ?', [gym_id], (err, row) => {
        if (err) return res.status(500).json({ message: 'Error creating user' }); 
        if (row) return res.status(409).json({ message: 'User already exists' });
        
        db.run('INSERT INTO User (ID, username ,password) VALUES (?, ?, ?)', [gym_id, username, password], (err) => {
            if (err) return res.status(500).json({ message: 'Error creating user' }); 
            return res.status(201).json({ message: 'Success User created' });
        });
    });
}


export const loginUser = (req: Request, res: Response) => {
    const { gym_id, password } = req.body;
    db.get('SELECT * FROM User WHERE username = ? AND password = ?', [gym_id, password], (err, row) => {
        if (err) return res.status(500).json({ message: 'Error getting user' });
        if (row) return res.status(201).json({ message: 'Success', user: row });
        return res.status(404).json({ message: 'User not found' });
    })
};


export const deleteUser = (req: Request, res: Response) => {
    const { gym_id } = req.body;
    console.log('deleteUser'+ gym_id);
    db.get('SELECT * FROM User WHERE ID = ?', [gym_id], (err, row) => {
        if (err) return res.status(500).json({ message: 'Error deleting user' });
        if (row) {
            db.run('DELETE FROM User WHERE ID = ?', [gym_id], (err) => { if (err) return res.status(500).json({ message: 'Error deleting user' }); });
            return res.status(202).json({ message: 'Success user deleted' });
        }
        return res.status(404).json({ message: 'User not found' });
    });
}


export const updateUser = (req: Request, res: Response) => {
    const { gym_id, username, password } = req.body;
    db.get('SELECT * FROM User WHERE ID = ?', [gym_id], (err, row) => {
        if (err)  return res.status(500).json({ message: 'Error updating user' });
        if (row) {
            db.run('UPDATE User SET username = ?, password = ? WHERE ID = ?', [username, password, gym_id], (err) => {
                if (err) return res.status(500).json({ message: 'Error updating user' });
            });
            return res.status(201).json({ message: 'Success user updated' });
        }
        return res.status(404).json({ message: 'User not found' });
    });
}