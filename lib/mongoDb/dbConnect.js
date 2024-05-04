// import { MongoClient } from "mongodb";

// const dbConnect = async () => {
//   try {
//     // const client = await MongoClient.connect(process.env.MONGODB_URI);
//     const client = await MongoClient.connect(process.env.ATLAS_DATABASE);
//     console.log("🌟🌟🌟 CONNECTED TO THE DATABASE");
//     return client;
//   } catch (error) {
//     throw new Error("💥💥💥 FAILED TO CONNECT TO THE DATABASE");
//   }
// };

// export default dbConnect;

import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI, {
    await mongoose.connect(process.env.ATLAS_DATABASE, {});
    console.log("🌟🌟🌟 CONNECTED TO THE DATABASE");
  } catch (error) {
    throw new Error("💥💥💥 FAILED TO CONNECT TO THE DATABASE");
  }
};

export default dbConnect;
