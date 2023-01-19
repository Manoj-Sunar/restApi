const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  job: {
    type: String,
    required: true,
  },
});

const model = new mongoose.model("models", schema);

module.exports = model;
