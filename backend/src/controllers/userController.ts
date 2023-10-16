import { Request, Response } from 'express';

import db from '../database/db';

export const testFunction = (req: Request, res: Response) => {
    console.log('testFunction');
    res.send('userController testFunction!');

}

export const testThing = (req : Request, res : Response) => {
    console.log("TEST")
    let a = JSON.parse(req.body)
    res.status(200)
    res.send("TEST: " + a.membershipID)
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

export const getExercises = (req : Request, res : Response) => {
    db.all('SELECT * FROM CatalogExercise', (err, row) => {
        if (err)
        {
            console.log(err);
            return res.status(500).json({ message: 'Error getting exercises' });
        }
        if (row)
        {
            return res.status(200).json({ message: 'Success', catalog: row });
        }
    })
}



export const getUser = (req: Request, res: Response) => {
    const { membershipID, password } = req.body;
    console.log("Logging in using credentials: \nID:" + membershipID);
    console.log("Password: " + password);
    db.get('SELECT * FROM User WHERE ID = ? AND password = ?', [membershipID, password], (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error getting user' });
        }
        if (row) {
            return res.status(200).json({ message: 'Success', user: row });
        }
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
    })
};
