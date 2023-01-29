import express from 'express'

// Init app
const app = express()

// Middleware
app.use(express.json())

// Routes:

// export app
export default app