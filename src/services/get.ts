import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
    log: ['info', 'error']
})

// Get all products
export const getAllProducts = async () => {
    const products = await prisma.products.findMany({
        orderBy: [
            {
                id: "asc"
            }
        ]
    })
    return products
}

// Get specific product from ID
export const getProduct = async (itemId:number) => {
    const product = await prisma.products.findUnique( {
        where: {
            id: itemId
        }
    })
    return product
}

// Get orders
export const getOrders = async () => {
    const orders = await prisma.order.findMany({
        orderBy: [
            {
                id: "asc"
            }
        ]
    })
    return orders
}

// Get a specific order based on ID with orderItems
export const getOrder = async (orderId:number) => {
    const order = await prisma.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            order_items: true
        }
    })
    return order
}