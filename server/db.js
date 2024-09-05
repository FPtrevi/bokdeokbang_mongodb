const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });
// MongoDB URI (환경변수나 설정 파일에서 관리하는 것이 좋습니다)
const uri = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // 종료 코드 1로 프로세스 종료
  }
};

module.exports = connectDB;
