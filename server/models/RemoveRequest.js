const mongoose = require("mongoose");

const removeRequestSchema = new mongoose.Schema({
  review: { type: mongoose.Schema.Types.ObjectId, refPath: "onModel" }, // Review는 다형성을 사용하여 HouseReview 또는 CompanyReview 참조
  onModel: { type: String, enum: ["HouseReview", "CompanyReview"] },
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  req_date: { type: Date },
});

module.exports = mongoose.model("removeRequest", removeRequestSchema);
