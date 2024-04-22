import React from 'react'
import Header from '../components/head/Header'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import GridWorks from '../components/grid_works/GridWorks'
import Footer from '../components/footer/Footer'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'
import Cookie from '../components/cookie/Cookie';

function Home() {
  return (
    <>
    <header>
      <Header />
      <Cookie />
    </header>
    <Navbar />
    <section className='Hero-Pages'>
      <Hero />
    </section>
      <GridWorks />
      <Services />
      <Contact />
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home