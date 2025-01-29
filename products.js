const bang = require("bang");

const productSchema = new bang.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Product = bang.model("Product", productSchema);

module.exports = Product;