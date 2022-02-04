const crypto = require("crypto");
//const util = require("util");
module.exports = async (password) => {
  try {
    const random = crypto.randomBytes(128);
    const salt = random.toString("base64");
    const hashed = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512");
    const hashedPassword = hashed.toString("base64");
    return [salt, hashedPassword];
    // const randomBytesPromise = util.promisify(crypto.randomBytes);
    // const pbkdf2Promise = util.promisify(crypto.pbkdf2);
    // const buf = await randomBytesPromise(64);
    // const salt = buf.toString("base64");
    // const hashedPassword = await pbkdf2Promise(
    //   password,
    //   salt,
    //   100000,
    //   64,
    //   "sha512"
    // );
    // return [salt, hashedPassword.toString("base64")];
  } catch (err) {
    throw err;
  }
};
