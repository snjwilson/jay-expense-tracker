const { Expense } = require("../models/Expense");

const createExpense = async (expenseData) => {
  const expense = new Expense(expenseData);
  await expense.save();
  return expense;
};

const getExpenseById = async (id) => {
  return await Expense.findById(id);
};

const updateExpense = async (id, expenseData) => {
  return await Expense.findByIdAndUpdate(id, expenseData, {
    new: true,
    runValidators: true,
  });
};

const deleteExpense = async (id) => {
  return await Expense.findByIdAndDelete(id);
};

module.exports = {
  createExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
