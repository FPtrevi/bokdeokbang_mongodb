const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  content: { type: String, maxlength: 1000 },
  chat_date: { type: Date },
  unread: { type: Boolean },
  chatroom: { type: mongoose.Schema.Types.ObjectId, ref: "Chatroom" },
});
module.exports = mongoose.model("chatMessage", chatMessageSchema);
