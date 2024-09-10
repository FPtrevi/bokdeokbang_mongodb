const mongoose = require("mongoose");

const csSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, maxlength: 100, required: true },
  content: { type: String, maxlength: 2000, required: true },
  update_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("cs", csSchema);
