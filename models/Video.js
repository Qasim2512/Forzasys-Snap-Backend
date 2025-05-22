/** @format */

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  video: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;