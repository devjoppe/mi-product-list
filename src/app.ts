import express from 'express'
import routes from './routes'
import morgan from "morgan";

// Init app
const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes:
app.use(routes)

// export app
export default app