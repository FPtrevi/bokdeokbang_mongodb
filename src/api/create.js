const User = require("../../server/models/User"); // 모델

async function postData(insertData) {
  try {
    const newUser = await User.create(insertData);
    return { success: true, user: newUser };
  } catch (err) {
    console.error(err);
  }
}
module.exports = postData;
