import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Nav.css'

const Nav = () => {
  return (
    <nav style={{backgroundColor: '#fff'}}>
      <div className="container">
        <Logo / >
          <ul>
            <li><a href="#Features">Features</a></li>
            <li><a href="#Howitwork">How it Works</a></li>
          </ul>
          <Link to='/login'>
          <button>Get Started</button>
          </Link>
          
      </div>
       
    </nav>
  )
}

export default Nav