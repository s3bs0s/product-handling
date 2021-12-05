require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDatabase = require('./app/config/mongo')
const app = express()
const PORT = process.env.PORT || 3000

// Settings
connectDatabase()
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(express.json())

// Routes
const verifySession = require('./app/routes/middleware/verifySession')
app.use('/api/products', verifySession, require('./app/routes/products'))
app.use('/api/auth', require('./app/routes/auth'))

// Server port
app.listen(PORT, () => {
  console.log('Server listen on port', PORT)
})