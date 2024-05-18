const express = require("express");
const router = express.Router();

const sensorData1 = require('../controllers/sensorData1.controller');

router.get("/", sensorData1.getAll); // Retrieve data

module.exports = router;
