import React from 'react'
import "./Features.css"
import Feature from './Feature'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import phoneFeatures from '../../assets/phone-features.png'
import {featuresList} from './data.js'
const Features = () => {
    return (
        <section id="features">
            <div className="container features">
              <div className='u-title'>
                <BsFillBookmarkStarFill color="orangered" size={30} />
                <h2>Core Features</h2>
                <p className='u-text-small u-text-dark'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta aliquam perspiciatis omnis at temporibus consequatur! Repudiandae, quaerat sapiente! Doloremque voluptatum hic in amet voluptatem ab quibusdam tenetur molestiae architecto.
                </p>  
                </div> 
                <div className='features-content'>
                    <div className='features-left'>
                        <img src={phoneFeatures} alt="phone-feature" />
                    </div>
                    <div className='features-right'>
                        {featuresList.map((feature) =>(
                            <Feature 
                            key={feature.id}
                            icon={feature.icon}
                            heading={feature.heading}
                            text={feature.text}/>
                         ))
                         }
                        
                    </div>
                    </div> 
            </div>
        </section>
    )
}

export default Features
