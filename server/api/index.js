const express = require("express");

// Import des différentes routes pour chaque type de ressources
const emojis = require("./emojis");
const kamojis = require("./kaomojis");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API - 🐱‍💻" });
});

router.use("/emojis", emojis);
router.use("/kaomojis", kamojis);

module.exports = router;
