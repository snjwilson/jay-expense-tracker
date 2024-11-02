const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("hit the user router");
});

module.exports = { userRouter };
