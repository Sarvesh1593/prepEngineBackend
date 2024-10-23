import mongoose from "mongoose";
 
const schema = mongoose.Schema;

const categorySchema = new schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        default : ""
    },
    subCategory : [{
        type : mongoose.Schema.Types.ObjectId, ref : 'SubCategory'
    }]
});

const category = mongoose.model('Category',categorySchema);

export default category;