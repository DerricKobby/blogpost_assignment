import mongoose from "mongoose";
import { postSchema } from "./post";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },

  posts: {
    type: [postSchema],
  },
});

const userModel = model("User", userSchema);

export default userModel;
