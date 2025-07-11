const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true }
}, { timestamps: true });
module.exports = mongoose.model('MenuItem', menuSchema);
