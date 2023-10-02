import copyBtn from '../assets/copy.svg'
import shareBtn from '../assets/more.svg'

const VideoCard = () => {
  return (
      <div className='video-card'>
        <div className='video-preview'>
          <video src='' preload='metadata'></video>
          <span className='duration'>00:34</span>
        </div>
        <div className='desc-wrapper'>
           <div className='video-desc'>
             <h6>How To Create Facebook Ad Listing </h6>
             <p className='date' style={{textTranform:'uppercase'}}>September 29, 2023</p>
           </div>
           <div className='link-btns'>
              <a><img src={copyBtn} alt='copy video link' /></a>
              <a><img src={shareBtn} alt='share video icon' /></a>
           </div>
         </div>
      </div>
    )
}

export default VideoCard