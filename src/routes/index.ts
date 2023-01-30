import express from "express";
import { Request, Response } from "express";

import products from './products'
import orders from "./orders";

const routes = express.Router()

routes.get('/', (req:Request, res:Response) => {
    res.send({
        message: "This is the Star Wars shopify",
    })
})

routes.use('/products', products)
routes.use('/orders', orders)

// 404 - data not found
routes.get('/*', (req:Request, res:Response) => {
    res.status(404).send({
        status: "fail",
        message: "No data found"
    })
})

export default routes