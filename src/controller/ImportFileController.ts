import { Request, Response } from 'express';
import { ImportFileCategoryRepositories } from '../modules/cars/repositories/ImportFileCategoryRepositories';
import { ImportFileCategoryService } from '../services/ImportFileCategoryService';

const importFileRepository = ImportFileCategoryRepositories.getInstance();

export const importFileCategory = async (request: Request, response: Response) => {
    const { file } : any = request;
    const importUploadFile = new ImportFileCategoryService(importFileRepository);
    
    try {
        const categories = await importUploadFile.execute(file);
        return response.status(200).json(categories);
    } catch (error) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};
