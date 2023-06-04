import mongoose, { mongo } from "mongoose";
const schema = new mongoose.Schema({
  category_id: {
    type: mongoose.Types.ObjectId,
    ref: 'categories',
    alias: 'category'
  },
  name: String,
  image: String,
  description: String,
  price: Number,
  is_published: Boolean,
}, {
  collection: 'products',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

module.exports = mongoose.models.products || mongoose.model('products', schema);