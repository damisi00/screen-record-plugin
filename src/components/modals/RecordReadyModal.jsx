import closeBtn from '../../assets/close-circle.svg'
import successKite from '../../assets/success-kite.gif'
import './Modal.css'

const RecordReadyModal = () => {
  return (
    <>
    {/* Your recording is ready  */}
        <section className='ready-modal-container'> 
            <div className="ready-modal">
                <button type="button" className="close-btn">
                    <img src={closeBtn} alt="close button " />
                </button>
                <div className="success-gif">
                    <img src={successKite} alt="success kite"  className='success-img' />
                </div>
                <h4>Your video link has been sent to johnmark@gmail.com</h4>
                <p>Would you need to view this video later? Save to your account now!</p>
                <button type="submit" className='save-btn'>Save Video</button>
                <h6>Don’t have an account?<span> Create account</span></h6>
            </div>
        </section>
    </>
  )
}

export default RecordReadyModal