const ProductModel = require("../Models/ProductModel");

const getProducts = () => {
  //All of the logic on how to get the products

  //Fetches data from the database
  const products = ProductModel.findProducts();

  return products;
};

module.exports = {
  getProducts,
};
