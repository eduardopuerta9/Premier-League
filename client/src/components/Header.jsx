import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>Standings</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
    </header>
  )
}

export default Header

