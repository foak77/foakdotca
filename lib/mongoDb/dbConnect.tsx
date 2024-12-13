import mongoose from "mongoose";

const dbConnect = async (): Promise<void> => {
  try {
    // MongoDB URI from environment variables
    const uri = process.env.ATLAS_DATABASE;

    if (!uri) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables."
      );
    }

    // Establishing the connection
    await mongoose.connect(uri);
    console.log("🌟🌟🌟 CONNECTED TO THE DATABASE");
  } catch (error) {
    console.error("💥💥💥 FAILED TO CONNECT TO THE DATABASE", error);
    throw new Error("Failed to connect to MongoDB.");
  }
};

export default dbConnect;

// import mongoose from "mongoose";

// const dbConnect = async () => {
//   try {
//     // await mongoose.connect(process.env.MONGODB_URI, {
//     await mongoose.connect(process.env.ATLAS_DATABASE, {});
//     console.log("🌟🌟🌟 CONNECTED TO THE DATABASE");
//   } catch (error) {
//     throw new Error("💥💥💥 FAILED TO CONNECT TO THE DATABASE");
//   }
// };

// export default dbConnect;
