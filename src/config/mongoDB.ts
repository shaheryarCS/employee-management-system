import mongoose from "mongoose";

const uri = 'mongodb+srv://username:badpw@cluster0-OMITTED.mongodb.net/' +
  'test?retryWrites=true&w=majority';
// Prints "MongoServerError: bad auth Authentication failed."
export const connectMongoDB = ()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION || '', {
        serverSelectionTimeoutMS: 5000
      }).catch(err => console.log(err.reason));
} 

export  const connectMongoDBLocal = async ()=>{
    const serverSelectionTimeoutMS = 5000;

    // Prints "Failed 0", "Failed 1", "Failed 2" and then throws an
    // error. Exits after approximately 15 seconds.
    for (let i = 0; i < 3; ++i) {
      try {
        await mongoose.connect('mongodb://localhost:27017/employee', {
          serverSelectionTimeoutMS
        });
        break;
      } catch (err) {
        console.log('Failed', i);
        if (i >= 2) {
          throw err;
        }
      }
    }
} 