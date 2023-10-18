import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.ID) {
        console.log("AUTHENTICATED");
        next();
    } else {
        console.log("NOT AUTHENTICATED");
        res.status(401).json({message: "Not authenticated", valid: false});
    }
}