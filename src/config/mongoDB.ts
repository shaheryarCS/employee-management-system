import mongoose from "mongoose";

export const connectMongoDB = ()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION || '', {
        serverSelectionTimeoutMS: 5000
      }).catch(err => console.log(err.reason));
} 
