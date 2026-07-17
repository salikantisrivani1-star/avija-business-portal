import React from 'react'
import './programs.css'
import program1 from '../../assets/program1.png'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program3.png'
import program4 from '../../assets/program4.png'

const programs = () => {
  return (
    <div className='programs' >
      <div className='program'>
        <img src={program1} alt=""/>
        <p>Wedding Events</p>
      </div>
      <div className='program'>
        <img src={program2} alt=""/>
        <p>Corporate Events</p>
      </div>
      <div className='program'>
        <img src={program3} alt=""/>
        <p>Festival Events</p>
      </div>
      <div className='program'>
        <img src={program4} alt=""/>
        <p>Private Parties</p>
        </div>
        </div>
  )
}

export default programs
