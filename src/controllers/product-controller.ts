import { Request, Response } from "express";

// Services/get function
import { getAllProducts, getProduct } from "../services/get";

// Index all products
export const index = async (req:Request, res:Response) => {
    try {
        const products = await getAllProducts()
        res.status(200).send({
            status: "success",
            data: products
        })
    }
    catch (err) {
        res.status(500).send({
            status: "Error",
            message: "No response from the server" // Use debug here or more info.
        })
    }
}

// Show specific product based on id
export const show = async (req:Request, res:Response) => {
    try {
        const itemId = Number(req.params.id)
        // Check if not a number
        if(Number.isNaN(itemId)) {
            res.status(400).send({
                status: "fail",
                message: "That is not a valid number"
            })
            return
        }

        const product = await getProduct(itemId)

        // Check if product is empty
        if(!product) {
            res.status(404).send({
                status: "fail",
                message: "Data not found"
            })
            return
        }
        res.status(200).send({
            status: "Success",
            data: product
        })
    }
    catch (err) {
        res.status(500).send({
            status: "Error",
            message: "No response from the server"
        })
    }
}