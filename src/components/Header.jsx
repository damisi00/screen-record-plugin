import arrowDown from '../assets/arrow-down.svg'
import userPic from '../assets/profile-circle.png'
import Logo from './Logo'
import '../App.css'

const Header = () => {
  return (
      <header className='unique-header'>
        <div className="container">
          <Logo />
          <div className="username">
            <img src={userPic} alt="user's pic" />
            <p>John Mark </p>
            <img src={arrowDown} alt="downward arrow icon" />
          </div>
        </div>
        
      </header>
    )
  
}

export default Header