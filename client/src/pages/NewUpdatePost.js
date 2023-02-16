import Form from '../components/Form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
  useEffect(() => {
    loadPost()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`http://localhost:3001/posts/${id}`, formState)

    setFormState(initialState)
    props.getPosts()
  }
  const loadPost = async () => {
    const result = await axios.get(`http://localhost:3001/posts/${id}`)
    setFormState(result.data)
  }

  return <Form />
}
export default NewUpdatePost
