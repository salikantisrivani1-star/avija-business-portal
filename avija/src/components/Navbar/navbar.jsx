import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css'
import logo from '../../assets/avija logo.png'

const Navbar = () => {

     const [ sticky,setSticky] = useState(false);


     useEffect(() => {
       window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
}, []);



    return (
        <nav className={`container ${sticky? 'dark' : ''}`}>
             
            <img src={logo} alt="" className='logo' />
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-150} duration={500}>Events  Portfolio</Link></li>
                <li><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
                <li><Link to='services' smooth={true} offset={-150} duration={500}>Services</Link></li>
                <li><Link to='blogs' smooth={true} offset={-150} duration={500}>Blogs</Link></li>
                <li><Link to='contact' smooth={true} offset={-100} duration={500} className='btn'>Contact</Link></li>
            </ul>
             
        </nav>
    );
}

export default Navbar
