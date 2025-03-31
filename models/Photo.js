/** @format */

import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

const Photo = mongoose.model("Photo", photoSchema);

// Export the model
export default Photo;
