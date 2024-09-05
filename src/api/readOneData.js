const User = require("../../server/models/User"); // 모델 가져오기

const readOneData = async (quantity) => {
  try {
    const readOne = await User.findOne({ quantity });
    return { success: true, readOne };
    // return users;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = readOneData;
