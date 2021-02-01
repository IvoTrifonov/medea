const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const promotionSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  validFrom: {
      type: Date,
      required: true
  },
  validTo: {
    type: Date,
    required: true
  }
});

module.exports = new Model('Promotion', promotionSchema);