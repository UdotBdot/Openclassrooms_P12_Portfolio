import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MainWorks from '../components/main_works/MainWorks'

function Works() {
  return (
    <>
      <Navbar />
      <section>
        <MainWorks />
      </section>

    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Works