import '../App.css'
import GoogleIcon from '../assets/Google.png'
import FacebkIcon from '../assets/Facebook.svg'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const LoginPg = () => {
  return (
    <main className='login-pg'>
      <Logo />
      <section className='login-form'>
        <h2>Log in or Sign up</h2>
        <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
        
        <button className='google_btn'>
          <img src={GoogleIcon} alt='google icon' />
          <span>Continue with Google </span>
        </button>  
        <button className='facebk_btn'>
          <img src={FacebkIcon} alt='facebook icon' />
          <span>Continue with Facebook</span>
        </button>  
        <div className='separator'>
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <form>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email address' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter your Password' />
          </div>
          
          <Link to='record'>
          <button type='submit'>Sign Up </button>
          </Link>
        </form>
      </section>
    </main>
    )
}
export default LoginPg