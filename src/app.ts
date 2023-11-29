import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './config';
dotenv.config();
import {appRoute} from "./routes/index";
import mongoose from 'mongoose';

const app = express();
const port = process.env.port;
connectMongoDB();

// Parse the request
app.use(express.urlencoded({extended:false}));

//Take care of json data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is live');
});


app.use('/api',appRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});