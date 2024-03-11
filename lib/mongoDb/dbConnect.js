import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("👋👋👋 DB Connection Successful");
  } catch (error) {
    throw new Error("💥💥💥 Fail to load");
  }
};

export default dbConnect;
