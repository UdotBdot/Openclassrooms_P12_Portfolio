import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import AutoSlider from '../components/AutoSlider/AutoSlider'
import GridWorks from '../components/GridWorks/GridWorks'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'

function Home() {
  return (
    <>
    <header>
      <Header />
    </header>
    <Navbar />
    <section className='Hero-Pages'>
      <Hero />
    </section>
      <AutoSlider/>
      <GridWorks />
      <Services />
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home