const router = require("express").Router();
const teslaRoutes = require("./modelS");
// const expressRoutes = require("./express-route");

router.use(teslaRoutes);
// router.use(expressRoutes);

module.exports = router;
