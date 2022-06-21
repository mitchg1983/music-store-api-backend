const express = require("express");
const ProductService = require("../Services/ProductService");

const productRouter = express.Router();

//This file will have all of our product routes
productRouter.get("/get-products", async (req, res, next) => {
  console.log("Your get-products Route is here!");

  return ProductService.getProducts(req, res, next);
});

module.exports = productRouter;
