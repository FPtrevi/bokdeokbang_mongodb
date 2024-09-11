/*****************************************
[midware.js] 사용 설명서

※ route.js 내 POST, GET, PUT DELETE 의 미들웨어 부분을 작성한다.

[사용 방법]
route.js에 아래와 같이 선언한다.
const midWare = require(`midware.js 경로`);

필요한 위치에 midWare.loginGetMid 를 입력한다.
 *****************************************/
const readData = require("../src/api/readData");
const createData = require("../src/api/create");
const createCsData = require("../src/api/createCs");
const readOneData = require("../src/api/readOneData");
const updateData = require("../src/api/update");
const deleteData = require("../src/api/delete");
const getQna = require("../src/api/support/getQna");
const getNotice = require("../src/api/support/getNotice");

exports.readData = async (req, res) => {
  try {
    const data = await readData(); // 데이터 가져오기
    res.json(data); // JSON 응답으로 반환
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createData = async (req, res) => {
  const data = req.body;
  try {
    const result = await createData(data);
    if (result.success) {
      res.json(data);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.createCsData = async (req, res) => {
  const data = req.body;
  try {
    const result = await createCsData(data);
    if (result.success) {
      res.json(data);
    }
  } catch (err) {
    console.error(err);
  }
};

exports.getUserByQuantity = async (req, res) => {
  try {
    const quantity = req.params.quantity;
    const result = await readOneData(quantity);
    if (result.success) {
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

exports.updateUserName = async (req, res) => {
  try {
    const { id, newName } = req.body;
    const result = await updateData(id, newName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = deleteData(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getFQnA = async (req, res) => {
  try {
    const data = await getQna(); // 데이터 가져오기
    res.json(data); // JSON 응답으로 반환
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getNotice = async (req, res) => {
  try {
    const data = await getNotice(); // 데이터 가져오기
    res.json(data); // JSON 응답으로 반환
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
