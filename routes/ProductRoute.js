import express from "express";
import {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
  getHairstyle,
  getMakeup,
} from "../controllers/Product.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/hairstyles", getHairstyle);
router.get("/makeups", getMakeup);

export default router;
