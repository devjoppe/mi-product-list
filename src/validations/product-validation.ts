import { body } from "express-validator";

// Import services


// Custom validations

export const createProductRules = [
    body('name').isString().isLength({min:1}).withMessage('Needs to be a string and a minimum of 1 characters'),
    body('description').isString().withMessage('Needs to be a string'),
    body('price').isInt().toInt().bail().isLength({min: 1}).withMessage('Needs a number'),
    body('images').isObject().isLength({min: 1}).withMessage('Needs to be in objects with "large" and "thumbnail"'),
    body('stock_status').isString().withMessage('Needs to be a string'),
    body('stock_quantity').isInt().isLength({min: 0}).withMessage('Needs a number')
]