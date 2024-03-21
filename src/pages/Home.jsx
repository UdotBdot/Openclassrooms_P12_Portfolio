import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Card from '../components/Card/Card'
import AutoSlider from '../components/AutoSlider/AutoSlider'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <>
    <header>
      <Header />
    </header>
    <div className='Hero-Pages'>
      <Navbar />
      <Hero />
      <Card />
    </div>
    <AutoSlider/>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home