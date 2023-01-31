import express from "express";
import { body } from 'express-validator'

// Import controllers from order
import { index, show, store } from "../controllers/order-controller";

const router = express.Router()

// Order routes
router.get("/", index)
router.get("/:id", show)
router.post("/", [
    body('customer_first_name').isString().isLength({ min:3 }).withMessage("Needs to be a string, with minimum of 3 chars."),
    body('customer_last_name').isString().withMessage('Needs to be a string'),
    body('customer_adress').isString().withMessage('Needs to be a string'),
    body('customer_postcode').isString().isLength({ min:6 }).withMessage('Needs to be a string with minimum of 6 characters'),
    body('customer_email').isEmail().withMessage('Needs to be a valid email'),
    body('order_total').isInt().toInt().isLength( {min: 1} )
] ,store)

export default router