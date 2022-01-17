import React from 'react'
import "./Subscribe.css"
import {TiSocialGooglePlus} from 'react-icons/ti'
import {FaFacebookF, FaTwitter,FaInstagram} from 'react-icons/fa'
const Subscribe = () => {
    return (
        <section id='subscribe'>
            <div className='container subscribe'>

            <h2>Subscribe Now</h2>
            <form>
                <div className='form-control'>
                    <input type='text' placeholder='Enter you Email..' />
                    <button>Subscribe</button>
                </div>
            </form>
            <div className='soical-icons'>
                <div className='soical-icon'>
                    <TiSocialGooglePlus />
                </div>
                <div className='soical-icon'>
                    <FaFacebookF />
                </div>
                <div className='soical-icon'>
                    <FaTwitter />
                </div>
                <div className='soical-icon'>
                    <FaInstagram />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Subscribe