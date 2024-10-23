import express from 'express';
import questionController from '../controllers/QuestionController.js';

const router = express.Router();

router.get('/get-questions/:categoryId',questionController.getQuestion);
router.post('/create-question',questionController.createQuestion);


export default router;