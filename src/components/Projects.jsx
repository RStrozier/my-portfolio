import React from 'react';
import loveImage from '../imgs/love-compat.jpg';
import aframeImage from '../imgs/aframe-picture.jpg';
import '../projects.css';

const Projects = () => {
  const handleClickLove = () => {
    window.location.href = 'https://rstrozier.github.io/love-compatibility/';
  };

  const handleClickAframe = () => {
    window.location.href = 'https://rstrozier.github.io/first-a-frame/';
  };

  return (
    <div className="projects-container rounded-2">
      <h2 className='project-text rounded-1'>Check out my current projects:</h2>
      <div className="projects container-fluid rounded-2">
        <div className='love-project container-fluid images-container rounded-3'>
          <img src={loveImage} alt="img-1" className="image-size" />
          <div className="caption rounded-2">
            <h2>Love Compatibility</h2>
            <p>Use a custom cursor to type in a partner's name and determine love using the compatibility API.</p>
            <button className='button rounded-2' onClick={handleClickLove}>Try It!</button>
          </div>
        </div>
        <div className='aframe-project container-fluid images-container rounded-3'>
          <img src={aframeImage} alt="img-2" className="image-size" />
          <div className="caption rounded-2">
            <h2>A-Frame Environment</h2>
            <p>Camera mounted on block with spinning blocks and circle end goal. In VR HTML compatible.</p>
            <button className='button rounded-2' onClick={handleClickAframe}>Try It!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;