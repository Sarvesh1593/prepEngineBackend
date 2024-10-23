import Category from '../models/Category.js';

class CategoryRepository {
    async createCategory(data) {
        return await Category.create(data);
    }

    async getAllCategories(){
        return await Category.find()
    }
}

export default new CategoryRepository();