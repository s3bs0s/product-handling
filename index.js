const express = require('express')
const mongoose = require('mongoose')

// Settings
const app = express()
mongoose.connect('mongodb://localhost/product-handling')
  .then(() => console.log('BD is connected'))
  .catch(error => console.error(error))
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