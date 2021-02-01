const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Date } = Schema.Types;

const postSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  imageURL: {
      type: String,
      required: true
  },
  createdAt: {
      type: Date,
      required: true
  }
});

module.exports = new Model('Post', postSchema);