import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TextAboutMe from '../components/TextAboutMe/TextAboutMe'

function AboutMe() {
  return (
    <>
     <Navbar />
     <section>
      <TextAboutMe />
     </section>
     <footer>
      <Footer />
    </footer>
    </>
  )
}

export default AboutMe