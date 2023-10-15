export class APIError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class NotFoundError extends APIError {
    constructor(message: string = 'Not found') {
        super(message, 404);
    }
}


export class ValidationError extends APIError {
    errors: string[];
    constructor(errors: string[], message: string = 'Validation error') {
        super(message, 400);
        this.errors = errors;
    }
}