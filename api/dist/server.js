"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// Dynamically import appropriate DB connection based on environment
async function setupDatabaseConnection() {
    if (process.env.NODE_ENV === "development" && !process.env.MONGO_URI) {
        // Use in-memory DB for development without MONGO_URI
        const { connectDB } = await import("./config/dev/db.dev.js");
        return connectDB;
    }
    else {
        // Use regular DB connection
        const { connectDB } = await import("./config/db.js");
        return connectDB;
    }
}
const app_js_1 = __importDefault(require("./app.js"));
const PORT = process.env.PORT || 4000;
async function startServer() {
    try {
        const dbConnectFunction = await setupDatabaseConnection();
        await dbConnectFunction();
        app_js_1.default.listen(PORT, () => {
            console.log(`API running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=server.js.map