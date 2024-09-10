const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
  req_member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  res_member: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

module.exports = mongoose.model("chatroom", chatroomSchema);
