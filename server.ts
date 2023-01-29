import app from './src/app'
import * as http from "http";
import * as dotenv from 'dotenv'

// Init dotenv
dotenv.config()

// start server from '.env'
const PORT = process.env.PORT || 3000;

// server listens
const server = http.createServer(app)
server.listen(PORT)

// server error listens event
server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.syscall !== 'listen') {
        throw err;
    }

    switch (err.code) {
        case 'EACCES':
            console.error(`🦸🏻 Port ${PORT} requires elevated privileges`)
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(`🛑 Port ${PORT} is already in use`)
            process.exit(1)
            break
        default:
            throw err
    }
})

// server listens event
server.on('listening', () => {
    console.log("Server is running dude 🤩")
})