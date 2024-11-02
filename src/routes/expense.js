const express = require("express");

const expenseRouter = express.Router();

expenseRouter.get("/", (req, res) => {
  res.send("hit the expenses router");
});

module.exports = { expenseRouter };
