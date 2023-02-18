import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Header from './components/Header'
import Team from './pages/Team'
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
            <Route path="/reviews/:id" element={<NewUpdateStadium />} />
            <Route path="/posts/:id" element={<NewUpdatePost />} />
            <Route path="/stadium" element={<Stadium />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
export default App
