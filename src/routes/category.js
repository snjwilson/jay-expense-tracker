const express = require("express");
const CategoryService = require("../services/category");

const router = express.Router();

// Create Category
router.post("/", async (req, res) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read Category
router.get("/:id", async (req, res) => {
  try {
    const category = await CategoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Category
router.put("/:id", async (req, res) => {
  try {
    const category = await CategoryService.updateCategory(
      req.params.id,
      req.body
    );
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Category
router.delete("/:id", async (req, res) => {
  try {
    const category = await CategoryService.deleteCategory(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
