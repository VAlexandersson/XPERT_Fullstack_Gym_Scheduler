import { Request, Response } from "express";
import db from "../database/db";

type GenericDB = {
    id: number;
    [key: string]: any;
}

export const getAll = <T extends GenericDB>(table: string) => (req: Request, res: Response) => {
    const rows = db.prepare(`SELECT * FROM ${table}`).all();
    res.json(rows);
};


export const getById = <T extends GenericDB>(table: string) => (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const row = db.prepare(`SELECT * FROM ${table} WHERE ID = ?`).get(id);
    if (row) return res.status(200).json(row);
    return res.status(404).json({ message: `${table} not found` });
}

export const create = <T extends GenericDB>(table: string) => (req: Request, res: Response) => {
    const data = req.body;
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);
    const query = db.prepare(`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`);
    query.run(values);
    res.status(201).json({ message: `Success ${table} created` });
}

export const deleteById = (table: string) => (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const query = db.prepare(`DELETE FROM ${table} WHERE id = ?`);
  query.run(id);
  res.status(204).send();
};


export const updateById = <T extends GenericDB>(table: string) => (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const setClause = Object.keys(data).map(key => `${key} = ?`).join(',');
    const values = [...Object.values(data), id];
    const stmt = db.prepare(`UPDATE ${table} SET ${setClause} WHERE id = ?`);
    stmt.run(...values);
    res.status(204).send();
};