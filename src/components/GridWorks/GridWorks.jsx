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
         <img width={371} height={266} src="../../images/Grid/Bluel-Work.png" alt="Projet Sophie Bluel" />
     </div>
     <div className='Works-grid__slot'>
     <img width={181} height={601} src="../../images/Grid/Kasa-Work.png" alt="Projet Kasa" />
     </div>
     <div className='Works-grid__slot'>
     <img width={181} height={339} src="../../images/Grid/Qwenta-Work.png" alt="Projet Qwenta" />
     </div>
     <div className='Works-grid__slot'>
     <img width={181} height={339} src="../../images/Grid/Nina-Work.png" alt="Projet Nina Carducci" />
     </div>
     <div className='Works-grid__slot'>
     <img width={371} height={327} src="../../images/Grid/ArgentBank-Work.png" alt="Projet ArgenBank" />
     </div>
     <div className='Works-grid__slot'>
     <img width={371} height={254} src="../../images/Grid/724-Work.png" alt="Projet 724events" />
     </div>
 </div>
 </section>
    )}
    </>
  )
}

export default GridWorks