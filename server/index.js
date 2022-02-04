require("dotenv").config();
const userRouter = require("./router/userRouter");
const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};
app.use(
  cors({
    ...corsOptions,
    methods: ["GET", "POST", "PATCH", "PUT", "OPTIONS", "DELETE"],
  })
);
app.use(express.json());
app.use("/users", userRouter);
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON port ${process.env.PORT}`);
});
