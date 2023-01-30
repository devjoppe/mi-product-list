import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// Post new product
export const postProduct = async (itemData:any) => {
    const product = await prisma.products.create({
        data: {
            name: itemData.name,
            description: itemData.description,
            price: itemData.price,
            images: itemData.images,
            stock_status: itemData.stock_status,
            stock_quantity: itemData.stock_quantity,
            // Note to self: I worked with this way to long and the only problem was that I forgot on_sale on itemData. Love coding and thank you debugging tool.
            on_sale: itemData.on_sale
        }
    })
    return product
}

export const postOrder = async (orderData:any) => {
    console.log(orderData)
    /* const order = await prisma.order.create({
        data: {

        }
    }) */
}