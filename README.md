# MI - Product API
## API
**API URL:**
* https://mi-products.onrender.com

**NOTE:**

*The first request to the API can take up to **5-10** seconds.*

NodeJS hosting: https://render.com/

Database hosting: https://www.hostinger.com/

## Description
A project centered around an API that I have created using Node.js, Express, and Prisma. The purpose of the assignment was to deepen my understanding of APIs, as well as to gain hands-on experience with these technologies. I worked with Express to build the API's routing and handling of HTTP requests and responses, and integrate with Prisma to connect to and manage a database. Through this project, I learned about the different components involved in building and consuming an API, and the role each technology plays in the process.

## API Endpoint: /products
### GET /products
Retrieve a list of all products

**Response:**

* ``200``: Success

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "A New Hope",
      "description": "<p>The original Star Wars film, it follows Luke Skywalker as he joins forces with Princess Leia and Han Solo to defeat the evil Empire and destroy the Death Star.</p>",
      "price": 120,
      "images": {
        "large": "https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg",
        "thumbnail": "https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg"
      },
      "stock_status": "instock",
      "stock_quantity": 10,
      "on_sale": false
    },
    {
      "id": 2,
      "name": "The Empire Strikes Back",
      "description": "<p>The second film in the original trilogy, it continues the story of Luke, Leia, and Han as they battle the Empire while Luke begins his Jedi training.</p>",
      "price": 750,
      "images": {
        "large": "https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg",
        "thumbnail": "https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg"
      },
      "stock_status": "instock",
      "stock_quantity": 8,
      "on_sale": false
      }
    ]
}
```

### GET /products/{id}
Retrieves a specific product based on ID.

**Path Params**

* ``Id``: The ID of the product

**Response:**

* ``200``: Success

```json
{
  "status": "Success",
  "data": {
    "id": 8,
    "name": "The Last Jedi",
    "description": "<p>The second film in the sequel trilogy, it continues the story of Rey, Finn and Poe as they try to defeat the First Order and Luke Skywalker's role in the fate of the galaxy.</p>",
    "price": 200,
    "images": {
      "large": "https://joakimottosson.se/projects/mi-products/product/08-product_image.jpg",
      "thumbnail": "https://joakimottosson.se/projects/mi-products/thumbnails/08-product_image.jpg"
    },
    "stock_status": "instock",
    "stock_quantity": 21,
    "on_sale": false
  }
}
```
* ``404``: If the specified product is not found

```json
{
  "status": "fail",
  "message": "Data not found"
}
```

### POST /products
Create a new product

**Request body**

```json
{
  "name": "Test product",
  "description": "<p>Description</p>",
  "price": 550,
  "images": {
    "large": "https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg",
    "thumbnail": "https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg"
  },
  "stock_status": "instock",
  "stock_quantity": 22,
  "on_sale": false
}
```

**Response:**

``200``: Success

```json
{
  "status": "success",
  "data": {
    "id": 25,
    "name": "Test product",
    "description": "<p>Description</p>",
    "price": 550,
    "images": {
      "large": "https://joakimottosson.se/projects/mi-products/product/01-product_image.jpg",
      "thumbnail": "https://joakimottosson.se/projects/mi-products/thumbnails/01-product_image.jpg"
    },
    "stock_status": "instock",
    "stock_quantity": 22,
    "on_sale": false
  }
}
```
``400``: Bad request - If the request body is missing required fields or if provided values are invalid.

## API Endpoint: /orders
### GET /orders

Retrieve a list of all orders

**Response:**

* ``200``: Success

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "customer_first_name": "Jan",
      "customer_last_name": "Svensson",
      "customer_adress": "Kallegatan 15",
      "customer_postcode": "332 34",
      "customer_city": "Malmö",
      "customer_email": "jan@svensson.se",
      "customer_phone": null,
      "order_total": 1740,
      "order_date": "2/3/2023, 2:41:20 PM",
      "created_at": "2/3/2023, 2:41:20 PM",
      "updated_at": "2/3/2023, 2:41:20 PM"
    },
    {
      "id": 2,
      "customer_first_name": "Karl",
      "customer_last_name": "Karlsson",
      "customer_adress": "Drottninggatan 3",
      "customer_postcode": "332 34",
      "customer_city": "Malmö",
      "customer_email": "karl@karlsson.com",
      "customer_phone": null,
      "order_total": 240,
      "order_date": "2/3/2023, 2:42:18 PM",
      "created_at": "2/3/2023, 2:42:18 PM",
      "updated_at": "2/3/2023, 2:42:18 PM"
    }
  ]
}
```

