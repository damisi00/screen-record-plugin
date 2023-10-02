import './Feature.css'
import recIcon from '../../assets/simple.svg'
import sendIcon from '../../assets/easy-to.svg'
import revisitIcon from '../../assets/revisit.svg'
import ftImg from '../../assets/Video Repository.png'

const Feature = () => {
  return (
    <div className='feat'> 
        <div className="title">
          <h3>Features</h3>
          <p>Key Highlights of Our Extension</p>
        </div>
        <div className="content">
          <div className="points">
            <div className="point">
              <img src={recIcon} alt=""  className='check-img' />
              <div className="desc">
                <h4>Simple Screen Recording</h4>
                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
            </div>
            <div className="point">
              <img src={sendIcon} alt=""  className='check-img' />
              <div className="desc">
                <h4>Easy-to-Share URL</h4>
                <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
            </div>
            </div>
            <div className="point">
              <img src={revisitIcon} alt=""  className='check-img' />
              <div className="desc">
                <h4>Revisit Recordings</h4>
                <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>
            </div>
          </div>
          <div className="feat-img">
            <img src={ftImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Feature