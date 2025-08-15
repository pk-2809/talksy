import dotenv from "dotenv";
dotenv.config()

import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
    connectDB();
})