const ProductModel = require("../Models/ProductModel");

const getProducts = async (req, res, next) => {
  //All of the logic on how to get the products
  //Fetches data from the database
  try {
    const foundProducts = await ProductModel.find({});
    console.log("foundProducts", foundProducts);

    const formattedProducts = foundProducts.map((product) => ({
      ...product.toObject(),
      id: product._id,
    }));
    console.log("formattedProducts", formattedProducts);

    res.send(formattedProducts).status(200);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  getProducts,
};
