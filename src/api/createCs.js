const Cs = require("../../server/models/Cs"); // 모델

async function postData(insertData) {
  try {
    // const newUser = await User.create(insertData);
    const { type, title, content } = insertData;
    const newCs = await Cs({
      type,
      title,
      content,
      update_date: new Date(),
    });
    const savedCs = await newCs.save();
    return { success: true, cs: savedCs };
  } catch (err) {
    console.error(err);
  }
}
module.exports = postData;
