/** @format */

import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db.js";
import cors from "cors";
import photoRoutes from "./routes/photoRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // ✅ Make sure this file exists

const app = express();

// Set up the app
const allowedOrigins = [
  "http://localhost:8081",
  "http://172.20.10.3:8081",
  "exp://172.20.10.3:8081",
  "http://localhost:19006",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        console.log("CORS allowed for origin:", origin);
        callback(null, true);
      } else {
        console.log("CORS not allowed for origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // This allows cookies to be sent with CORS requests
  })
);

app.use(bodyParser.json());

connectDB()
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Stop the server on error
  });

// Use the routes

app.use("/photo", photoRoutes);
app.use("/video", videoRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes); // ✅ user profile info

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
