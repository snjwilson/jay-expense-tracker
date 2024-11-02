const express = require("express");
const { userRouter } = require("./user");
const { expenseRouter } = require("./expense");

const router = express.Router();

router.use("/users", userRouter);

router.use("/expenses", expenseRouter);

module.exports = { router };
