const mongoose = require("mongoose");

const onportfolioSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  technology: {
    type: String,
  },
  stack: {
    type: String,
  },
  mode: {
    type: String,
  },
  api: {
    type: String,
  },
  imgFile: {
    type: String,
  },
  imgThumb: {
    type: String,
  },
  link: {
    type: String,
  },
});

export default mongoose.models.Onportfolio ||
  mongoose.model("Onportfolio", onportfolioSchema);
