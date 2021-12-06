require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDatabase = require('./app/config/mongo')
const app = express()

// Settings
connectDatabase()
app.use(express.static(__dirname + '/public'))
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
app.use(express.json())

// Routes
const verifySession = require('./app/routes/middleware/verifySession')
app.use('/api/products', verifySession, require('./app/routes/products'))
app.use('/api/auth', require('./app/routes/auth'))
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

// Server port
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000
app.listen(PORT, HOST, () => {
  console.log('Server listen on port', PORT)
})