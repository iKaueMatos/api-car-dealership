import { Router } from 'express';
import { createCategory, listCategory } from '../controller/CategoriesController';
import { createSpecification, listSpecification } from '../controller/SpecificationController';

const router = Router();

//categories routes
router.post('/categories', createCategory);
router.get('/categories', listCategory);

//specification routes
router.post('/specification', createSpecification);
router.get('/specification', listSpecification);

export default router;
