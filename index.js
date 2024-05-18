const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const sensorData1 = require("./routes/sensorData1");
const sensorData2 = require("./routes/sensorData2");

app.use("/api/v1/table1", sensorData1);
app.use("/api/v1/table2", sensorData2);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

