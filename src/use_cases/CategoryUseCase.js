import CategoryRepository from "../repositories/CategoryRepository.js";

class CategoryUseCase{
    async execute(categroyData){
        return await CategoryRepository.createCategory(categroyData);
    }

    async findAllCategory(){
        return await CategoryRepository.getAllCategories();
    }

}

export default new CategoryUseCase();