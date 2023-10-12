import { Request, Response } from "express";
import db from "../database/db";


export const getAllExercises = (req: Request, res: Response) => {
    db.all('SELECT * FROM CatalogExercise', (err, rows) => {
        if (err)                return res.status(500).json({ message: 'Error getting exercises' });
        if (rows.length > 0)    return res.status(200).json({ message: rows } );
        return res.status(404).json({ message: 'No exercises found' });
    });
}

export const getExercise = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    db.get('SELECT * FROM CatalogExercise WHERE ID = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ message: 'Error getting exercise' });
        if (row) return res.status(201).json({ message: 'Success', exercise: row });
        return res.status(404).json({ message: 'Exercise not found' });
    })
}

export const createExercise = (req: Request, res: Response) => {
    const { name, description, type, difficulty } = req.body;
    db.get('SELECT * FROM CatalogExercise WHERE name = ?', [name], (err, row) => {
        if (err) return res.status(500).json({ message: 'Error creating exercise' }); 
        if (row) return res.status(409).json({ message: 'Exercise already exists with name: ' + name });
        
        db.run('INSERT INTO CatalogExercise (name, description, type, difficulty) VALUES (?, ?, ?, ?)', [name, description, type, difficulty], (err) => {
            if (err) return res.status(500).json({ message: 'Error creating exercise' }); 
        });
        return res.status(201).json({ message: 'Success Exercise created' });
    });
}


export const deleteExercise = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    console.log(id);
    db.get('SELECT * FROM CatalogExercise WHERE ID = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ message: 'Error deleting exercise' });
        if (row) {
            db.run('DELETE FROM CatalogExercise WHERE ID = ?', [id], (err) => { 
                if (err) return res.status(500).json({ message: 'Error deleting exercise' }); 
            });
            return res.status(202).json({ message: 'Success exercise deleted' });
        }
        return res.status(404).json({ message: 'Exercise not found' });
    });
}

export const updateExercise = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const { name, description, type, difficulty } = req.body;
    db.get('SELECT * FROM CatalogExercise WHERE ID = ?', [id], (err, row) => {
        if (err)  return res.status(500).json({ message: 'Error updating exercise at SELECT' });
        if (!row) return res.status(404).json({ message: 'Exercise not found' });
        db.run('UPDATE CatalogExercise SET name = ?, description = ?, type = ?, difficulty = ? WHERE ID = ?', [name, description, type, difficulty, id], (err) => {
            if (err) return res.status(500).json({ message: 'Error updating exercise at UPDATE' });
        });
        return res.status(201).json({ message: 'Success exercise updated' });
    });
}