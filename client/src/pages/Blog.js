import Form from '../components/Form'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Blog = () => {
  const [issues, setIssues] = useState([])

  const getIssues = async () => {
    try {
      let res = await axios.get('http://localhost:3001/issues')
      setIssues(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getIssues()
  }, [])
  return (
    <div className="blog">
      <h1>
        <center>Blog Page</center>
        <center>
          {' '}
          <img
            center
            src="https://i.ytimg.com/vi/2KLn8K_70uA/hqdefault.jpg"
            height={150}
          ></img>
          <Form getIssues={getIssues} />
          <h5>Posts:</h5>
          {issues.map((issue) => (
            <div key={issue._id}>
              <h2>Team: {issue.issueType}</h2>
              <h3>Subject: {issue.subject}</h3>
              <p>Message: {issue.message}</p>
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
