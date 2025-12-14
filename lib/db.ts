import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL!;

export const ConnectToDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "auth-guard",
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};
