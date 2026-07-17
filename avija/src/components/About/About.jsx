import React from 'react'
import './About.css'
import aboutimg from '../../assets/aboutimg.png'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
       <img src={aboutimg} alt="" className='about-img' />
      </div>
      <div className='about-right'>
        <h2>ABOUT AVIJA PRO-SOUNDS & EVENTS</h2>
        <h3>"Celebrate the moments!"for a unique event or "Where Memories are made,and Smiles are Shared!"for a festival.</h3>
        <p>
        Avija Pro-Sounds & Events is a dynamic event management company dedicated to creating unforgettable experiences. With a passion for excellence and a commitment to innovation, we specialize in delivering top-notch sound solutions and organizing seamless events that leave a lasting impression. Our team of experienced professionals works closely with clients to understand their vision and bring it to life through meticulous planning, cutting-edge technology, and exceptional service.
        </p>
        <p>
        At Avija Pro-Sounds & Events, we believe that every event is a unique opportunity to create lasting memories and meaningful connections. Our dedication to quality and creativity ensures that your special moments are celebrated in style, leaving a positive impact on all who attend.
        </p>
      </div>
    </div>
  )
}

export default About
