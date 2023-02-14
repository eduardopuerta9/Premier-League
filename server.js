const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const db = require('./db')
const { Post } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.get('/posts', async (req, res) => {
  let posts = await Post.find({})
  res.send(posts)
})

app.post('/posts', async (req, res) => {
  let newPost = await Post.create(req.body)
  res.send(newPost)
})

app.delete('/delete/:id', (req, res) => {
  post
    .findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
  window.location.reload()
})

app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT)
})
