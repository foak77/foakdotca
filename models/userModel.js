const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    default: true,
    select: false,
  },
  active: {
    type: Boolean,
    default: false,
    select: false,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    unique: [true, "Unique email required"],
    lowercase: true,
  },
  oldEmail: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
  },
  modifiedAt: {
    type: Date,
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
    default: "/images/profile-img/default.png",
  },
  profileTmpImg: {
    type: String,
  },
});

// BEFORE ANY FIND - CHECK STATUS NOT EQUAL FALSE
// userSchema.pre(/^find/, function (next) {
// this points to the current query
// this.find({ status: { $ne: false } });
// next();
// });

export default mongoose.models.User || mongoose.model("User", userSchema);
