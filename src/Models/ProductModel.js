//This file contains the logic to fetch data, and insert data into databases.
const mongoose = require("mongoose");
const uuid = require("uuid");

const productSchema = new mongoose.Schema({
  // id: { type: String, required: true, default: () => uuid.v4() },
  title: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

//The model is the object that has the method to read and change the database.
const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
