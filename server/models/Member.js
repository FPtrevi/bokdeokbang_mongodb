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
module.exports = mongoose.model("member", memberSchema);
