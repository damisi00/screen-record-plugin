import CamOnIcon from '../CamOnIcon'
import MicOn from '../MicOn'
import './BottomFloater.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomFloater = () => {
  return (
    <div className='bottombar'>
        <div className="camera-container">

        </div>
        <div className="record-scrn-board">
            <div className="board-container">
                <div className="menu">
                    <div className="timer">
                        <h5>00:03:45</h5>
                        <span></span>
                    </div>
                    <div className="controls">
                        <div className="frame">
                            <button className='pause-btn'>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="white"/>
                                    <path d="M18 16.5L18 27.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M26 16.5L26 27.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white"/>
                                </svg>
                            </button>
                            <p>Pause</p>
                        </div>
                        <div className="frame">
                            <button className='stop-btn'>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="white"/>
                                    <path d="M15.25 17.5C15.25 16.2574 16.2574 15.25 17.5 15.25H26.5C27.7426 15.25 28.75 16.2574 28.75 17.5V26.5C28.75 27.7426 27.7426 28.75 26.5 28.75H17.5C16.2574 28.75 15.25 27.7426 15.25 26.5V17.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black"/>
                                </svg>
                            </button>
                            <p>Stop</p>
                        </div>
                        <div className="frame">
                            <button className='camera-btn'>
                                <CamOnIcon />
                            </button>
                            <p>Camera</p>
                        </div>
                        <div className="frame">
                            <button className='microphone-btn'>
                                <MicOn />
                            </button>
                            <p>Mic</p>
                        </div>
                        <div className="frame">
                            <button className='delete-btn'>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="#4B4B4B"/>
                                    <path d="M24.7404 19L24.3942 28M19.6058 28L19.2596 19M29.2276 15.7906C29.5696 15.8422 29.9104 15.8975 30.25 15.9563M29.2276 15.7906L28.1598 29.6726C28.0696 30.8448 27.0921 31.75 25.9164 31.75H18.0836C16.9079 31.75 15.9304 30.8448 15.8402 29.6726L14.7724 15.7906M29.2276 15.7906C28.0812 15.6174 26.9215 15.4849 25.75 15.3943M13.75 15.9563C14.0896 15.8975 14.4304 15.8422 14.7724 15.7906M14.7724 15.7906C15.9188 15.6174 17.0785 15.4849 18.25 15.3943M25.75 15.3943V14.4782C25.75 13.2988 24.8393 12.3142 23.6606 12.2765C23.1092 12.2589 22.5556 12.25 22 12.25C21.4444 12.25 20.8908 12.2589 20.3394 12.2765C19.1607 12.3142 18.25 13.2988 18.25 14.4782V15.3943M25.75 15.3943C24.5126 15.2987 23.262 15.25 22 15.25C20.738 15.25 19.4874 15.2987 18.25 15.3943" stroke="#BEBEBE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BottomFloater