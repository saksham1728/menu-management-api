const express = require('express');
const {
  getMenu,
  createMenuItem,
  deleteMenuItem
} = require('../controllers/menu.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.use(protect);
router.route('/')
  .get(getMenu)
  .post(createMenuItem);

router.delete('/:id', deleteMenuItem);

module.exports = router;
