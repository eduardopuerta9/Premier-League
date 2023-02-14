const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const db = require('./db')
const { Post } = require('./models')
const { Review } = require('./models')

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

app.delete('/posts', async (req, res) => {
  let deletePost = await Post.delete(req._id)
  res.send(deletePost)
  window.location.reload()
})
app.get('/reviews', async (req, res) => {
  let reviews = await Review.find({})
  res.send(reviews)
})

app.post('/reviews', async (req, res) => {
  let newReview = await Review.create(req.body)
  res.send(newReview)
})

app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT)
})