### GET /orders/{id}
Retrieves a specific order and all order items.

**Path Params**

* ``Id``: The ID of the order

**Response:**

* ``200``: Success

```json
{
  "status": "Success",
  "data": {
    "id": 1,
    "customer_first_name": "Jan",
    "customer_last_name": "Svensson",
    "customer_adress": "Kallegatan 15",
    "customer_postcode": "332 34",
    "customer_city": "Malmö",
    "customer_email": "jan@svensson.se",
    "customer_phone": null,
    "order_total": 1740,
    "order_date": "2/3/2023, 2:41:20 PM",
    "created_at": "2/3/2023, 2:41:20 PM",
    "updated_at": "2/3/2023, 2:41:20 PM",
    "order_items": [
      {
        "id": 1,
        "order_id": 1,
        "product_id": 2,
        "qty": 3,
        "item_price": 750,
        "item_total": 1500
      },
      {
        "id": 2,
        "order_id": 1,
        "product_id": 1,
        "qty": 2,
        "item_price": 120,
        "item_total": 240
      }
    ]
  }
}
```
* ``404``: If the specified order is not found

```json
{
  "status": "fail",
  "message": "Data not found"
}
```
### POST /orders
Create a new order

**Request body**

```json
{
  "customer_first_name": "Sven",
  "customer_last_name": "Svensson",
  "customer_adress": "Häggbergavägen 3",
  "customer_postcode": "332 34",
  "customer_city": "Malmö",
  "customer_email": "sven@svensson.com",
  "order_total": 240,
  "order_items": [
    {
      "product_id": 1,
      "qty": 2,
      "item_price": 120,
      "item_total": 240
    }
  ]
}
```

**Response:**

``200``: Success

```json
{
  "status": "success",
  "data": {
    "id": 3,
    "customer_first_name": "Sven",
    "customer_last_name": "Svensson",
    "customer_adress": "Häggbergavägen 3",
    "customer_postcode": "332 34",
    "customer_city": "Malmö",
    "customer_email": "sven@svensson.com",
    "customer_phone": null,
    "order_total": 240,
    "order_date": "2/6/2023, 10:29:31 AM",
    "created_at": "2/6/2023, 10:29:31 AM",
    "updated_at": "2/6/2023, 10:29:31 AM",
    "order_items": [
      {
        "id": 4,
        "order_id": 3,
        "product_id": 1,
        "qty": 2,
        "item_price": 120,
        "item_total": 240
      }
    ]
  }
}
```

``400``: Bad request - Total price incorrect

```json
{
  "status": "fail",
  "data": [
    {
      "value": 340,
      "msg": "The total price is incorrect",
      "param": "order_total",
      "location": "body"
    }
  ]
}
```

``400``: Bad request - Product does not exist

```json
{
  "status": "fail",
  "data": [
    {
      "value": 32,
      "msg": "The product does not exists.",
      "param": "order_items[0].product_id",
      "location": "body"
    }
  ]
}
```

``400``: Bad request - Product price is incorrect

```json
{
  "status": "fail",
  "data": [
    {
      "value": 220,
      "msg": "The product price is incorrect",
      "param": "order_items[0].item_price",
      "location": "body"
    }
  ]
}
```

``400``: Bad request - The amount of products do not exist in stock.

```json
{
  "status": "fail",
  "data": [
    {
      "value": 92,
      "msg": "The total items in qty is higher then the product stock stock quantity",
      "param": "order_items[0].qty",
      "location": "body"
    }
  ]
}
```