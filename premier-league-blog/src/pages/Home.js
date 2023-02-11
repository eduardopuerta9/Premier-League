import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import Arsenal from '../components/Arsenal'
import { API_KEY } from '../globals'
import AstonVilla from '../components/Aston Villa'
import Bournemouth from '../components/Bournemouth'
import Brentford from '../components/Brentford'
import Brighton from '../components/Brighton'
import Chelsea from '../components/Chelsea'
import CrystalPalace from '../components/Crystal Palace'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get
    console.log(response)

    setGenres(response.data.results)
  }
  const getSearchResults = async (e) => {
    e.preventDefault()
    let find = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`
    )
    console.log(find.data.results)

    setSearchResults(find.data.results)
    setSearched(true)
    setSearchQuery('')
  }
  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  useEffect(() => {
    //getSearchResults()
    getGenres()
  }, [])
  console.log(searchQuery)
  return (
    <div>
      <div className="search">
        <Search
          onChange={handleChange}
          getSearchResults={getSearchResults}
          value={searchQuery}
        />

        <section className="search-results container-grid"></section>
      </div>
      <div className="genres">
        <h2>Teams</h2>
        <section className="container-grid">
          <Arsenal />
          <AstonVilla />
          <Bournemouth />
          <Brentford />
          <Brighton />
          <Chelsea />
          <CrystalPalace />
        </section>
      </div>
      <div className="gamecontent"></div>
    </div>
  )
}

export default Home
