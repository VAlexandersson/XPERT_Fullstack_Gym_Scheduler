import * as db from "../database/db";
import { ValidationError, NotFoundError } from "../error/errors";
import { getEntityById } from "./genericService";



type User = {
    id: number;
    username: string;
    password: string;
    roleID: number;
};


export const loginUser = (table: string, data: User) => {
    if (!data.id || !data.password) throw new ValidationError(["Error"], "Id and Password is required.");

    const user: User = getEntityById(table, data.id) as User;
    if (user.password !== data.password) throw new ValidationError([], "Password is incorrect.");
    return user;
}


export const registerUser = (table: string, data: User) => {
    if (!data.id || !data.username || !data.password ) throw new ValidationError(["Error"], "Data is required for creating.");
    return db.create(table, data);
}