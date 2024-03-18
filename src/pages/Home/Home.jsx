import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import "./Home.scss"

function Home() {
  return (
    <>
    <div className='Hero-Pages'>
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default Home