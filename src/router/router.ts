import multer from 'multer';
import { Router } from 'express';
import { importCategoryUpload } from '../controller/ImportController';
import { createCategory, listCategory } from '../controller/CategoriesController';
import { createSpecification, listSpecification } from '../controller/SpecificationController';

const router = Router();
const upload =  multer({
    dest: "../tmp"
});

//categories routes
router.use('/categories', createCategory);
router.get('/categories', listCategory);
//upload image 
router.post('/import', upload.single("file"), importCategoryUpload)

//specification routes
router.post('/specification', createSpecification);
router.get('/specification', listSpecification);


export default router;
