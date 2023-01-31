import express from "express";

// Import validation rules
import { createOrderRules } from "../validations/order-validation";

// Import controllers from order
import { index, show, store } from "../controllers/order-controller";

const router = express.Router()

// Order routes
router.get("/", index)
router.get("/:id", show)
router.post("/", createOrderRules ,store)

export default router