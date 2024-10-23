import express from 'express';
import subCategoryController from "../controllers/SubCategoryController.js";
import upload from '../uploadimage/upload.js';


const router = express.Router();

router.post('/create-subCategory',upload.single('image'),subCategoryController.createSubCategory);
router.get('/get-subCategory/:categoryName',subCategoryController.getSubCategories);


export default router;