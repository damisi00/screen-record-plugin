import './Modal.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/logo.svg'
import CurrenTabIcon from '../../assets/currtab.svg'
import closeBtn from '../../assets/close-circle.svg'
import Microphone from '../../assets/microphone.svg'
import Monitor from '../../assets/monitor.svg'
import CameraIcon from '../../assets/video-camera.svg'
import SettingIcon from '../../assets/setting-2.png'
import ToggleBtn from '../toggle/ToggleBtn'

const StarttRecordModal = () => {
  return (
    <div className='start-recording-container'>
        {/* <FontAwesomeIcon icon="fa-solid fa-gear" /> */}
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <h6>HelpMeOut</h6>
            </div>
            <div className="header-btns">
                <button className='setting-btn'>
                    <img src={SettingIcon} alt="setting icon" />
                </button>
                <button className='close-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.99984 18.3334C14.5832 18.3334 18.3332 14.5834 18.3332 10.0001C18.3332 5.41675 14.5832 1.66675 9.99984 1.66675C5.4165 1.66675 1.6665 5.41675 1.6665 10.0001C1.6665 14.5834 5.4165 18.3334 9.99984 18.3334Z" stroke="#B6B3C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.6416 12.3583L12.3583 7.6416" stroke="#B6B3C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.3583 12.3583L7.6416 7.6416" stroke="#B6B3C6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </header>
        <p className='description'>This extension helps you record and share help videos with ease.</p>
        <div className="view-mode">
            <a className="fullscreen-tab">
                <img src={Monitor} alt="fullscreen icon" />
                <p>Full screen</p>
            </a>
            <a className="curr-tab">
                <img src={CurrenTabIcon} alt="current tab icon" />
                <p>Current Tab</p>
            </a>
        </div>
        <div className="select">
            <div className="wrap-cam">
                <div className="wrp">
                    <img src={CameraIcon} alt="camera icon" />
                    <span>Camera </span>
                </div>
                
                <ToggleBtn />
            </div>

            <div className="wrap-audio">
                <div className="wrp">
                    <img src={Microphone} alt="camera icon" />
                    <span>Microphone  </span>
                </div>
                <ToggleBtn />
            </div>
        </div>
        <button className='start-recording-btn'>Start Recording</button>

    </div>
  )
}

export default StarttRecordModal