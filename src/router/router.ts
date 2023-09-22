import multer from 'multer';
import { Router } from 'express';
import { createCategory, importCategoryUpload, listCategory } from '../controller/categoriesController';
import { createSpecification, listSpecification } from '../controller/SpecificationController';

const router = Router();
const upload =  multer({
    dest: "../tmp"
});

//categories routes
router.use('/categories', createCategory);
router.get('/categories', listCategory);

//specification routes
router.post('/specification', createSpecification);
router.get('/specification', listSpecification);

//upload image 
router.post('/import', upload.single("file"), importCategoryUpload)

export default router;
