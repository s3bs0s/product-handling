const JWT = require('jsonwebtoken')

const verifySession = (req, res, next) => {
  const token = req.header('authorization')

  if (!token) {
    return res.status(401).json({ error: 'No tiene autorización' })
  }

  try {
    req.user = JWT.verify(token, process.env.TOKEN_SECRET)
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Sesión finalizada' })
  }
}

module.exports = verifySession