import express from "express";
import "dotenv/config";

// Dynamically import appropriate DB connection based on environment
async function setupDatabaseConnection() {
  if (process.env.NODE_ENV === "development" && !process.env.MONGO_URI) {
    // Use in-memory DB for development without MONGO_URI
    const { connectDB } = await import("./config/dev/db.dev.js");
    return connectDB;
  } else {
    // Use regular DB connection
    const { connectDB } = await import("./config/db.js");
    return connectDB;
  }
}

import app from "./app.js";

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    const dbConnectFunction = await setupDatabaseConnection();
    await dbConnectFunction();
    
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();