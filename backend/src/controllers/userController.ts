import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/userService';

export const loginUserController =
  (table: string) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const entity = UserService.loginUser(table, req.body);
      console.log(entity);
      res.json({"message": "Login successful"});
    } catch (error) {
      next(error);
    }
  };

  export const registerUserController =
    (table: string) => (req: Request, res: Response, next: NextFunction) => {
        try {
            const entity = UserService.registerUser(table, req.body);
            res.json(entity);
        }
        catch (error) {
            next(error);
        }
    };