
import * as db from '../database/db';
import { ValidationError, NotFoundError } from '../middleware/errors';


export const createEntity = (table: string, data: any) => {
  console.log(data);
  if (!data) throw new ValidationError(['Error'], "Data is required for creating.");
  return db.create(table, data);
};


export const getEntityById = (table: string, id: number) => {
  const entity = db.readById(table, id);
  if (!entity) throw new NotFoundError(`Entity with ID ${id} not found in ${table}.`);
  return entity;
};


export const updateEntity = (table: string, id: number, data: any) => {
  if (!data) throw new ValidationError([], "Data is required for updating.");
  const updatedEntity = db.updateById(table, id, data);
  if (!updatedEntity) throw new NotFoundError(`Entity with ID ${id} not found in ${table}.`); 
  return updatedEntity;
};


export const deleteEntity = (table: string, id: number) => {
  const deletedEntity = db.deleteById(table, id);
  if (!deletedEntity) throw new NotFoundError(`Entity with ID ${id} not found in ${table}.`);
  return deletedEntity;
};


export const getAllEntities = (table: string) => {
  return db.read(table);
};
