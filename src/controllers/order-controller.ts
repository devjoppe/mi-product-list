import { Request, Response } from "express";

// Services
import {getOrders, getOrder } from "../services/get";
import { postOrder } from "../services/post";

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

export const store = async (req:Request, res:Response) => {
    console.log(req.body.order_items)
}