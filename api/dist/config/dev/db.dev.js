"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
let mongod;
const connectDB = async () => {
    try {
        if (process.env.NODE_ENV === "development" && !process.env.MONGO_URI) {
            // Use in-memory MongoDB for development without MONGO_URI
            mongod = await mongodb_memory_server_1.MongoMemoryServer.create();
            const uri = mongod.getUri();
            const conn = await mongoose_1.default.connect(uri);
            console.log(`In-Memory MongoDB Connected`);
        }
        else {
            // Use regular MongoDB connection
            const conn = await mongoose_1.default.connect(process.env.MONGO_URI || "mongodb://localhost:27017/clothing-store");
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
const closeDB = async () => {
    if (mongod) {
        await mongoose_1.default.disconnect();
        await mongod.stop();
    }
};
exports.closeDB = closeDB;
//# sourceMappingURL=db.dev.js.map