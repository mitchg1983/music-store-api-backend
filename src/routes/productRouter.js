const express = require("express");
const ProductService = require("../Services/ProductService");

const productRouter = express.Router();

//This file will have all of our product routes
productRouter.get("/get-products", (req, res, next) => {
  console.log("Your get-products Route is here!");
  console.log(ProductService.getProducts());
  res.json({
    products: ProductService.getProducts(),
  })
});

module.exports = productRouter;
