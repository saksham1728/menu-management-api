const MenuItem = require('../models/MenuItem');

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Protected
const getMenu = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

// @desc    Create new menu item
// @route   POST /api/menu
// @access  Protected
const createMenuItem = async (req, res) => {
  const { name, description, price } = req.body;
  const newItem = await MenuItem.create({ name, description, price });
  res.status(201).json(newItem);
};

// @desc    Delete menu item
// @route   DELETE /api/menu/:id
// @access  Protected
const deleteMenuItem = async (req, res) => {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
  
    if (!item) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
  
    res.json({ message: 'Deleted', deletedItem: item });
  };

module.exports = { getMenu, createMenuItem, deleteMenuItem };
