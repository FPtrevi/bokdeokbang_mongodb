const CS = require("../../../server/models/Cs"); // 모델 가져오기

const getNotice = async () => {
  try {
    const notice = await CS.find({ type: "Notice" }); // 모든 사용자 데이터 가져오기
    return notice;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = getNotice;
