import Updatepost from '../components/Updatepost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const NewUpdatePost = (props) => {
  const initialState = {
    team: '',
    subject: '',
    message: ''
  }
  const { id } = useParams()
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`http://localhost:3001/posts/${id}`, formState)

    setFormState(initialState)
    props.getPosts()
  }

  return (
    <div className="updatedPost">
      <center>
        <Updatepost />
        <br></br>
        <Link to={'/blog'}>
          <button type="button">See Changes</button>
        </Link>
      </center>
    </div>
  )
}

export default NewUpdatePost
