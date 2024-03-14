const mongoose = require("mongoose");

const UserSchema = new mongoose.schema({
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
});

module.exports = mongoose.model("userModel", UserSchema, "users");
