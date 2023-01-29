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
            on_sale: itemData.on_sale
        }
    })
    return product
}