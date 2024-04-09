import React from 'react';
import { useNavigate } from 'react-router';
import './GridWorks.scss';
import WorksData from '../../datas/Wall.json'; 

function GridWorks() {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
        <section className='Article'>
          <h2 className='test'>My Projects Wall</h2>
          <div onClick={() => handleNavigation("/works")} className='Works-grid'>
            {WorksData.map(work => (
              <div key={work.wallId} className='Works-grid__slot'>
                <img
                  src={work.wallSrc}
                  alt={`Projet ${work.workName}`} 
                  className={`bg ${work.wallName}`} 
                  width={work.width}
                  height={work.height}
                />
              </div>
            ))}
          </div>
        </section>
    </>
  );
}

export default GridWorks;
