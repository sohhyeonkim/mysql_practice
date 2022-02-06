const db = require("../../db/db");

module.exports = async (req, res) => {
  try {
    res.send("test");
  } catch (err) {
    throw err;
  }
};
