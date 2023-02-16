import Form from '../components/Form'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import EditBlog from '../components/EditBlog'
import EditableBlog from '../components/EditableBlog'
const Blog = () => {
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getPosts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/posts')
      setPosts(res.data)
    } catch (err) {}
  }

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/posts/delete/${id}`).then(() => {})
    window.location.reload()
  }
  useEffect(() => {
    getPosts()
  }, [])
  const [editPostData, setEditPostData] = useState({
    team: '',
    subject: '',
    message: ''
  })
  const [editPostId, setEditPostId] = useState(null)

  const handleEditPost = (event) => {
    event.preventDefault()
  }

  const handleEditClick = (event, post) => {
    event.preventDefault()
    setEditPostId(post._id)
  }

  return (
    <div className="blog">
      <h1>
        <center>Team Blog</center>
        <center>
          {' '}
          <img
            center
            src="https://i.ytimg.com/vi/2KLn8K_70uA/hqdefault.jpg"
            height={200}
          ></img>
          <Form getPosts={getPosts} />
          <h5>Posts:</h5>
          {posts.map((post) => (
            <div key={post._id}>
              {editPostId === post._id ? (
                <EditableBlog />
              ) : (
                <EditBlog post={post} handleEditClick={handleEditClick} />
              )}
              <Link to={`/posts/${post._id}`}>
                <button type="button">UPDATE</button>
              </Link>
              <br></br>
              <button onClick={() => deletePost(post._id)}>DELETE</button>
            </div>
          ))}
        </center>
      </h1>
      <h3>
        <center></center>
      </h3>
    </div>
  )
}

export default Blog
