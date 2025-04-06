/** @format */

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  video: {
    type: String,
  },
});

const Video = mongoose.model("Video", videoSchema);

// Export the model
export default Video;