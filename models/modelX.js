const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/modelX", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/modelX.html"));
});

module.exports = router;
