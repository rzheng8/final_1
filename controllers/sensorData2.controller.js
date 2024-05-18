const postgre = require('../database');

const sensorData2 = {
    getAll: async (req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM sensor_data2 ORDER BY timestamp DESC LIMIT 10");
            res.json({ msg: "OK", data: rows });
        } catch (error) {
            res.json({ msg: error.message });
        }
    }
};

module.exports = sensorData2;
