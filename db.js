/** @format */
// Setup mongoDB connection

import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/forzaSnapDB";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to mongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB server error:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from mongoDB server");
});

// Export the db connection
export default db;
