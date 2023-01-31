import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Debug from 'debug'

// Debug instance
const debug = Debug('prisma-products:product-controller')

// Services
import { getAllProducts, getProduct } from "../services/get";
import { postProduct } from "../services/post";

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
            message: "No response from the server"
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
        // Check if product is available
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

// Store new product
export const store = async (req:Request, res:Response) => {
    // Validation check
    const validationErrors = validationResult(req)
    if(!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        })
    }
    try {
        // Create the new product
        const productData = await postProduct(req.body)
        // Get the post from the database as a verification that the data has been saved.
        const showProduct = await getProduct(productData.id)
        res.status(200).send({
            status: "success",
            data: showProduct
        })
    }
    catch (err) {
        debug("Error on product: ", req.body, err)
        res.status(500).send({
            status: "Error",
            message: "No response from the server",
        })
    }
}