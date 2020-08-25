const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  username: { type: String, required: true },
  body: { type: String, required: true },
  date: {type: String, required: true},
  comment:{type: String, require: false}
});

module.exports = mongoose.model('Message', messageSchema);