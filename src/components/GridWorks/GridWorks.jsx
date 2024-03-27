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
 <article className='Article'>
 <h2 className='test' >
   My Projects Wall
 </h2>
 <div onClick={() => handleNavigation("/works")} className='Works-grid'>
     <div className='Works-grid__slot'>
         <img  src="../../images/Bluel-Work.jpg" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Kasa-Work.png" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Qwenta-Work.jpg" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/Nina-Work.png" />
     </div>
     <div className='Works-grid__slot'>
     <img  src="../../images/ArgentBank-Work.webp" />
     </div>
     <div className='Works-grid__slot'>
     <img src="../../images/724-Work.png" />
     </div>
 </div>
 </article>
    )}
    </>
  )
}

export default GridWorks