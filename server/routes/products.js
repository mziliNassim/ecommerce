const { Router } = require("express");
const products = require("../db/products.json");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  if (product) {
    return res.status(200).json(product);
  }
  return res.status(404).json({ message: "Invalid Product id" });
});

module.exports = router;
