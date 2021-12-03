const express = require('express')

// Settings
const app = express()
app.set('port', 3001)
app.use(express.static(__dirname + '/public'))

// Middlewares
app.use(express.json())

// Routes
app.use('/products', require('./src/routes/products'))

// Server up
app.listen(app.get('port'), () => {
  console.log('Server listen on port', app.get('port'))
})