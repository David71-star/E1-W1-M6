const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3030;

const app = express();

//CONNESIONE DEL DATABASE
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection DB error"));

db.once("open", () => {
  console.log("database connected successfuly");
});

app.listen(PORT, console.log(`server connected and listening PORT ${PORT}`));
