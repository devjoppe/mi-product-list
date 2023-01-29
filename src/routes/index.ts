import express from "express";
import { Request, Response } from "express";

import products from './products'

const routes = express.Router()

routes.get('/', (req:Request, res:Response) => {
    res.send({
        message: "This is the Star Wars shopify",
    })
})

routes.use('/products', products)

export default routes