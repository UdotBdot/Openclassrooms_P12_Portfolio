import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import "./Home.scss"

function Home() {
  return (
    <>
        <Header />
    <div className='Hero-Pages'>
      <Navbar />
      <Hero />
      <Card />
    </div>
    </>
  )
}

export default Home