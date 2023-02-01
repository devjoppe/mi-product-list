import express from "express";

// Import validation rules
import { createProductRules } from "../validations/product-validation";

// Import controllers for products
import { index, show, store } from "../controllers/product-controller";

const router = express.Router()

// products routes
router.get('/', index)
router.get("/:id", show)
router.post("/", createProductRules, store)

export default router