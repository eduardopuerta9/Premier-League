const mongoose = require('mongoose')
const postSchema = require('./post')
const reviewSchema = require('./review')

const Post = mongoose.model('Post', postSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Post,
  Review
}
