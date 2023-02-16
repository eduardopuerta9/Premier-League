import { useState, useEffect } from 'react'
import axios from 'axios'
import Arsenal from '../components/Arsenal'
import { API_KEY } from '../globals'
import AstonVilla from '../components/Aston Villa'
import Bournemouth from '../components/Bournemouth'
import Brentford from '../components/Brentford'
import Brighton from '../components/Brighton'
import Chelsea from '../components/Chelsea'
import CrystalPalace from '../components/Crystal Palace'
import Everton from '../components/Everton'
import Fulham from '../components/Fulham'
import Leeds from '../components/Leeds'
import Leicester from '../components/Leicester'
import Liverpool from '../components/Liverpool'
import ManchesterCity from '../components/Manchester City'
import ManchesterUnited from '../components/Manchester United'
import Newcastle from '../components/Newcastle'
import Nottingham from '../components/Nottingham'
import Southhampton from '../components/Southhampton'
import Tottenham from '../components/Tottenham'
import WestHam from '../components/West Ham'
import Wolves from '../components/Wolves'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  useEffect(() => {}, [])

  return (
    <div>
      <div className="search">
        <section className="search-results container-grid"></section>
      </div>
      <div className="genres">
        <h2>TEAMS</h2>
        <section className="container-grid">
          <Arsenal />
          <AstonVilla />
          <Bournemouth />
          <Brentford />
          <Brighton />
          <Chelsea />
          <CrystalPalace />
          <Everton />
          <Fulham />
          <Leeds />
          <Leicester />
          <Liverpool />
          <ManchesterCity />
          <ManchesterUnited />
          <Newcastle />
          <Nottingham />
          <Southhampton />
          <Tottenham />
          <WestHam />
          <Wolves />
        </section>
      </div>
      <div className="gamecontent"></div>
    </div>
  )
}

export default Home
