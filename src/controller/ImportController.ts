import { Request, Response } from 'express';

export const importCategoryUpload = (request: Request, response: Response) => {
    const { file } = request;
    console.log(file);
    return response.send(201);
}