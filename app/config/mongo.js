const mongoose = require('mongoose')

const connectDatabase = () => {
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, options)
    .then(() => console.log('Database is connected'))
    .catch(error => console.error(error))
}

module.exports = connectDatabase