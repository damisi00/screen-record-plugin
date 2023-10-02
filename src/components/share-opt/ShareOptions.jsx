import React from 'react'
import whatsappIcon from '../../assets/whatsapp.svg'
import telegramIcon from '../../assets/telegram.svg'
import FacebookIcon from '../../assets/Facebook.svg'
import './ShareOptions.css'

const btn_dets =[
    {
        id:1,
        txt: 'Facebook',
        source: FacebookIcon
    },
    {
        id:2,
        txt: 'WhatsApp',
        source: whatsappIcon
    },
    {
        id: 3,
        txt: 'Telegram',
        source: telegramIcon
    },
]

const ShareOptions = () => {
  return (
    <div className='share-via'>
        <h5>Share your video </h5>
        <div className="buttn-container">
        

                <button>
                    <img src={FacebookIcon} alt='facebook' />
                    <span>Facebook</span>
                </button>
                <button>
                    <img src={whatsappIcon} alt='whatApp' />
                    <span>WhatsApp </span>
                </button>
                <button>
                    <img src={telegramIcon} alt='Telegram' />
                    <span>Telegram </span>
                </button>
            
        </div>
        

    </div>
  )
}

export default ShareOptions