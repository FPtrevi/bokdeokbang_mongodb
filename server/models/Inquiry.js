const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  category: { type: String, maxlength: 250 },
  title: { type: String, maxlength: 400 },
  content: { type: String, maxlength: 2000 },
  inquiry_date: { type: Date },
  answer_content: { type: String, maxlength: 1000 },
  answer_date: { type: Date },
  status: { type: String, maxlength: 200 },
});

module.exports = mongoose.model("inquiry", inquirySchema);
