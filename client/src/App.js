import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import ArsenalPage from './pages/Arsenal Page'
import AstonVillaPage from './pages/AstonVillaPage'
import BournemouthPage from './pages/BournemouthPage'
import BrentfordPage from './pages/BrentfordPage'
import BrightonPage from './pages/BrightonPage'
import ChelseaPage from './pages/ChelseaPage'
import CrystalPalacePage from './pages/CrystalPalacePage'
import EvertonPage from './pages/EvertonPage'
import FulhamPage from './pages/FulhamPage'
import LeedsPage from './pages/LeedsPage'
import LeicesterPage from './pages/LeicesterPage'
import LiverpoolPage from './pages/LiverpoolPage'
import ManchesterCityPage from './pages/ManchesterCityPage'
import ManchesterUnitedPage from './pages/ManchesterUnitedPage'
import NewcastlePage from './pages/NewcastlePage'
import NottinghamForestPage from './pages/NottinghamForestPage'
import SouthhamptonPage from './pages/SouthhamptonPage'
import TottenhamPage from './pages/TottenhamPage'
import WestHamPage from './pages/WestHamPage'
import WolvesPage from './pages/WolvesPage'
import Blog from './pages/Blog'
import Stadium from './pages/Stadium'
import NewUpdatePost from './pages/NewUpdatePost'
import NewUpdateStadium from './pages/NewUpdateStadium'
const App = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/editStadium/:id" element={<NewUpdateStadium />} />
            <Route path="/editBlog/:id" element={<NewUpdatePost />} />
            <Route path="/stadium" element={<Stadium />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/arsenal" element={<ArsenalPage />} />
            <Route path="/astonvilla" element={<AstonVillaPage />} />
            <Route path="/bournemouth" element={<BournemouthPage />} />
            <Route path="/brentford" element={<BrentfordPage />} />
            <Route path="/brighton" element={<BrightonPage />} />
            <Route path="/chelsea" element={<ChelseaPage />} />
            <Route path="/crystalpalace" element={<CrystalPalacePage />} />
            <Route path="/everton" element={<EvertonPage />} />
            <Route path="/fulham" element={<FulhamPage />} />
            <Route path="/leeds" element={<LeedsPage />} />
            <Route path="/leicester" element={<LeicesterPage />} />
            <Route path="/liverpool" element={<LiverpoolPage />} />
            <Route path="/manchestercity" element={<ManchesterCityPage />} />
            <Route path="/newcastle" element={<NewcastlePage />} />
            <Route
              path="/nottinghamforest"
              element={<NottinghamForestPage />}
            />
            <Route
              path="/manchesterunited"
              element={<ManchesterUnitedPage />}
            />
            <Route path="/southhampton" element={<SouthhamptonPage />} />
            <Route path="/tottenham" element={<TottenhamPage />} />
            <Route path="/westham" element={<WestHamPage />} />
            <Route path="/wolves" element={<WolvesPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
