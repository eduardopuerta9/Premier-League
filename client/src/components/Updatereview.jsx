import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Updatereview = (props) => {
  const review = {
    stadium: '',
    subject: '',
    message: ''
  }
  const { id } = useParams()
  const [formState, setFormState] = useState(review)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `https://prem-api.onrender.com/reviews/put/${id}`,
      formState
    )

    console.log(formState)

    setFormState(review)
    props.getReviews()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="stadium">Stadium</label>
      <select id="stadium" onChange={handleChange} value={formState.stadium}>
        <option value="Anfield">Anfield</option>
        <option value="Brentford Community Stadium">
          Brentford Community Stadium
        </option>
        <option value="Craven Cottage">Craven Cottage</option>
        <option value="Elland Road">Elland Road</option>
        <option value="Falmer Stadium">Falmer Stadium</option>
        <option value="Goodison Park">Goodison Park</option>
        <option value="King Power Stadium">King Power Stadium</option>
        <option value="London Stadium">London Stadium</option>
        <option value="Molineux">Molineux</option>
        <option value="Old Trafford">Old Trafford</option>
        <option value="Selhurst Park">Selhurst Park</option>
        <option value="St James Park">St James Park</option>
        <option value="St Marys">St Marys</option>
        <option value="Stamford Bridge">Stamford Bridge</option>
        <option value="The City Ground">The City Ground</option>
        <option value="The Emirates">The Emirates</option>
        <option value="The Etihad">The Etihad</option>
        <option value="Tottenham Hotspur Stadium">
          Tottenham Hotspur Stadium
        </option>
        <option value="Villa Park">Villa Park</option>
        <option value="Vitality Stadium">Vitality Stadium</option>
      </select>
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        onChange={handleChange}
        value={formState.subject}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.message}
      ></textarea>
      <button type="submit">UPDATE</button>
    </form>
  )
}

export default Updatereview
