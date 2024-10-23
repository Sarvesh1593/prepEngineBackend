import subCategoryRepository from "../repositories/SubCategoryRepository.js";

class subCategoryUseCase {
    async execute(subCategoryData) {
        return await subCategoryRepository.createSubCategory(subCategoryData);
    }
    async findAllSubCategory(){
        return await subCategoryRepository.getAllSubCategories();
    }

    async findSubCategoriesByCategoryName(categoryName){
        const category = await subCategoryRepository.findSubCategoriesByCategoryName(categoryName);

        if(!category) {
             throw new Error(`Category '${categoryName}' not found`);
        }

        return category.subCategory;
    }
}

export default new subCategoryUseCase();