import './Footer.css'
import FooterLogo from '../../assets/footer-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
      <div className="footer-logo">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="footer-links">
          <div className='menu'>
            Menu
            <ul>
              <li>Home</li>
              <li>Converter</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div className='about'>
            About us
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='scrn-rcrd'>
            Screen Record
            <ul>
              <li>Browser Window</li>
              <li>Desktop</li>
              <li>Application</li>
            </ul>
          </div>
        </div>
      </div>
        
          

    </footer>
  )
}

export default Footer