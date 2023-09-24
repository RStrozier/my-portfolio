import React from 'react';
import '../App.css';
import '../animations.css';
import Projects from './Projects';
import About from './About';

const Welcome = () => {
    return (
      <div className='Entire-Welcome-App fade-in'>
          <About />
          <div className="Projects container-md">
           <Projects />
          </div>
        </div> 
      );
  };
  export default Welcome;
