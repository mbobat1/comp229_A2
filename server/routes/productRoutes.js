import express from "express";
import {
 getAllProducts,
 getProductById,
 createProduct,
 updateProduct,
 deleteProduct,
 deleteAllProducts,
 findPublishedProducts,
 findProductsByName,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.delete("/", deleteAllProducts);
router.get("/published", findPublishedProducts);
router.get("/search", findProductsByName);

export default router;
