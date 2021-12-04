import express from 'express'
import mongoose from 'mongoose'

// Settings
const app = express()
mongoose.connect('mongodb://localhost:27017/product-handling')
  .then(() => console.log('Database is connected'))
  .catch(error => console.error(error))
app.set('port', 3001)
app.use(express.static(__dirname + '/public'))
app.use(express.json())

// Routes
app.use('/api/products', require('./src/routes/products'))

// Server up
app.listen(app.get('port'), () => {
  console.log('Server listen on port', app.get('port'))
})