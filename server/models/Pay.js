const mongoose = require("mongoose");

const paySchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  method: { type: String, maxlength: 200 },
  date: { type: Date },
  price: { type: Number },
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
});

module.exports = mongoose.model("pay", paySchema);
