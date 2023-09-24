import { Request, Response } from 'express';
import { ImportFileCategoryRepositories } from '../modules/cars/repositories/ImportFileCategoryRepositories';
import { ImportFileCategoryService } from '../services/ImportFileCategoryService';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepositories';

const categoriesRepository = CategoriesRepository.getInstance();
const importFileRepository = ImportFileCategoryRepositories.getInstance();

export const importFileCategory = async (request: Request, response: Response) => {
    const { file } : any = request;
    const importUploadFile = new ImportFileCategoryService(categoriesRepository);
    
    try {
        const categories = await importUploadFile.execute(file);
        console.log(importUploadFile)
        return response.status(200).json(categories);
    } catch (error) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};
