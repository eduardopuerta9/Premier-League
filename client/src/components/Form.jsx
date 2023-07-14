import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const initialState = {
    team: '',
    subject: '',
    message: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('https://prem-api.onrender.com/posts', formState)

    console.log(formState)

    setFormState(initialState)
    props.getPosts()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="team">Team</label>
      <select id="team" onChange={handleChange} value={formState.team}>
        <option value="Arsenal">Arsenal</option>
        <option value="Aston Villa">Aston Villa</option>
        <option value="Bournemouth">Bournemouth</option>
        <option value="Brentford">Brentford</option>
        <option value="Brighton">Brighton</option>
        <option value="Chelsea">Chelsea</option>
        <option value="Crystal Palace">Crystal Palace</option>
        <option value="Everton">Everton</option>
        <option value="Fulham">Fulham</option>
        <option value="Leeds">Leeds</option>
        <option value="Leicester">Leicester</option>
        <option value="Liverpool">Liverpool</option>
        <option value="Manchester City">Manchester City</option>
        <option value="Manchester United">Manchester United</option>
        <option value="Newcastle">Newcastle</option>
        <option value="Nottingham Forest">Nottingham Forest</option>
        <option value="Southhampton">Southhampton</option>
        <option value="Tottenham">Tottenham</option>
        <option value="West Ham">West Ham</option>
        <option value="Wolves">Wolves</option>
      </select>
      <label htmlFor="subject">Subject</label>
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
      <button type="submit">POST</button>
    </form>
  )
}

export default Form
