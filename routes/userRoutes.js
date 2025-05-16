/** @format */

import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Route to get user information
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      username: user.username,
      email: user.email,
      posts: user.uploads, // renamed to 'posts'
      profilePic: user.profilePic,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user data" });
  }
});

// Route to update user profile picture using a URL
router.put("/:userId/profile-pic", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { profilePic } = req.body;
    if (!profilePic) {
      return res
        .status(400)
        .json({ message: "No profile picture URL provided" });
    }

    user.profilePic = profilePic;
    await user.save();

    res.json({
      message: "Profile picture updated",
      profilePic: user.profilePic,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating profile picture" });
  }
});

// Route to add a post (previously called upload)
router.put("/:userId/add-post", async (req, res) => {
  try {
    const { post } = req.body; // renamed from 'upload' to 'post'
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.uploads.push(post); // still using the 'uploads' field in the model
    await user.save();

    res.json({ message: "Post added", posts: user.uploads });
  } catch (err) {
    res.status(500).json({ message: "Error adding post" });
  }
});

export default router;
