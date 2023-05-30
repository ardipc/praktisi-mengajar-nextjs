import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  description: String,
}, {
  collection: 'categories',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

module.exports = mongoose.models.categories || mongoose.model('categories', schema);