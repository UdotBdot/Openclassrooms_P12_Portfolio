import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
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
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Home