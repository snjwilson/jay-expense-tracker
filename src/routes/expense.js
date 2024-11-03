const express = require("express");
const ExpenseService = require("../services/expense");

const router = express.Router();

// Create Expense
router.post("/", async (req, res) => {
  try {
    const expense = await ExpenseService.createExpense(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read Expense
router.get("/:id", async (req, res) => {
  try {
    const expense = await ExpenseService.getExpenseById(req.params.id);
    if (!expense) return res.status(404).json({ error: "Expense not found" });
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Expense
router.put("/:id", async (req, res) => {
  try {
    const expense = await ExpenseService.updateExpense(req.params.id, req.body);
    if (!expense) return res.status(404).json({ error: "Expense not found" });
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Expense
router.delete("/:id", async (req, res) => {
  try {
    const expense = await ExpenseService.deleteExpense(req.params.id);
    if (!expense) return res.status(404).json({ error: "Expense not found" });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
