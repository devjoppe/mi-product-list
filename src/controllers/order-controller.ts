import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import Debug from 'debug'

// Debug instance
const debug = Debug('prisma-products:order-controller')

// Services
import {getOrders, getOrder, getAllProducts} from "../services/get";
import { postOrder } from "../services/post";
import { getProduct } from "../services/get";

// Index all orders
export const index = async (req:Request, res:Response) => {
    try {
        const orders = await getOrders()
        res.status(200).send({
            status: "success",
            data: orders
        })
    }
    catch (err) {
        res.status(500).send({
            status: "Error",
            message: "No response from the server"
        })
    }
}

// Show order and order items based on ID
export const show = async (req:Request, res:Response) => {
    try {
        const orderId = Number(req.params.id)
        // Check if not a number
        if(Number.isNaN(orderId)) {
            res.status(400).send({
                status: "fail",
                message: "That is not a valid number"
            })
            return
        }
        const order = await getOrder(orderId)
        // Check if product is available
        if(!order) {
            res.status(404).send({
                status: "fail",
                message: "Data not found"
            })
            return
        }
        res.status(200).send({
            status: "Success",
            data: order
        })
    }
    catch (err) {
        res.status(500).send({
            status: "Error",
            message: "No response from the server"
        })
    }
}

// Store order
export const store = async (req:Request, res:Response) => {
    // Validation check
    const validationErrors = validationResult(req)
    if(!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        })
    }

    // Check if product exists
    const orderItems = req.body.order_items
    let itemsArr:any = []
    let checkProduct
    orderItems.forEach((item:any) => {
        itemsArr.push(item.product_id)
    })

    for(let item of itemsArr) {
        checkProduct = await getProduct(item)
        if(!checkProduct) {
            return res.status(400).send({
                status: "fail",
                message: "A product you trying to order does not exists"
            })
        }
    }

    const validatedData = matchedData(req)

    try {
        const order = await postOrder(validatedData)
        res.status(200).send({
            status: "success",
            data: order
        })
    }
    catch (err) {
        debug("Error on order: ", req.body, err)
        res.status(500).send({
            status: "Error",
            message: "No response from the server"
        })
    }
}