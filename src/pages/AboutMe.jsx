import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TextAboutMe from '../components/TextAboutMe/TextAboutMe'

function AboutMe() {
  return (
    <>
    <header>
      <Header />
    </header>
     <Navbar />
     <TextAboutMe />
     <footer>
      <Footer />
    </footer>
    </>
  )
}

export default AboutMe