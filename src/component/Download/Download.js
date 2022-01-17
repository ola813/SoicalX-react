import React from 'react'
import './Download.css'
import {FaApple, FaWindows} from 'react-icons/fa';
import {GrAndroid} from 'react-icons/gr';
import {IconContext} from "react-icons"
const Download = () => {
    return (
        <section id="download">
          <div className='container download'>
            <h2>SOCIALX MESSNGER DOWNLOAD</h2>
            <p className="u-text-small u-text-light">
              our apps are availabe for download on all stores.
            </p>
            <IconContext.Provider value={{size:"15"}}>

            <div className='download-icons'>
                <div className='download-icon'>
                  <FaApple size={22} /><p>ios</p>
                </div>
                <div className='download-icon'>
                  <GrAndroid size={22} /><p>Android</p>
                </div>
                <div className='download-icon'>
                  <FaWindows size={22} /><p>Windows</p>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </section>
    )
}

export default Download
