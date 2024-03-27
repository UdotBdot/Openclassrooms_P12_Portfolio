import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import './GridWorks.scss'

function GridWorks() {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);}
  return (
    <>
    {isLoading ? (null) : (
 <section className='Article'>
 <h2 className='test' >
   My Projects Wall
 </h2>
 <div onClick={() => handleNavigation("/works")} className='Works-grid'>
     <div className='Works-grid__slot'>
         <img  src="../../images/Grid/Bluel-Work.jpg" alt="Projet Sophie Bluel" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Grid/Kasa-Work.png" alt="Projet Kasa" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Grid/Qwenta-Work.jpg" alt="Projet Qwenta" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Grid/Nina-Work.png" alt="Projet Nina Carducci" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Grid/ArgentBank-Work.webp" alt="Projet ArgenBank" />
     </div>
     <div className='Works-grid__slot'>
     <img src="../../images/Grid/724-Work.png" alt="Projet 724events" />
     </div>
 </div>
 </section>
    )}
    </>
  )
}

export default GridWorks