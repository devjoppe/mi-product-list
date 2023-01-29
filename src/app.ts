import express from 'express'
import routes from './routes'

// Init app
const app = express()

// Middleware
app.use(express.json())

// Routes:
app.use(routes)

// export app
export default app