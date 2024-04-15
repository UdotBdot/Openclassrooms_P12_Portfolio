import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about_text/About'

function AboutMe() {
  return (
    <>
     <Navbar />
     <section>
      <About />
     </section>
     <footer>
      <Footer />
    </footer>
    </>
  )
}

export default AboutMe