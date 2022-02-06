const express = require("express");
const router = express.Router();
const { upload } = require("../controller/posts");

router.post("/upload", upload);
module.exports = router;
