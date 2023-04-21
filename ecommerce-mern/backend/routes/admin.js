const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

router.put("/edit-product", productsController.editProduct);

router.delete("/delete-product", productsController.deleteProduct);

module.exports = router;
