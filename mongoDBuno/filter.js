const express = require("express");
const router = express.Router();
const userMod = require("../W2-P1-database-di-prova-per-MongoCompass.json");

router.get("/filter_by_isActive", async (req, res) => {
  try {
    const user = await userMod.find((x) => {
      x.isActive === true;
    });

    if (!user) {
      return console.log("c'è qualcosa che non va");
    }

    // const isActiveTrue = await userModel.filter((x) => x.isActive === user);

    // return isActiveTrue;
  } catch (error) {
    console.error(console.log("errore !!!"));
  }
});

module.exports = router;

router.get("/age26", async () => {
  try {
    const user = await userModel.find((x) => {
      x.age > 26;
      if (user) {
        return console.log("ecco tutti gli utenti con age > 26");
      }
    });

    // if (user) {
    //   return console.log("ecco tutti gli utenti con age > 26");
    // }
  } catch (error) {
    console.error(console.log("errore !!!"));
  }
});

module.exports = router;

router.get("/age26&&30", async () => {
  try {
    const user = await userMod.find((x) => {
      x.age > 26 && x.age <= 30;
      if (user) {
        return console.log("ecco tutti gli utenti con age > 26 e <=30");
      }
    });

    // if (user) {
    //   return console.log("ecco tutti gli utenti con age > 26");
    // }
  } catch (error) {
    console.error(console.log("errore !!!"));
  }
});

module.exports = router;
