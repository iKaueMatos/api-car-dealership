import { Router } from 'express';
import { createCategory, listCategory } from '../controller/CategoriesController';

const router = Router();

//categories routes
router.post('/categories', createCategory);
router.get('/categories', listCategory);

export default router;
