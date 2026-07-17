import React, { useRef } from 'react'
import './Blog.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'  
import user_4 from '../../assets/user-4.png'

const Blog = () => {
  const slider= useRef();
     let tx = 0;

  const slideForward=()=>{

    if(tx>-50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward=()=>{

    if(tx<0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  
  }


  return (
    <div className='blogs'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
      <ul ref={slider}>
        <li>
          <div className='slide'>
            <img src={user_1} alt=""/>
            <h3>Sounds & Audio</h3>
            </div>
        </li>
        <li>
          <div className='slide'>
            <img src={user_2} alt=""/>
            <h3>Decuration</h3>
            </div>
            </li>
            <li>
          <div className='slide'>
            <img src={user_3} alt=""/>
            <h3>independence day Event</h3>
            </div>
            </li>
            <li>
          <div className='slide'>
            <img src={user_4} alt=""/>
            <h3>Stalls Arrangements</h3>
            </div>
            </li>
      </ul>
      </div>
    </div>
  )
}

export default Blog
