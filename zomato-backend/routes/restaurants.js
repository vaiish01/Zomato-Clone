const express = require("express");
const Restaurant = require("../models/Restaurant");
const router = express.Router();

// Add Restaurant
router.post("/", async (req, res) => {
  const restaurant = new Restaurant(req.body);
  await restaurant.save();
  res.json(restaurant);
});

// Get All Restaurants
router.get("/", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

module.exports = router;
