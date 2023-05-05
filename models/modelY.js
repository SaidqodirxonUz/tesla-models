const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/modelY", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/modelY.html"));
});

module.exports = router;
