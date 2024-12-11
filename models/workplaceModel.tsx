import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TypeScript interface for a Workplace document
interface IWorkplace extends Document {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

// Define the schema using the TypeScript interface
const workplaceSchema = new Schema<IWorkplace>({
  id: { type: Number, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  description: [{ type: String, required: true }],
});

// Create and export the model with proper TypeScript typing
const Workplace: Model<IWorkplace> =
  mongoose.models.Workplace ||
  mongoose.model<IWorkplace>("Workplace", workplaceSchema);

export default Workplace;
