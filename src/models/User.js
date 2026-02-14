const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      trim: true,
      required: true,
    },
    email: { type: String, unique: true },
    password: { type: String, minlength: 5, maxlength: 15 },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", User);
module.exports = { User: UserModel };
