import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(cors());
app.use('/posts', postRoutes);
app.use("/user", userRouter);

// const CONNECTION_URL = 'mongodb+srv://abduselamm:Java1234@hubo.csk8fzd.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));


