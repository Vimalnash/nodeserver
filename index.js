import express from 'express';
import { dbConnection } from './db.js';
import { postsRouter } from './Routes/posts.js';
import { Users } from "./models/users.js";
import dotenv from "dotenv";
import { userRouter } from './Routes/users.js';

// Configuring Environment Variables
dotenv.config();

//Setting PORT / Setting Envs
// const PORT = 8080;
const PORT = process.env.PORT;
const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL;
const MONGO_URL_AtlasCloud = process.env.MONGO_URL_AtlasCloud;

//Database Connection
dbConnection(MONGO_URL_LOCAL, MONGO_URL_AtlasCloud);
// dbConnection();

//Initializing Express Server
const app = express();

//Middlewares
app.use(express.json());

//Routes Initialization - base api path
app.use("/api/posts", postsRouter);
app.use("/api/users", userRouter);

//Activating and Listening server
app.listen(PORT, ()=> {
    console.log( `
     Server Started in PORT : ${PORT},
     Listening in http://localhost:${PORT}
     `);
 });