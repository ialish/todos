const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    hashedPassword: String,
    notes: [],
  },
  { versionKey: false }
);

module.exports = mongoose.model('user', userSchema);
