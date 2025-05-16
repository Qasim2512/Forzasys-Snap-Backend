import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import photoRoutes from "./routes/photoRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // Make sure this file exists
import { connectDB } from "./db.js";

const app = express();

const corsOptions = {
  origin: ["http://localhost:8081"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

connectDB();

app.use("/photo", photoRoutes);
app.use("/video", videoRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes); 

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
