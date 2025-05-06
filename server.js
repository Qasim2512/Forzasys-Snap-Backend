/** @format */

import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import photoRoutes from "./routes/photoRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import cors from "cors";

const app = express();

// Set up the app
const allowedOrigins = [
  "http://localhost:8081",
  "http://10.0.0.13:8081",
  "exp://10.0.0.13:8081",
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

// Use the routes
app.use("/photo", photoRoutes);
app.use("/video", videoRoutes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
