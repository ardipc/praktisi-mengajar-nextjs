import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  is_active: Boolean,
  token: String
}, {
  collection: 'users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

module.exports = mongoose.models.users || mongoose.model('users', schema);