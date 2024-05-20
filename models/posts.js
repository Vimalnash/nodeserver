import mongoose from "mongoose";
import { ObjectId } from "bson";

const postSchema = new mongoose.Schema({
    companyName : {type: String, required: true},
    role : {type: String, required: true},
    questions : {type: Array, required: true},
    date : {type: String, required: true},
    location : {type: String, required: true},
    user : {type: ObjectId, ref: "users"},
});


const Posts = mongoose.model( "posts", postSchema );
export { Posts };