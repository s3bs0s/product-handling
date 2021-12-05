const httpError = (res, error) => {
  res.status(500).json({ error })
}

module.exports = httpError