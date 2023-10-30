import * as db from "../database/db";
import { ValidationError, NotFoundError } from "../middleware/errors";
import { getEntityById } from "./generic-service";
import { User } from "../model/schemas";

export const loginUser = (table: string, data: User) => {
    if (!data.ID || !data.password) throw new ValidationError([], "Id and Password is required.");
    const result = getEntityById(table, data.ID);
    const user: User = result as User;
    if (user.password !== data.password) throw new ValidationError([], "Password is incorrect.");
    return user;
}

export const registerUser = (table: string, data: User) => {
    if (!data.ID || !data.username || !data.password ) throw new ValidationError(["Error"], "Data is required for creating.");
    return db.create(table, data);
}

export function checkUser(table: string, body: any) {
  throw new Error('Function not implemented.');
}
