import mongoose, { Schema, Document, Model } from "mongoose";

// Define the User interface for TypeScript
interface IUser extends Document {
  status: boolean;
  active: boolean;
  name: string;
  role: "user" | "admin";
  email: string;
  oldEmail?: string;
  password: string;
  createdAt: Date;
  modifiedAt: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  randomKey?: string;
  timeToActivate?: Date;
  profileImg: string;
  profileTmpImg?: string;
}

// Define the schema
const userSchema = new Schema<IUser>({
  status: {
    type: Boolean,
    default: true,
    select: false, // Exclude from queries by default
  },
  active: {
    type: Boolean,
    default: false,
    select: false, // Exclude from queries by default
  },
  name: {
    type: String,
    required: [true, "User name is required"], // Adds validation
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Enforces only allowed values
    default: "user",
  },
  email: {
    type: String,
    unique: true, // Enforce uniqueness at the database level
    lowercase: true,
    required: [true, "Email is required"], // Adds validation
  },
  oldEmail: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"], // Adds validation
    select: false, // Exclude from queries by default
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set current date on creation
  },
  modifiedAt: {
    type: Date,
    default: Date.now, // Automatically set current date on creation
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  randomKey: {
    type: String,
  },
  timeToActivate: {
    type: Date,
  },
  profileImg: {
    type: String,
    default: "/images/profile-img/default.png", // Default profile image
  },
  profileTmpImg: {
    type: String,
  },
});

// Create and export the Mongoose model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   status: {
//     type: Boolean,
//     default: true,
//     select: false,
//   },
//   active: {
//     type: Boolean,
//     default: false,
//     select: false,
//   },
//   name: {
//     type: String,
//   },
//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user",
//   },
//   email: {
//     type: String,
//     unique: [true, "Unique email required"],
//     lowercase: true,
//   },
//   oldEmail: {
//     type: String,
//   },
//   password: {
//     type: String,
//     select: false,
//   },
//   createdAt: {
//     type: Date,
//   },
//   modifiedAt: {
//     type: Date,
//   },
//   passwordResetToken: {
//     type: String,
//   },
//   passwordResetExpires: {
//     type: Date,
//   },
//   randomKey: {
//     type: String,
//   },
//   timeToActivate: {
//     type: Date,
//   },
//   profileImg: {
//     type: String,
//     default: "/images/profile-img/default.png",
//   },
//   profileTmpImg: {
//     type: String,
//   },
// });

// export default mongoose.models.User || mongoose.model("User", userSchema);
