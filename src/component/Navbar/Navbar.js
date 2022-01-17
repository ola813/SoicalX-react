import React,{useState} from 'react'
import './Navbar.css'
import {SiKhanacademy} from 'react-icons/si';
import {AiOutlineBars} from 'react-icons/ai';
import {RiCloseLine} from 'react-icons/ri';
import Button from '../UI/Button/Button';
import "../UI/Button/Button.css"
const Navbar = () => {
    const [showMenu,setShowMenu] = useState(true);
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }
    return (
        <nav className='container navbar'>
            <div className='logo'>
                <SiKhanacademy color='#fff' size={33} />
                <p className='logo-text'>Social<span>-X</span></p>
            </div>
            <menu>
        <ul className="nav-links" id={showMenu ? ' nav-links-mobile':'nav-links-mobile-hide'}>
            <li><a href="#">Home</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
            <li className='nav-btn'><Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"}/></li>
        </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {
                    showMenu ?(<AiOutlineBars color="#fff" size={30} />):( <RiCloseLine color="#fff" size={30}/>)
                    
                }
            </div>
        </nav>
    )
}

export default Navbar
