import React from 'react';
import loveImage from '../imgs/love-compat.jpg';
import '../projects.css';

const Projects = () => {
  const handleClick = () => {
    window.location.href = 'https://rstrozier.github.io/love-compatibility/';
  };

  return (
    <div className="projects-container rounded-2">
        <h2 className='project-text'>Check out my current project's:</h2>
      <section className="projects container-fluid rounded-2">
        <div className='container-fluid images-container rounded-3'>
          <img src={loveImage} alt="img-1" className="image-size" />
          <div className="caption rounded-2">
            <h2>Love Compatibility</h2>
            <p>Use a custom cursor to type in partner's name and determine love using compatibility API.</p>
            <button className='button rounded-2' onClick={handleClick}>Try It!</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;