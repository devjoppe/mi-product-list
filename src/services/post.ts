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
    const date = String(new Date())
    const orderItems = orderData.order_items
    console.log("Datatype: ", orderItems.item_price)
    const order = await prisma.order.create({
        data: {
            customer_first_name: orderData.customer_first_name,
            customer_last_name: orderData.customer_last_name,
            customer_adress: orderData.customer_adress,
            customer_postcode: orderData.customer_postcode,
            customer_city: orderData.customer_city,
            customer_email: orderData.customer_email,
            customer_phone: orderData.customer_phone,
            order_total: orderData.order_total,
            created_at: date,
            updated_at: date,
            order_items: {
                create: orderItems.map((item:any) => ({
                    product: {
                        connect: {
                            id: Number(item.product_id)
                        }
                    },
                    qty: item.qty,
                    item_price: Number(item.item_price),
                    item_total: Number(item.item_total)
                }))
            }
        },
        include: {
            order_items: true
        }
    })
    return order
}