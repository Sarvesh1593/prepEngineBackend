import mongoose from "mongoose";


const schema = mongoose.Schema;

const subCategorySchema = new schema({
    name :{
        type : String,
        required : true
    },
    image : {
        type : String,
        default : ""
    },
    category : {
        type : schema.Types.ObjectId, ref : 'Category',
    },
    questions : [{
        type : schema.Types.ObjectId, ref : 'Question'
    }]
});

const subcategory = mongoose.model('SubCategory',subCategorySchema);

export default subcategory;