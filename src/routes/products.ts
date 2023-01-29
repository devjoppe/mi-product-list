import express from "express";
import { body } from 'express-validator'

// Import controllers for products
import { index, show, store } from "../controllers/product-controller";

const router = express.Router()

// products routes
router.get('/', index)
router.get("/:id", show)
router.post("/", [
    body('name').isString()
        .withMessage('Needs to be a string'),
    body('price').isInt()
        .isLength({min: 1})
        .withMessage('Needs a number'),
    body('stock_quantity').isInt()
        .isLength({min: 0})
        .withMessage('Needs a number')
], store)

export default router