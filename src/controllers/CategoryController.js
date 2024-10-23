import Categoryusecase from '../use_cases/CategoryUseCase.js';


const getCategories = async(req,res) => {
    try{
        const categories = await Categoryusecase.findAllCategory();
        res.json(categories);
    }catch(error){
        res.status(500).json({message : 'Server Error'+error})
    }
};

const createCategory = async(req,res) =>{
    try {
        const { name } = req.body;
        const image = req.file ? req.file.filename : ""; // Handle uploaded image

        // Create new category with image
        const newCategory = await Categoryusecase.execute({ name, image });

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({message : 'Error creating category+'+error});
    }
};

export default {getCategories,createCategory};