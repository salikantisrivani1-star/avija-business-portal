import React from 'react'
import './Services.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div className='services'>
      <div className='gallery'>
        <div className='gallery-text'>
        <img src={gallery1} alt=""/>
        <p>Sound & Audio</p>
        </div>
         <div className='gallery-text'>
        <img src={gallery2} alt=""/>
        <p>Lighting & Visual</p>
        </div>
         <div className='gallery-text'>
        <img src={gallery3} alt=""/>
        <p>Events planning</p>
        </div>
         <div className='gallery-text'>
        <img src={gallery4} alt=""/>
        <p>Dj & Entertainment</p>
        </div>
      </div>
      <Link to='/portfolio'>
        <button className='btn-view'>View More</button>
      </Link>
    </div>
  )
}

export default Services
