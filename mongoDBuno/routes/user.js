const express = require("express");
const router = express.Router();
const UserModel = require("../modules/users");
const { model } = require("mongoose");

router.get("/", async (request, response) => {
  try {
    const user = await UserModel.find();
    response.status(200).send(user);
  } catch (e) {
    response.status(500).send();
  }
});

router.post("/authors", async (request, response) => {
  const newUser = new UserModel({
    Nome: request.body.Nome,
    Cognome: request.body.Cognome,
    email: request.body.email,
    nascita: request.body.nascita,
    avatar: request.body.avatar,
  });

  try {
    const userToSave = await newUser.save();
    response.status(201).send();
  } catch (e) {}
});

module.exports = router;
