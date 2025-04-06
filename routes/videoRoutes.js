/** @format */

import express from "express";
import Video from "../models/Video.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route to upload a Video
router.post("/", upload.single("Video"), async (req, res) => {
  try {
    const { name } = req.body;
    const videoBase64 = req.file ? req.file.buffer.toString("base64") : null;

    const newVideo = new Video({
      name,
      Video: videoBase64,
    });

    const response = await newVideo.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to fetch all Videos
router.get("/", async (req, res) => {
  try {
    const data = await Video.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT route to update a specific Video
router.put("/:id", async (req, res) => {
  try {
    const VideoId = req.params.id;
    const updatedVideoData = req.body;
    const response = await Video.findByIdAndUpdate(VideoId, updatedVideoData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Video not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE route to remove a specific photo
router.delete("/:id", async (req, res) => {
  try {
    const PhotoId = req.params.id;
    const response = await Photo.findByIdAndDelete(PhotoId);

    if (!response) {
      return res.status(404).json({ error: "Video not found" });
    }

    res.status(200).json({ message: "Video deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export the router
export default router;
