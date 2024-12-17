import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Education document
export interface SchoolDocument extends Document {
  order: number;
  school: string;
  grade: string;
  course: string;
  year: string;
}

// Define the schema using the correct syntax for typing
const schoolSchema = new Schema<SchoolDocument>({
  order: { type: Number },
  school: { type: String },
  grade: { type: String },
  course: { type: String },
  year: { type: String },
});

// Create the model, using the typed schema
const Schools =
  mongoose.models.School ||
  mongoose.model<SchoolDocument>("School", schoolSchema);

export default Schools;
