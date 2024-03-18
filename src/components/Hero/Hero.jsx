import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <>
    <article className='Hero'>
        <h1 className='Hero__h1'>Enchanté et bienvenue sur mon Portfolio !</h1>
           <h2 className='Hero__h2'> Je suis Frédéric SIN, un jeune développeur Agile basé en Alsace. </h2>
           <p className='Hero__p'>
            Bienvenue dans mon espace numérique où je m'exprime régulièrement à travers mes projets, mettant en avant ma capacité à combiner esthétique et fonctionnalité pour offrir la meilleure expérience utilisateur possible.
        </p>
        <p className='Hero__p'>
        Grâce à mon spèctre de compétences, je propose une diversité de services incluant le débogage, l'optimisation SEO/Performance, ainsi que la création d'applications web.
        </p>
        <p className='Hero__p'>
        Explorez mon portfolio pour découvrir ma vision du développement web et ensemble, transformons ensemble vos idées en réalité numérique...
        </p>
    </article>
        
    </>
  )
}

export default Hero