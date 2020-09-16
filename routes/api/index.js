const router = require("express").Router();
const itemRoutes = require("./Item");

router.use("/item", itemRoutes);

module.exports = router;
