import { Request, Response } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepositories';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRepository = CategoriesRepository.getInstance();

/**
 * Response create category
 * @param {CreateCategoryService} createCategoryService
 * @param {CategoriesRepository} categoriesRepository
 * @return create category
 */
export const createCategory = (request: Request, response: Response) => {
    const { name, description } = request.body;
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({name, description})

    response.status(201).send();
};

/**
 * Response list category
 * @param {CategoriesRepository} listCategoryAll
 * @return list specification exist
 */
export const listCategory = (request: Request, response: Response) => {
    const listCategoryAll = categoriesRepository.listCategory();
    response.json(listCategoryAll).status(200);
};