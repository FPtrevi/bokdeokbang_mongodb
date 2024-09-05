const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./db"); // MongoDB 연결 설정 가져오기
const boardRouter = require("./route");
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB 연결
connectDB();

// CORS 미들웨어 적용
app.use(cors());

// JSON형식의 요청 본문 파싱하는 미들웨어
app.use(express.json());
// URL-encoded 데이터를 구조화된 객체로 파싱
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공 (React의 빌드 파일을 제공)
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use("/api", boardRouter); // API 경로 설정

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
