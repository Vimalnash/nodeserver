import mongoose from "mongoose";


// Method 1 : import dotenv and configure here
    // import dotenv from "dotenv"

    // dotenv.config();

    // const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL;
    // const MONGO_URL_AtlasCloud = process.env.MONGO_URL_AtlasCloud;


// Method 2 : passing as argument in function from index.js

// export function dbConnection() {
export function dbConnection(MONGO_URL_LOCAL, MONGO_URL_AtlasCloud) {

    // const params = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // };

    try {
        // mongoose.connect(MONGO_URL_LOCAL, params);
        
        mongoose.connect(MONGO_URL_AtlasCloud);
        // mongoose.connect(MONGO_URL_LOCAL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("MongoDb Connection Error");
    }
};