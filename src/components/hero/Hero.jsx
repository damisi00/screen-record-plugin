import './Hero.css'
import arrowRight from '../../assets/arrow-right.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import tv from '../../assets/herot.svg'
import bv from '../../assets/herob.svg'


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-container">
            <div className="hero-text">
                <h1>Show Them<br /> Don’t Just Tell</h1>
                <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                <button>
                    <span>Install HelpMeOut</span>
                    <img src={arrowRight} alt="" />
                </button>
            </div>
            <div className="hero-imgs">
                <div className="img-grid">
                    <div className="img-wrap a">
                        <img src={hero1} alt="" /> 
                    </div>
                    <div className="img-wrap b">
                        <img src={hero2} alt="" />
                    </div>
                    <div className="img-wrap c" >
                        <img src={hero3} alt="" />
                    </div>
                
                </div>
                <img src={tv} alt="" className='tvector' />
                <img src={bv} alt="" className='bvector' />
            </div>
        </div>
    </div>
  )
}

export default Hero