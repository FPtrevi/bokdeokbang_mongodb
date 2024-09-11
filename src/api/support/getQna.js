const CS = require("../../../server/models/Cs"); // 모델 가져오기

const getQna = async () => {
  try {
    const fQnA = await CS.find({ type: "FQnA" }); // 모든 사용자 데이터 가져오기
    return fQnA;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = getQna;
