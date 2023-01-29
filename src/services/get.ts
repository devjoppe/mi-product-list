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

export const getProduct = async (itemId:number) => {
    const product = await prisma.products.findUnique( {
        where: {
            id: itemId
        }
    })
    return product
}