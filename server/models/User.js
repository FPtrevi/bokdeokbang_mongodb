const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

const User = mongoose.model("products", UserSchema);

module.exports = User;
