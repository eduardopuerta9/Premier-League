const mongoose = require('mongoose')
const postSchema = require('./post')
const reviewSchema = require('./review')
const teamSchema = require('./team')

const Post = mongoose.model('Post', postSchema)
const Review = mongoose.model('Review', reviewSchema)
const Team = mongoose.model('Team', teamSchema)

module.exports = {
  Post,
  Review,
  Team
}
