const express = require("express");
const router = express.Router();

const { generateQR } = require("../controllers/qr.controller");

router.post("/qr", generateQR);

module.exports = router;
