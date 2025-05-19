/** @format */

import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Linking to the user who uploaded the photo
});

const Photo = mongoose.model("Photo", photoSchema);

// Export the model
export default Photo;
