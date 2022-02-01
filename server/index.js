require("dotenv").config();
const userRouter = require("./router/userRouter");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON port ${process.env.PORT}`);
});
