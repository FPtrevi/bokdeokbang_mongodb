const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  authority: { type: String, maxlength: 250 },
  member_id: { type: String, maxlength: 200 },
  member_pwd: { type: String, maxlength: 200 },
  member_nickname: { type: String, maxlength: 100 },
  member_phone: { type: String, maxlength: 200 },
  agent_name: { type: String, maxlength: 200 },
  agent_phone: { type: String, maxlength: 200 },
  agent_address: { type: String, maxlength: 150 },
  agent_description: { type: String, maxlength: 1000 },
  agent_company_no: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  agent_approve: { type: String, maxlength: 2 }, // Y/N
  agent_documents: [{ type: String, maxlength: 200 }],
});

module.exports = mongoose.model("Member", memberSchema);

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

module.exports = mongoose.model("House", houseSchema);

const wishlistSchema = new mongoose.Schema({
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

module.exports = mongoose.model("Wishlist", wishlistSchema);

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

module.exports = mongoose.model("Inquiry", inquirySchema);

const csSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  title: { type: String, maxlength: 100 },
  content: { type: String, maxlength: 2000 },
  update_date: { type: Date },
});

module.exports = mongoose.model("CS", csSchema);

const chatroomSchema = new mongoose.Schema({
  req_member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  res_member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

module.exports = mongoose.model("Chatroom", chatroomSchema);

const chatMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  content: { type: String, maxlength: 1000 },
  chat_date: { type: Date },
  unread: { type: Boolean },
  chatroom: { type: mongoose.Schema.Types.ObjectId, ref: "Chatroom" },
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);

const companyReviewSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  content: { type: String, maxlength: 2000 },
  satisfaction: { type: Number },
  review_date: { type: Date },
});

module.exports = mongoose.model("CompanyReview", companyReviewSchema);

const houseReviewSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
  content: { type: String, maxlength: 2000 },
  pros: { type: String, maxlength: 1000 },
  cons: { type: String, maxlength: 1000 },
  satisfaction: { type: Number },
  review_period: { type: String, maxlength: 100 },
});

module.exports = mongoose.model("HouseReview", houseReviewSchema);

const removeRequestSchema = new mongoose.Schema({
  review: { type: mongoose.Schema.Types.ObjectId, refPath: "onModel" }, // Review는 다형성을 사용하여 HouseReview 또는 CompanyReview 참조
  onModel: { type: String, enum: ["HouseReview", "CompanyReview"] },
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  req_date: { type: Date },
});

module.exports = mongoose.model("RemoveRequest", removeRequestSchema);

const paySchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  method: { type: String, maxlength: 200 },
  date: { type: Date },
  price: { type: Number },
  house: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
});

module.exports = mongoose.model("Pay", paySchema);
