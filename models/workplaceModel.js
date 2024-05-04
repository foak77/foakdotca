const mongoose = require("mongoose");

const workplaceSchema = new mongoose.Schema({
  id: { type: Number },
  role: {
    type: String,
  },
  company: {
    type: String,
  },
  period: {
    type: String,
  },
  description: [
    {
      type: String,
    },
  ],
});

export default mongoose.models.Workplace ||
  mongoose.model("Workplace", workplaceSchema);
