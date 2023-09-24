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
    <div className="projects-container container-md rounded-2">
      <h2 className='project-text rounded-1'>Check out my current projects:</h2>
      <div className="projects container-md rounded-2">
      <i class="fa-solid fa-circle-left"></i>
        <div className='love-project container-sm images-container rounded-3'>
          <img src={loveImage} alt="img-1" className="image-size" />
          <div className="caption rounded-2">
            <h2>Love Compatibility</h2>
            <p>Use a custom cursor to type in a partner's name and determine love using the compatibility API.</p>
            <button className='button button-1 rounded-2' onClick={handleClickLove}>Try It!</button>
          </div>
        </div>
        <div className='aframe-project container-sm images-container rounded-3'>
          <img src={aframeImage} alt="img-2" className="image-size" />
          <div className="caption rounded-2">
            <h2>A-Frame Environment</h2>
            <p>Start on a block with a spinning circle end goal. In VR HTML compatible.</p>
            <button className='button button-2 rounded-2' onClick={handleClickAframe}>Try It!</button>
          </div>
        </div>
        <i class="fa-solid fa-circle-right"></i>
      </div>
    </div>
  );
};

export default Projects;