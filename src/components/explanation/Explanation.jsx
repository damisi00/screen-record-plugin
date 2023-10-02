import './Explanation.css'
import one from '../../assets/one.svg'
import two from '../../assets/two.svg'
import three from '../../assets/three.svg'
import rec from '../../assets/rec.png'

const Explanation = () => {
  return (
    <div className='how-it-works'>
        <h2>How it works</h2>

        <section className='wrapper'>
            <div className="step">
                <div className="card">
                    <img src={one} alt="" className='step-icon' />
                    <h4>Record Screen</h4>
                    <p>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                </div>
                <div className="step-img">
                    <img src={rec} alt="" className='' />
                </div>
            </div>
            <div className="step">
                <div className="card">
                    <img src={two} alt="" className='step-icon' />
                    <h4>Share Your Recording</h4>
                    <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                </div>
                <div className="step-img">
                    <img src={rec} alt="" className='' />
                </div>
            </div>
            <div className="step">
                <div className="card">
                    <img src={three} alt="" className='step-icon' />
                    <h4>Learn Effortlessly</h4>
                    <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                </div>
                <div className="step-img">
                    <img src={rec} alt="" className='' />
                </div>
            </div>

        </section>

    </div>
  )
}

export default Explanation