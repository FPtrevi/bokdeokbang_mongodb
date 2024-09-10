const mongoose = require("mongoose");

const companyReviewSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  content: { type: String, maxlength: 2000 },
  satisfaction: { type: Number },
  review_date: { type: Date },
});

module.exports = mongoose.model("companyReview", companyReviewSchema);
