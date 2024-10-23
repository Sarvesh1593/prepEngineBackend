import Category from "../models/Category.js";
import subCategoryUseCase from "../use_cases/SubCategoryUseCase.js";

const createSubCategory = async (req, res) => {
    try {
        // Destructure name and categoryId from the request body
        const { name, categoryId } = req.body;

        // Handle the image (if uploaded)
        const image = req.file ? req.file.filename : "";

        // Execute the use case to create a new subcategory
        const newSubCategory = await subCategoryUseCase.execute({
            name,
            image,
            categoryId, // Ensure consistency in casing
        });

        // Find the parent category by categoryId
        const category = await Category.findById(categoryId);

        // Check if the category exists before pushing the subcategory
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Add the new subcategory's _id to the parent category's subCategory array
        category.subCategory.push(newSubCategory._id);

        // Save the updated category
        await category.save();

        // Respond with the newly created subcategory
        res.status(201).json(newSubCategory);
    } catch (error) {
        // Respond with a 400 status and a detailed error message
        res.status(400).json({ message: 'Error creating subcategory: ' + error.message });
    }
};


const getSubCategories = async(req,res) =>{
    try {
        const {categoryName } = req.params;
        const subcategories = await subCategoryUseCase.findSubCategoriesByCategoryName(categoryName);
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(500).json({message : 'Server Error '+ error.message})
    }
};




export default {createSubCategory,getSubCategories};
