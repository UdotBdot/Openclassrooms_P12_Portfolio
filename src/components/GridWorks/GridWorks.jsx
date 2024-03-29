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
         <img width={308} height={232} src="../../images/Grid/Bluel-Work.webp" alt="Projet Sophie Bluel" />
     </div>
     <div className='Works-grid__slot'>
     <img width={148} height={592}  src="../../images/Grid/Kasa-Work.webp" alt="Projet Kasa" />
     </div>
     <div className='Works-grid__slot'>
     <img width={148} height={432} src="../../images/Grid/Qwenta-Work.webp" alt="Projet Qwenta" />
     </div>
     <div className='Works-grid__slot'>
     <img width={148} height={432} src="../../images/Grid/Nina-Work.webp" alt="Projet Nina Carducci" />
     </div>
     <div className='Works-grid__slot'>
     <img width={308} height={344} src="../../images/Grid/ArgentBank-Work.webp" alt="Projet ArgenBank" />
     </div>
     <div className='Works-grid__slot'>
     <img width={308} height={144} src="../../images/Grid/724-Work.webp" alt="Projet 724events" />
     </div>
 </div>
 </section>
    )}
    </>
  )
}

export default GridWorks