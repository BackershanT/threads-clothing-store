import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod: MongoMemoryServer;

export const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === "development" && !process.env.MONGO_URI) {
      // Use in-memory MongoDB for development without MONGO_URI
      mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`In-Memory MongoDB Connected`);
    } else {
      // Use regular MongoDB connection
      const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/clothing-store");
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export const closeDB = async () => {
  if (mongod) {
    await mongoose.disconnect();
    await mongod.stop();
  }
};