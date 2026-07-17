import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Services from './components/Services/Services'
import Blogs from './components/Blogs/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Admin from './components/Admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import ServicesPage from './components/ServicesPage/ServicesPage'
import ContactPage from './components/ContactPage/ContctPage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import EventDetails from './components/EventDetails/EventDetails'
import AddEvent from './components/AddEvent/AddEvent'
const Home = () => {
  return (

    <div>
    
      <Navbar/>
      <Hero/>
      <div className='container dark-nav'>
      <Title subTitle='Our Events' title='What we Offer'/>
      <Programs/>
           <About/>
        <Title subTitle='Gallery' title='Our Recent Events'/>  
        <Services/> 
        <Title subTitle='BLOGS' title='Latest Updates'/>
        <Blogs/>
        <div id="contact">
   <Title subTitle="Contact us" title="Get in Touch" />
   <Contact />
</div>
        <Footer/>
      </div>
      
    
    </div>
  )
}

const App = () => {

   return (

      <BrowserRouter>

         <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/event-details" element={<EventDetails />} />
            <Route path="/add-event" element={<AddEvent />} />
         </Routes>

      </BrowserRouter>

   );

};


export default App
