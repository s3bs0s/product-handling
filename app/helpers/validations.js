const validateRequestFields = (data, requestFields) => {
  let index
  const validate = requestFields.every((field, indexArray) => {
    index = indexArray
    return data[field]
  })

  return { validate, field: requestFields[index] }
}

const validateEmail = email => {
  return String(email)
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

module.exports = {
  validateRequestFields,
  validateEmail
}