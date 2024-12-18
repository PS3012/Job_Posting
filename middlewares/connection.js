import mongoose from "mongoose";
import {} from "dotenv/config.js";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully!");
  } catch (err) {
    console.log("Error connecting to database");
  }
};

export default connectDatabase;
