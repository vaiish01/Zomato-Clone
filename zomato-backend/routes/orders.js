const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Place Order
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

// Get User Orders
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ user: req.params.userId }).populate("restaurant");
  res.json(orders);
});

module.exports = router;
