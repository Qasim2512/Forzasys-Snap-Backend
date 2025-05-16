import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  name: { type: String },
  photo: { type: String },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
});

const Photo = mongoose.model("Photo", photoSchema);
export default Photo;
