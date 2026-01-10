import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db";
import app from "./app";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});