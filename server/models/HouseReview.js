const mongoose = require("mongoose");

const houseReviewSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
  content: { type: String, maxlength: 2000 },
  pros: { type: String, maxlength: 1000 },
  cons: { type: String, maxlength: 1000 },
  satisfaction: { type: Number },
  review_period: { type: String, maxlength: 100 },
});

module.exports = mongoose.model("houseReview", houseReviewSchema);
