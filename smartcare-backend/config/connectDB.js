import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// if (!process.env.MONGODB_URL) {
//   throw new Error("Please provide MONGODB_URL");
// }

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/smartcare");
    console.log("connect DB");
  } catch (error) {
    console.log("Mongodb connect error", error);
    process.exit(1);
  }
}

export default connectDB;