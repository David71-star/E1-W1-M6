const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Nome: {
      type: String,
      required: true,
      max: 255,
    },
    Cognome: {
      type: String,
      required: true,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      max: 255,
    },
    nascita: {
      type: String,
      required: true,
      max: 255,
    },
    avatar: {
      type: String,
      required: true,
      max: 255,
    },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("userModel", UserSchema, "users");
