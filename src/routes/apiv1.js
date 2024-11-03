const express = require("express");
const userRouter = require("./user");
const expenseRouter = require("./expense");
const categoryRouter = require("./category");

const router = express.Router();

router.use("/users", userRouter);
router.use("/expenses", expenseRouter);
router.use("/categories", categoryRouter);

module.exports = { router };
