import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Main from './Main'
import Footer from './Footer'

function Landing() {
  return (
    <div className='bg-gray-900 text-white p-[16px]'>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
    </div>
  )
}

export default Landing