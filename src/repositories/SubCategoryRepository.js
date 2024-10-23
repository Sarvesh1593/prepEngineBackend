import subCategory from '../models/subcategory.js';
import Category from '../models/Category.js';

class subCategoryRepository {
    async createSubCategory(data) {
        return await subCategory.create(data);
    }

    async getAllSubCategories() {
        return await subCategory.find();
    }

    // this function is help use for find the category and then retriving the subcategory
    async findSubCategoriesByCategoryName(categoryName){
        try {
            const category = await Category.findOne({
                name : {$regex : new RegExp("^"+categoryName + "$","i")}
            }).populate('subCategory');

            return category;
        } catch (error) {
            throw new Error('Error fetching category from the database : '+ error.message);
        }
    }
}

export default new subCategoryRepository();