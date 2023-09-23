import React from 'react';
import '../App.css';
import Projects from './Projects';
import About from './About';

const Welcome = () => {
    return (
      <div className=''>
          <About />
          <div className="Projects container-md">
           <Projects />
          </div>
        </div>  
      );
  };
  export default Welcome;
