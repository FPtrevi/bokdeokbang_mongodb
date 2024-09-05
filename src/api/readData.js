const User = require("../../server/models/User"); // 모델 가져오기

const readData = async () => {
  try {
    const users = await User.find(); // 모든 사용자 데이터 가져오기
    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = readData;
