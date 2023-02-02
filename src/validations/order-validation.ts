import { body, CustomValidator } from 'express-validator'

// Import services
import { getProduct } from "../services/get";

// Custom validations
// I know Johan, this is a hack that hit every branch on the way down!
let arrCount:number
let qtyCount: number

// Check if the product exists
const existProduct: CustomValidator = async value => {
    arrCount = -1
    qtyCount = -1
    const isProduct = await getProduct(value)
    if(!isProduct) {
        return Promise.reject('The product does not exists.')
    }
}

// Check the requested price is correct for the product
const correctPrice: CustomValidator = async (value, { req })=> {
    arrCount++
    const productId = req.body.order_items[arrCount].product_id
    const product = await getProduct(productId)
    if(product) {
        if(product!.price !== value) {
            return Promise.reject('The product price is incorrect')
        }
    }
}

// Check if qty is possible to order against product stock_quantity
const checkQty: CustomValidator = async (value, { req })=> {
    qtyCount++
    const productId = req.body.order_items[qtyCount].product_id
    const product = await getProduct(productId)
    console.log(product?.stock_quantity)
    if(product) {
        if(product.stock_quantity < value) {
            return Promise.reject('The total items in qty is higher then the product stock stock quantity')
        }
    }
}

// Check the total price
const totalPrice: CustomValidator = (value, { req })=> {
    const productPrice = req.body.order_items
    let totalPrice:number = 0
    for(let i = 0; i < productPrice.length; i++) {
        totalPrice += productPrice[i].item_total
    }
    console.log(totalPrice)
    console.log(value)
        if(totalPrice != value) {
            return Promise.reject('The total price is incorrect')
        }
        return value
}

export const createOrderRules = [
    body('customer_first_name')
        .isString().isLength({min:3}).withMessage("Needs to be a string, with minimum of 3 chars."),
    body('customer_last_name')
        .isString().withMessage('Needs to be a string'),
    body('customer_adress')
        .isString().withMessage('Needs to be a string'),
    body('customer_city')
        .isString().withMessage('Needs to be a string'),
    body('customer_postcode')
        .isString().isLength({ min:6 }).withMessage('Needs to be a string with minimum of 6 characters'),
    body('customer_email')
        .isEmail().withMessage('Needs to be a valid email'),
    body('order_items.*.product_id')
        .isInt().toInt().isLength({min:1}).withMessage('Must be a number with a minimum of 1')
        .custom(existProduct).bail(),
    body('order_items.*.item_price')
        .isInt().toInt().isLength({min:1}).withMessage('Must be a number with a minimum of 1')
        .custom(correctPrice),
    body('order_items.*.item_total')
        .isInt().toInt().isLength({min:1})
        .withMessage('Must be a number with a minimum of 1'),
    body('order_items.*.qty')
        .isInt().toInt().isLength({min:1})
        .withMessage('Must be a number with a minimum of 1')
        .custom(checkQty),
    body('order_total')
        .isInt().toInt().isLength({min: 1})
        .custom(totalPrice)
]