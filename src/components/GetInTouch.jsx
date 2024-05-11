import React from 'react'
import { COUNTRY_IMAGE } from '../constants/constants'
import "./touch.css"

const GetInTouch = () => {
  return (
    <div className='contact-container'>
        <div className='contact-left'>
        <h2>Get in touch with us</h2>
        <p>Send your enquiry now!</p>
        <form>
            <input type='text' placeholder='Enter email address'/>
            <button>Request Demo</button>
        </form>
        </div>
        <div className='contact-right'>
        <img src={COUNTRY_IMAGE} alt='Country'/>
    </div>
    </div>
  )
}

export default GetInTouch