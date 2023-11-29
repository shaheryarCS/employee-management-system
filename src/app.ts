import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './config';
dotenv.config();
import {appRoute} from "./routes/index";
import mongoose from 'mongoose';

const app = express();
const port = process.env.port;
connectMongoDB();
// mongoose.connect("mongodb://127.0.0.1:27017/employee" || '', {
//   serverSelectionTimeoutMS: 5000
// }).catch(err => console.log(err.reason));


// Parse the request
app.use(express.urlencoded({extended:false}));

//Take care of json data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api',appRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});