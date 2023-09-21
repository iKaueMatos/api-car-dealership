import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

interface Category {
    id: string;
    name: string;
    description: string;
    created_dt: Date;
}

const categories : Category[] = []

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    categories.push({
        id: uuidV4(),
        name,
        description,
        created_dt:new Date()
    });

    return response.status(201);
}); 

export { categoriesRoutes };
