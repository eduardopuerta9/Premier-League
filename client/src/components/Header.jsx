import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        
        <Link to='/blog'>Team</Link>
        <Link to='/stadium'>Stadium</Link>
      </nav>
    </header>
  )
}

export default Header

