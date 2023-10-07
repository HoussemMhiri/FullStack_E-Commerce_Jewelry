const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    imgs: {
      type: Array,
      required: true,
    },

    categories: {
      type: Array,
      required: true,
    },
    descProd: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    gender: {
      type: Array,
      required: true,
    },

    details: {
      type: String,
      required: true,
    },
    size: {
      type: Array,
    },
    descCategTitle: {
      type: String,
    },
    descCateg: String,
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
