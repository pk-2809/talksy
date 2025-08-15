import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DB connnected: ${conn.connection.host}`);
    }
    catch (err) {
        console.log("Mongo connection error:", err);
    }
}