const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const Product = new Schema({
  id:Number,
  name:String
});


const ProductModel = mongoose.model("Product", Product);
module.exports = ProductModel;