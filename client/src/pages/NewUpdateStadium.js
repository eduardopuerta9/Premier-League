import Updatereview from '../components/Updatereview'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const NewUpdateReview = (props) => {
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
    await axios.put(`https://prem-api.onrender.com/reviews/${id}`, formState)

    setFormState(initialState)
    props.getPosts()
  }

  return (
    <div className="updateReview">
      <center>
        <Updatereview />
        <br></br>
        <Link to={'/stadium'}>
          <button type="button">See changes</button>
        </Link>
      </center>
    </div>
  )
}

export default NewUpdateReview
