import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MainWorks from '../components/MainWorks/MainWorks'

function Works() {
  return (
    <>
    <header>
      <Header />
    </header>
    <div className='Hero-Pages'>
      <Navbar />
    </div>
      <MainWorks />
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Works