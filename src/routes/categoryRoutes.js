import express from 'express';
import categoryController from '../controllers/CategoryController.js'; // Import the whole object
import upload from '../uploadimage/upload.js';

const router = express.Router();

router.get('/get-categories',categoryController.getCategories);
router.post('/create-category',upload.single('image'),  categoryController.createCategory);

export default router;

