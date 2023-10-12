import { Request, Response } from "express";
import db from "../database/db";


export const getAllExercises = (req: Request, res: Response) => {
  db.all("SELECT * FROM Exercise", (err, rows) => {
    if (err)
      return res.status(500).json({ message: "Error getting exercises" });
    if (rows.length > 0) return res.status(200).json({ message: rows });
    return res.status(404).json({ message: "No exercises found" });
  });
};