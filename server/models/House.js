const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  title: { type: String, maxlength: 200 },
  description: { type: String, maxlength: 2000 },
  thumbnail: { type: String, maxlength: 300 },
  sales_type: { type: String, maxlength: 200 },
  address1: { type: String, maxlength: 100 },
  address2: { type: String, maxlength: 100 },
  zip_code: { type: String, maxlength: 20 },
  building_type: { type: String, maxlength: 200 },
  building_floor: { type: Number },
  deposit: { type: Number },
  monthly_cost: { type: Number },
  manage_cost: { type: Number },
  floor: { type: Number },
  room_type: { type: String, maxlength: 100 },
  room_count: { type: Number },
  washer: { type: Boolean },
  parking: { type: Boolean },
  lat: { type: Number },
  lng: { type: Number },
  approve_date: { type: Date },
  size_m2: { type: Number },
  pet: { type: Boolean },
  loan: { type: Boolean },
  movein_date: { type: Date },
  reg_date: { type: Date },
  view_count: { type: Number },
  report_count: { type: Number },
  sales_status: { type: String, maxlength: 200 },
  options: [{ type: String, maxlength: 200 }],
  elevator: { type: Boolean },
  verandah: { type: Boolean },
  security: { type: Boolean },
  charge: { type: Boolean },
  images: [{ img_path: { type: String, maxlength: 300 } }], // HouseImg를 Embed 구조로 처리
});

module.exports = mongoose.model("house", houseSchema);
