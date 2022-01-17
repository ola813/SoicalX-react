import React ,{useEffect}from 'react'
import "./Header.css"

import phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/Button/Button'
import "../UI/Button/Button.css"
import {BsMouse} from "react-icons/bs"
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000, 
        });
    },[])
    return (
        <section id="header">
            <div className='container header'>
                <div className="header-left" data-aos="fade-right">
                        <h1>
                            <span>THE WORLD'S LEADING</span>
                            <span>CROSS-PLAATFORM SECURE</span>
                            <span>MESSAGING SYSTEM</span>
                        </h1>
                        <p className='u-text-small u-text-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta aliquam perspiciatis omnis at temporibus consequatur! Repudiandae, quaerat sapiente! Doloremque voluptatum hic in amet voluptatem ab quibusdam tenetur molestiae architecto.</p>
                    
                        <div className="hrader-cta">
                        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
                        <Button text={"How it Works"} btnClass={"btn-orange"} href={"#"}/>
                        </div>
                </div>
                <div className="headre-right" data-aos="fade-left">
                <img src={phoneHeader}  alt="phone"/>
                </div>
            </div>
            <div className='floating-icon'>
                <a href="#frature">
                    <BsMouse  color='#fff' size={25} className='mouse'/>
                </a>
            </div>


        </section>
    )
}

export default Header
