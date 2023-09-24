import multer from 'multer';
import { Router } from 'express';
import { importFileCategory } from '../controller/ImportFileController';
import { createCategory, listCategory } from '../controller/CategoriesController';
import { createSpecification, listSpecification } from '../controller/SpecificationController';

const router = Router();
const upload =  multer({
    dest: "../tmp"
});

//categories routes
router.post('/categories', createCategory);
router.get('/list', listCategory);
//upload image 
router.post('/import', upload.single("file") , importFileCategory)

//specification routes
router.post('/specification', createSpecification);
router.get('/specification', listSpecification);


export default router;
