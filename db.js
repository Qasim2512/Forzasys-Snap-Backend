/** @format */
// Setup mongoDB connection
import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/forzaSnapDB";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB server");
  } catch (err) {
    console.log("MongoDB server error:", err);
    process.exit(1); // Stopp serveren ved feil
  }
};

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("Disconnected from mongoDB server");
});

// Export the connectDB function and db
export { connectDB, db };
