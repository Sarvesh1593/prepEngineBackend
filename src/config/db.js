import dotenv from 'dotenv';
import mongoose  from 'mongoose';
dotenv.config()

const conectionString = process.env.DB_STRING

const connectDB = async() =>{
    try{
        await mongoose.connect(conectionString,{
            autoIndex : true,
            ssl : true,
        })
        console.log(`Connect to Mongodb Atlas`);
    } catch(error){

        console.error(error);
    }
}

export default connectDB