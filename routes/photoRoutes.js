/** @format */

const express = require("express");
const Photo = require("../models/Photo");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { name } = req.body;
    const photBase64 = req.file ? req.file.buffer.toString("base64") : null;

    const newPhoto = new Photo({
      name,
      photo: photBase64,
    });

    const response = await newPhoto.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Photo.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const PhotoId = req.params.id;
    const updatedPhotoData = req.body;
    const response = await Photo.findByIdAndUpdate(PhotoId, updatedPhotoData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Photo not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const PhotoId = req.params.id;
    const response = await Photo.findByIdAndDelete(PhotoId);

    if (!response) {
      res.status(404).json({ error: "Photo not found" });
    }

    res.status(200).json({ message: "Photo deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
