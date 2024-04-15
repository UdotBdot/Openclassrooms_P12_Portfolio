import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import AutoSlider from '../components/auto_slider/AutoSlider'
import GridWorks from '../components/grid_works/GridWorks'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'

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
      <GridWorks />
      <Services />
      <AutoSlider/>
      <Contact />
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home