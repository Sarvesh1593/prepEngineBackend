import Question from '../models/Question.js';
import Subcategory from '../models/subcategory.js';


class QuestionRepository{
    async createQuestion(data){
        return await Question.create(data);
    }

    async findQuestionBySubCategory(subCategoryName){
        try {
            const subcategory = await Subcategory.find({
                name : {$regex : new RegExp("^"+subCategoryName+"$","i")}
            }).populate('question');

            return subcategory;
        } catch (error) {
            throw new Error("Error "+error.message)
        }
    }

}

export default new QuestionRepository();