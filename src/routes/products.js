const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('API is goes here')
})

module.exports = router