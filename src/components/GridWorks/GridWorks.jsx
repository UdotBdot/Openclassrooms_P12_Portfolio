import React from 'react'
import { useNavigate } from 'react-router';
import './GridWorks.scss'

function GridWorks() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);}
  return (
    <>
    <h2 >
      My Projects Wall
    </h2>
    <div onClick={() => handleNavigation("/works")} className='Works-grid'>
        <div className='Works-grid__slot'>
            <img width={386} height={265} src="../../images/Bluel-Work.jpg" />
        </div>
        <div className='Works-grid__slot'>
        <img width={218} height={600} src="../../images/Kasa-Work.png" />
        </div>
        <div className='Works-grid__slot'>
        <img width={148} height={328} src="../../images/Qwenta-Work.jpg" />
        </div>
        <div className='Works-grid__slot'>
        <img width={148} height={328} src="../../images/Nina-Work.png" />
        </div>
        <div className='Works-grid__slot'>
        <img width={386} height={326} src="../../images/ArgentBank-Work.webp" />
        </div>
        <div className='Works-grid__slot'>
        <img width={306} height={263} src="../../images/724-Work.png" />
        </div>
    </div>

    </>
  )
}

export default GridWorks