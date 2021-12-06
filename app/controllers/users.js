const User = require('../models/User')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const { validateRequestFields, validateEmail } = require('../helpers/validations')
const httpError = require('../helpers/handleErrors')

const logInUser = async ({ body }, res) => {
  try {
    const { validate, field } = validateRequestFields(body, ['email', 'password'])
    if (!validate) {
      throw `El campo "${field}" es requerido`
    }

    let { email, password } = body
    email = email.toLowerCase().trim()
    if (password.length < 6 || password.length > 51) {
      throw 'La contraseña debe contener entre 6 o 50 caracteres'
    }
    if (!validateEmail(email)) {
      throw 'El formato del email es incorrecto'
    }

    const user = await User.findOne({ email })
    if (!user) {
      throw 'El email no fue encontrado'
    }
    const validatePassword = await bcrypt.compare(password, user.password)
    if (!validatePassword) {
      throw 'La contraseña es incorrecta'
    }

    const { name, _id } = user
    const token = JWT.sign({
      name, email, _id
    }, process.env.TOKEN_SECRET)

    res
      .header('authorization', token)
      .json({ token })
  } catch (error) {
    httpError(res, error)
  }
}

const createUser = async ({ body }, res) => {
  try {
    const { validate, field } = validateRequestFields(body, ['name', 'email', 'password'])
    if (!validate) {
      throw `El campo "${field}" es requerido`
    }

    let { name, email, password } = body
    email = email.toLowerCase().trim()
    if (password.length < 6 || password.length > 51) {
      throw 'La contraseña debe contener entre 6 o 50 caracteres'
    }
    if (!validateEmail(email)) {
      throw 'El formato del email es incorrecto'
    }
    if (await User.findOne({ email })) {
      throw 'El email ya se encuentra registrado'
    }
    password = await bcrypt.hash(password, await bcrypt.genSalt(8))

    const user = await new User({
      name, email, password
    })
    user.save()
    res.json({ register: true })
  } catch (error) {
    httpError(res, error)
  }
}

module.exports = {
  logInUser,
  createUser
}