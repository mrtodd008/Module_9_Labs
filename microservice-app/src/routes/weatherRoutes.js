const express = require("express");
const {
  getWeatherByCity,
  getWeatherByCoords,
} = require("../controllers/weatherController");

const router = express.Router();

// Get weather by city name (route parameter)
router.get("/:city", getWeatherByCity);

// Get weather by latitude & longitude (query parameters)
router.get("/", getWeatherByCoords);

module.exports = router;
