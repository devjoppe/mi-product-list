import { body, CustomValidator } from 'express-validator'

// Import services
import { getProduct } from "../services/get";

// Custom validations
const existProduct: CustomValidator = async value => {
    const isProduct = await getProduct(value)
    if(!isProduct) {
        return Promise.reject('The product does not exists.')
    }
}

export const createOrderRules = [
    body('customer_first_name').isString().isLength({min:3}).withMessage("Needs to be a string, with minimum of 3 chars."),
    body('customer_last_name').isString().withMessage('Needs to be a string'),
    body('customer_adress').isString().withMessage('Needs to be a string'),
    body('customer_city').isString().withMessage('Needs to be a string'),
    body('customer_postcode').isString().isLength({ min:6 }).withMessage('Needs to be a string with minimum of 6 characters'),
    body('customer_email').isEmail().withMessage('Needs to be a valid email'),
    body('order_total').isInt().toInt().isLength( {min: 1} ),
    body('order_items.*.product_id').isInt().toInt().isLength({min:1}).withMessage('Must be a number with a minimum of 1').custom(existProduct),
    body('order_items.*.qty').isInt().toInt().isLength({min:1}).withMessage('Must be a number with a minimum of 1'),
    body('order_items.*.item_price').isInt().toInt().isLength({min:1}).withMessage('Must be a number with a minimum of 1'),
    body('order_items.*.item_total').isInt().toInt().isLength({min:1}).withMessage('Must be a number with a minimum of 1')
]