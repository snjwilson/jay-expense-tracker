const Category = require("../models/Category");

const createCategory = async (categoryData) => {
  const category = new Category(categoryData);
  await category.save();
  return category;
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(id, categoryData, {
    new: true,
    runValidators: true,
  });
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
