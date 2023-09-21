import { Request, Response } from 'express';
import CategoryClass from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepositories';

const categoriesRepository = new CategoriesRepository();

export const createCategory = (request: Request, response: Response) => {
    const { name, description } = request.body;

    categoriesRepository.create({ name, description })
    response.status(201).send();

    //test
    // console.log(response);
};

export const listCategory = (request: Request, response: Response) => {
    const listCategoryAll = categoriesRepository.list();
    response.json(listCategoryAll).status(200);

    //test
    // console.log(response);
};


