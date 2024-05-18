const express = require("express");
const router = express.Router();

const sensorData2 = require('../controllers/sensorData2.controller');

router.get("/", sensorData2.getAll); // Retrieve data

module.exports = router;
