const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3535;

const userRotes = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/", userRotes);
app.use("/age26", userRotes);
app.use("/filter_by_isActive", userRotes);
app.use("/age26&&30", userRotes);

//CONNESIONE DEL DATABASE
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection DB error"));

db.once("open", () => {
  console.log("database connected successfuly");
});

app.listen(PORT, console.log(`server connected and listening PORT ${PORT}`));
