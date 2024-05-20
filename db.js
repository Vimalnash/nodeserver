import mongoose from "mongoose";

export function dbConnection(MONGO_URL_AtlasCloud) {

    try {
        mongoose.connect(MONGO_URL_AtlasCloud);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("MongoDb Connection Error");
    }
};