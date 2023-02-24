const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(["(〜￣▽￣)〜", "(╯°□°）╯︵ ┻━┻", "Σ(っ °Д °;)っ"]);
});

module.exports = router;
