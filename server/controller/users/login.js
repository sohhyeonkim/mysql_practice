const db = require("../../db/db");
const crypto = require("crypto");
module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = "SELECT salt, password FROM user WHERE email=?";
    const params = [email];

    const loginData = await db.query(sql, params);

    const dbSalt = loginData[0][0].salt;
    const dbPass = loginData[0][0].password;

    const hashedPassword = crypto.pbkdf2Sync(
      password,
      dbSalt,
      100000,
      64,
      "sha512"
    );
    if (dbPass === hashedPassword.toString("base64")) {
      return res.status(200).end();
    } else {
      return res.status(205).end();
    }
  } catch (err) {
    throw err;
  }
};

// const crypto = require("crypto");
// //const util = require("util");
// module.exports = async (password) => {
//   try {
//     const random = crypto.randomBytes(128);
//     const salt = random.toString("base64");
//     const hashed = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512");
//     const hashedPassword = hashed.toString("base64");
//     return [salt, hashedPassword];
//     // const randomBytesPromise = util.promisify(crypto.randomBytes);
//     // const pbkdf2Promise = util.promisify(crypto.pbkdf2);
//     // const buf = await randomBytesPromise(64);
//     // const salt = buf.toString("base64");
//     // const hashedPassword = await pbkdf2Promise(
//     //   password,
//     //   salt,
//     //   100000,
//     //   64,
//     //   "sha512"
//     // );
//     // return [salt, hashedPassword.toString("base64")];
//   } catch (err) {
//     throw err;
//   }
// };
