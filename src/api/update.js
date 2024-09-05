const User = require("../../server/models/User"); // 모델

async function updateData(id, newName) {
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name: newName },
      { new: true }
    );
    return { success: true, user: updateUser };
  } catch (err) {
    console.error(err);
  }
}

module.exports = updateData;
