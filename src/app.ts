import express from 'express'

// Init app
const app = express()

// Middleware
app.use(express.json())

// Server listen
app.listen(3000, () => {
    console.log("Server is running mate 🤩")
})