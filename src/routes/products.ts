import express from "express";

// Import controllers for products
import { index, show, store } from "../controllers/product-controller";

const router = express.Router()

// products routes
router.get('/', index)
router.get("/:id", show)
router.post("/", store)

export default router