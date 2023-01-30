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
    const order = await prisma.order.create({
        data: {
            customer_first_name: orderData.customer_first_name,
            customer_last_name: orderData.customer_last_name,
            customer_adress: orderData.customer_adress,
            customer_postcode: orderData.customer_postcode,
            customer_city: orderData.customer_city,
            customer_email: orderData.customer_email,
            order_total: orderData.order_total,
            order_items: {
                createMany: {
                    data: [
                        {
                            product_id: orderData.product_id,
                            qty: orderData.qty,
                            item_price: orderData.item_price,
                            item_total: orderData.item_total
                        },
                    ]
                }
            }
        }
    })
}