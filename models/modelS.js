const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/models", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/modelS.html"));
});

module.exports = router;
