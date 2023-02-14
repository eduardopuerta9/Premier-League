import Form from '../components/Form'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Blog = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/posts')
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  const deletePost = (id) => {
    console.log(id)

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <div className="blog">
      <h1>
        <center>Blog Page</center>
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
            <div
              key={post._id}
              style={{
                border: 'solid white 2px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                padding: '1 rem'
              }}
            >
              <h2>Team: {post.issueType}</h2>
              <h3>Subject: {post.subject}</h3>
              <p>Message: {post.message}</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <button style={{ width: '60%', marginRight: '3rem' }}>
                  UPDATE
                </button>
                <button
                  onClick={() => deletePost(post._id)}
                  style={{ width: '60%', marginRight: '1rem' }}
                >
                  DELETE
                </button>
              </div>
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
