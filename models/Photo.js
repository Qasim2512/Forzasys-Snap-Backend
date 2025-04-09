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
});

const Photo = mongoose.model("Photo", photoSchema);

// Export the model
export default Photo;
