const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  items: Array,
  totalPrice: Number,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
