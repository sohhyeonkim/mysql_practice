require("dotenv").config();
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const multer = require("multer");

//Set storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(null, "1.png");
    // cb(
    //   null,
    //   file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    // );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("img");

function checkFileType(file, cb) {
  //allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  //check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};
app.use(express.static("./public"));
app.use(
  cors({
    ...corsOptions,
    methods: ["GET", "POST", "PATCH", "PUT", "OPTIONS", "DELETE"],
  })
);
app.use(express.json());
app.use("/users", userRouter);
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ msg: err.message });
    } else {
      if (req.file == undefined) {
        return res.json({ msg: "파일을 선택해주세요" });
      } else {
        return res.json({
          file: `public/uploads/${req.file.filename}`,
        });
      }
    }
  });
});
// app.use("/posts", postRouter);
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON port ${process.env.PORT}`);
});
