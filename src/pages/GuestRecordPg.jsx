import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import ShareOptions from '../components/share-opt/ShareOptions'
import copyBtn from '../assets/copy.svg'
import playBtn from '../assets/play-circle.svg'
import volumeBtn from '../assets/volume-high.svg'
import settingBtn from '../assets/setting-2.png'


const GuestRecordPg = () => {
  return (
    <div className='guest-pg'>
        <Nav />
        <div className="container">
            <div className="part-dets">
                <h2>Your video is ready!</h2>
                <form action="">
                
               
                <div className="values">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id=""  value='Untitled_Video_20232509' />
                </div>

                <div className="email">
                    <input type="email" placeholder='enter email of receiver' name="" id="" />
                    <button type="submit">Send</button>
                </div>

                <label htmlFor="">Video Url</label>
                <div className="email">
                   
                    <input type="url" value='https://www.helpmeout/Untitled_Video_20232509' name="" id="" />
                    <button type="submit">
                        <img src={copyBtn} alt="" />
                        <span>Copy</span>
                    </button>
                </div>
                
                </form>
                <ShareOptions />
            </div>
            <div className="part-video">
                <div className='video-p'>
                    <video src='' preload='metadata'></video>
                    <div className="progress">
                        
                    </div>
                    <div className='desc-wrapper'>
                        
                        <p className='duration'>00:34</p>
                    
                        <div className='link-btns'>
                            <button>
                                <img src={playBtn} alt="" />
                                <span>Play</span>
                            </button>
                            <button>
                                <img src={volumeBtn} alt="" />
                                <span>Volume</span>
                            </button>
                            <button>
                                <img src={settingBtn} alt="" />
                                <span>Settings</span>
                            </button>
                        </div>
                    </div>
                </div>
               
            </div>

         </div>
         <div className="banner">
            <h4>To ensure the availability and privacy of your video, we recommend saving it to your account.</h4>
            <button type="button">Save Video</button>
            <p> Don’t have an account? <span>Create account</span></p>
         </div>
        <Footer />
    </div>
  )
}

export default GuestRecordPg