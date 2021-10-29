import mongoose from "mongoose";
import { commentSchema } from "./comment";
const { Schema, model } = mongoose;

export const postSchema = new Schema({

  
  title: {
    type: String,
    required: true,
  },

  
  details: {
    type: String,
  },

  
  date: {
    type: Date,
    default: Date.now(),
  },

  
  User: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "author",
  },

  
  banner: {
    type: String,
  },


  comments: {
    type: [commentSchema],
  },


  likes: {
    type: Number,
    default: 0,
  },

 
  Unlikes: {
    type: Number,
    default: 0,
  },
}

);

const postModel = model("post", postSchema);

export default postModel;
