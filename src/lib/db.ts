import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_DB;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log("MongoDB connected successfully!");  // Log successful connection
            return mongoose;
        }).catch((err) => {
            console.error("MongoDB connection error:", err);  // Log any connection errors
            throw err;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectMongo;
