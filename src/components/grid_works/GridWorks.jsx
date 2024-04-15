import React from 'react';
import { useNavigate } from 'react-router';
import './grid_works.scss';
import WorksData from '../../datas/wall.json'; 

function GridWorks() {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
        <section className='article'>
          <h2>My Projects Wall</h2>
          <div onClick={() => handleNavigation("/works")} className='works-grid'>
            {WorksData.map(work => (
              <div key={work.wallId} className='works-grid__slot'>
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
