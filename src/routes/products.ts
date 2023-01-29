import express from "express";

// Import controllers for products
import { index } from "../controllers/product-controller";

const router = express.Router()

// products routes
router.get('/', index)

export default router