import { NextFunction, Request, Response } from "express";
import * as genericService from "../services/generic-service";


export const createEntityController = (table: string) => (req: Request, res: Response<any>, next: NextFunction) => {
    try {
        const result = genericService.createEntity(table, req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

export const getEntityByIdController = (table: string) => (req: Request, res: Response<any>, next: NextFunction) => {
    try {
        const entity = genericService.getEntityById(table, Number(req.params.id));
        res.json(entity);
    } catch (error) {
        next(error);
    }
};
export const getAllEntitiesController = (table: string) => (req: Request, res: Response<any>, next: NextFunction) => {
    try {
        const entities = genericService.getAllEntities(table);
        res.json(entities);
    } catch (error) {
        next(error);
    }
}

export const updateEntityController = (table: string) => (req: Request, res: Response<any>, next: NextFunction) => {
    try {
        const updatedEntity = genericService.updateEntity(
            table,
            Number(req.params.id),
            req.body
        );
        res.json(updatedEntity);
    } catch (error) {
        next(error);
    }
};

export const deleteEntityController = (table: string) => (req: Request, res: Response<any>, next: NextFunction) => {
    try {
        const deletedEntity = genericService.deleteEntity(
            table,
            Number(req.params.id)
        );
        res.json(deletedEntity);
    } catch (error) {
        next(error);
    }
};
