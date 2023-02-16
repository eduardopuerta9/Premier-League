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

app.delete('/posts/delete/:id', (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})

app.put('/posts/put/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    res.status(200).json(updatedPost)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})
app.get('/reviews', async (req, res) => {
  let reviews = await Review.find({})
  res.send(reviews)
})

app.post('/reviews', async (req, res) => {
  let newReview = await Review.create(req.body)
  res.send(newReview)
})

app.delete('/reviews/delete/:id', (req, res) => {
  Review.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
})

app.put('/reviews/put/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    res.status(200).json(updatedReview)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})
app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT)
})
