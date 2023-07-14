import { useState, useEffect } from 'react'
import axios from 'axios'
import Team from './Team'

const Home = () => {
  const initalState = [
    {
      team: '',
      badge_image: '',
      founded: '',
      team_image: '',
      stadium: '',
      location: '',
      capacity: '',
      stadium_image: ''
    }
  ]
  const [searchQuery, setSearchQuery] = useState('')
  const [teams, setTeams] = useState(initalState)
  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const getTeams = async () => {
    const response = await axios.get(`https://prem-api.onrender.com/teams/`)
    console.log(response.data)
    setTeams(response.data)
    console.log(teams)
  }
  useEffect(() => {
    getTeams()
  }, [])

  return (
    <div>
      <div className="search">
        <section className="search-results container-grid"></section>
      </div>
      <div className="genres">
        <h2>TEAMS</h2>
        <section className="container-grid">
          {teams.map((team) => {
            return <Team team={team} />
          })}
        </section>
      </div>
      <div className="gamecontent"></div>
    </div>
  )
}

export default Home
