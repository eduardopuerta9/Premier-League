const mongoose = require('mongoose')
const postSchema = require('./post')

const Post = mongoose.model('Post', postSchema)

module.exports = {
  Post
}
