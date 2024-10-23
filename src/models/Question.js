import mongoose from 'mongoose';

const schema = mongoose.Schema;

const questionSchema = new schema({
    question : {
        type : String,
        required : true
    },
    options : [{
        type : String,
        required : true
    }],
    answer : {
        type : String,
        required : true
    },
    subcategory : {
        type : mongoose.Schema.Types.ObjectId, ref :'SubCategory'
    }
});

const question = mongoose.model('Question',questionSchema);

export default question;

