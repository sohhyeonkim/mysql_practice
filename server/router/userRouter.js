const express = require("express");
const router = express.Router();
const { signup } = require("../controller/users");

router.post("/signup", signup);

module.exports = router;
