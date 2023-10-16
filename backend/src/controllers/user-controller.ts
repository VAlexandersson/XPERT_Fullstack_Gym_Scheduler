import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/user-service';

export const loginUserController =
  (table: string) => (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("LOGIN USER CONTROLLER");
      const user = UserService.loginUser(table, req.body);
      console.log("LOGIN USER");
      console.log(user);
      console.log(user.ID);
      req.session.userId = user.ID;
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