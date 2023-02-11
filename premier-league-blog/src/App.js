import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import ArsenalPage from './pages/Arsenal Page'
import AstonVillaPage from './pages/AstonVillaPage'
import BournemouthPage from './pages/BournemouthPage'
import BrentfordPage from './pages/BrentfordPage'

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/arsenal" element={<ArsenalPage />} />
            <Route path="/astonvilla" element={<AstonVillaPage />} />
            <Route path="/bournemouth" element={<BournemouthPage />} />
            <Route path="/brentford" element={<BrentfordPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
