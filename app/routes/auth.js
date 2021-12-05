const router = require('express').Router()
const {
  logInUser,
  createUser
} = require('../controllers/users')

router.post('/register', createUser)
router.post('/login', logInUser)

module.exports = router