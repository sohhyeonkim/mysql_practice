const db = require("../../db/db");
const createHash = require("../../funcs/createHash");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashed = await createHash(password);

    const sql = "INSERT INTO user (email, salt, password) VALUES (?,?,?)";
    const params = [email, hashed[0], hashed[1]];
    await db.query(sql, params);
    return res.status(201).end();
  } catch (err) {
    throw err;
  }
};
