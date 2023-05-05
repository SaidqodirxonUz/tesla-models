const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/model3", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/model3.html"));
});

module.exports = router;
