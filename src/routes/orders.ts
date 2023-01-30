import express from "express";
// import { body } from 'express-validator'

// Import controllers from order
import { index, show } from "../controllers/order-controller";

const router = express.Router()

// Order routes
router.get("/", index)
router.get("/:id", show)

export default router