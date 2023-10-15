import * as db from "../database/db";
import { ValidationError, NotFoundError } from "../middleware/errors";
import { getEntityById } from "./generic-service";



type User = {
    ID: number;
    username: string;
    password: string;
    Role_ID: number;
};


export const loginUser = (table: string, data: User) => {
    if (!data.ID || !data.password) throw new ValidationError([], "Id and Password is required.");

    const result = getEntityById(table, data.ID);
    console.log(result);
    const user: User = result as User;
    console.log(user);
    console.log(user.ID);
    console.log(user.password);
    console.log(data.password);
   // const user: User = getEntityById(table, data.id) as User;
    if (user.password !== data.password) throw new ValidationError([], "Password is incorrect.");
    return user;
}


export const registerUser = (table: string, data: User) => {
    if (!data.ID || !data.username || !data.password ) throw new ValidationError(["Error"], "Data is required for creating.");
    return db.create(table, data);
}