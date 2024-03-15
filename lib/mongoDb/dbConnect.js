import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI, {
    await mongoose.connect(process.env.ATLAS_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("🌟🌟🌟 CONNECTED TO THE DATABASE");
  } catch (error) {
    throw new Error("💥💥💥 FAILED TO CONNECT TO THE DATABASE");
  }
};

export default dbConnect;
