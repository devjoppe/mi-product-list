import { Request, Response } from "express";

// Services/get function
import { getAllProducts } from "../services/get";

// Index all products
export const index = async (req:Request, res:Response) => {
    try {
        const products = await getAllProducts()
        console.log(products)
        res.status(200).send({
            status: "Success",
            data: products
        })
    }
    catch (err) {
        res.status(500).send({
            status: "Error",
            message: "Something went wrong" // Use debug here or more info.
        })
    }
}