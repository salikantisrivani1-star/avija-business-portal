import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await axios.post('http://localhost:5000/contact', 
        
      {
        name,
        email,
        phone,
        message,
      })

      setStatus('Message sent successfully')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err) {
      console.error(err)
      const errMsg = 'Failed to send message'
      setStatus(`Failed: ${errMsg}`)
    }
  }

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send Us a Message <img src={msg_icon} alt='message icon' />
        </h3>
        <p>
          We're happy to hear from you. Use the form to send us a message or
          use the contact details below.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt='mail' /> ceo@avijaprosound.com
          </li>
          <li>
            <img src={phone_icon} alt='phone' /> +91 9849757722
          </li>
          <li>
            <img src={location_icon} alt='location' /> #401, 4th Floor, Sri
            Garatri Homes, Near Yashoda Hospital, Kondapur, Hyderabad - 500084
          </li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Your Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your mobile number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Your Message</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message here'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className='btn-send' type='submit'>
            Send Message
          </button>
        </form>

        {status && <span className='contact-status'>{status}</span>}
      </div>
    </div>
  )
}

export default Contact

