import { APIError } from "./errors";
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: APIError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
}