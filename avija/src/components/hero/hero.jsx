import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'
const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to Avija</h1>
        <p>Your trusted partner in innovative solutions</p>
        <Link to="/services">
          <button className='btn'>Explore more</button>
        </Link>
      </div>
      
    </div>
  )
}

export default hero
