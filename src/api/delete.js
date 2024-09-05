const User = require("../../server/models/User"); // 모델

async function deleteData(id) {
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    return { success: true, deleteUser };
  } catch (err) {
    console.error(err);
  }
}

module.exports = deleteData;
