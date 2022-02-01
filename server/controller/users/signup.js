const db = require("../../db/db");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = "INSERT INTO user (email, salt, password) VALUES (?,?,?)";
    const params = [email, "123", password];
    await db.query(sql, params);
    return res.status(201).end();
  } catch (err) {
    throw err;
  }
};
