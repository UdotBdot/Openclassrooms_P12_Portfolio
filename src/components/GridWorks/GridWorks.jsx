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
         <img width={314} height={237} src="../../images/Grid/Bluel-Work.webp" alt="Projet Sophie Bluel" />
     </div>
     <div className='Works-grid__slot'>
     <img width={152} height={596}  src="../../images/Grid/Kasa-Work.webp" alt="Projet Kasa" />
     </div>
     <div className='Works-grid__slot'>
     <img width={152} height={436} src="../../images/Grid/Qwenta-Work.webp" alt="Projet Qwenta" />
     </div>
     <div className='Works-grid__slot'>
     <img width={152} height={436} src="../../images/Grid/Nina-Work.webp" alt="Projet Nina Carducci" />
     </div>
     <div className='Works-grid__slot'>
     <img width={314} height={350} src="../../images/Grid/ArgentBank-Work.webp" alt="Projet ArgenBank" />
     </div>
     <div className='Works-grid__slot'>
     <img width={314} height={150} src="../../images/Grid/724-Work.webp" alt="Projet 724events" />
     </div>
 </div>
 </section>
    )}
    </>
  )
}

export default GridWorks