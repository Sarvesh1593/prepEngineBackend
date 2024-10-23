import QuestionRepository from '../repositories/QuestionRepository.js';


class QuestionUseCase{
    async execute(QuestionData){
        return await QuestionRepository.createQuestion(QuestionData);
    }

    async findQuestionBySubCategory(subCategoryName){
        const subCategory = await QuestionRepository.findQuestionBySubCategory(subCategoryName);

        if(!subCategory) {
            throw new Error(`Subcategory '${subcategoryName}' not found`);
        }
        return subCategory.question;
    }
}

export default new QuestionUseCase();