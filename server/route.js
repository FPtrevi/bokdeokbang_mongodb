/*****************************************
    [route.js]

※ app.js 내 POST, GET, PUT, DELETE 의 라우트 부분을 작성한다.

※ 순서는 상관없지만, GET, POST, PUT, DELETE 끼리 모아 작성한다.

http://${REACT_APP_API_BASE_IP}:8080/
 *****************************************/
const express = require("express");
const router = express.Router();
const midWare = require("./midware"); // 데이터 가져오기 함수 가져오기
const { getUserByQuantity } = require("./midware");
const { updateUserName } = require("./midware");
const { deleteUser } = require("./midware");

// router.get("/data", async (req, res) => {
//   try {
//     const data = await getData(); // 데이터 가져오기
//     res.json(data); // JSON 응답으로 반환
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/data", midWare.readData);

router.get("/user/:quantity", getUserByQuantity);

router.post("/postData", midWare.createData);

router.post("/cs", midWare.createCsData);

router.get("/getfqna", midWare.getFQnA);

router.get("/getnotice", midWare.getNotice);

router.put("/user/update", updateUserName);

router.delete("/user/delete/:id", deleteUser);

module.exports = router;
