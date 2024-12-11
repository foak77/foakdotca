import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Onportfolio document
export interface OnportfolioDocument extends Document {
  title: string;
  description: string;
  technology: string;
  stack: string;
  mode: string;
  api: string;
  imgFile: string;
  imgThumb: string;
  link: string;
}

// Define the schema using the correct syntax for typing
const onportfolioSchema = new Schema<OnportfolioDocument>({
  title: { type: String },
  description: { type: String },
  technology: { type: String },
  stack: { type: String },
  mode: { type: String },
  api: { type: String },
  imgFile: { type: String },
  imgThumb: { type: String },
  link: { type: String },
});

// Create the model, using the typed schema
const Onportfolios =
  mongoose.models.Onportfolio ||
  mongoose.model<OnportfolioDocument>("Onportfolio", onportfolioSchema);

export default Onportfolios;
// const mongoose = require("mongoose");

// const onportfolioSchema = new mongoose.Schema({
//   title: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   technology: {
//     type: String,
//   },
//   stack: {
//     type: String,
//   },
//   mode: {
//     type: String,
//   },
//   api: {
//     type: String,
//   },
//   imgFile: {
//     type: String,
//   },
//   imgThumb: {
//     type: String,
//   },
//   link: {
//     type: String,
//   },
// });

// export default mongoose.models.Onportfolio ||
//   mongoose.model("Onportfolio", onportfolioSchema);
