const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

module.exports = mongoose.model("wishlist", wishlistSchema);
