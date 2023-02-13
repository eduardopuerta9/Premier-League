const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.get('', (req, res) => {
  res.send('Express is here')
})

app.listen(3001, function () {
  console.log('Server is running')
})
