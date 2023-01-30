import { Request, Response } from "express";

// Services
import { getOrders } from "../services/get";

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