import Subcategory from '../models/subcategory.js';
import QuestionUseCase from '../use_cases/QuestionUseCase.js';


const getQuestion = async(req,res) => {
    try {
        const {subCategoryName} = req.params;
        const questions = await QuestionUseCase.findQuestionBySubCategory(subCategoryName);
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({message : "Serrror Error"+ error});
    }
};


const createQuestion = async(req,res) =>{
    try {
        const {question,options,answer,subCategoryId} = req.body;
        const newQuestion = await QuestionUseCase.execute({
            question,
            options,
            answer,
            subCategoryid : subCategoryId,
        });

        const subcategory = await Subcategory.findById(subCategoryId)
        subcategory.questions.push(newQuestion._id);
        await subcategory.save();

        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(400).json({message : 'Error creating question'+error.message});
    }
};


export default {getQuestion,createQuestion};