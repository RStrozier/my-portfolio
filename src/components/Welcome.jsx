import React from 'react';
import '../App.css';
import Projects from './Projects';

const Welcome = () => {
    return (
      <div>
        <div className='Entire-Welcome-App container-fluid'>
        <div className="App container-fluid-bg">
          <div className="Message container container-md p-2 m-1 rounded-2">
          <i class="fa-regular fa-hand"></i>
          <p className="Text-Full">
            Just like me, this website is a 
            <p className="Work-Text">
              Work In Progress
            </p>
            <p className="Signiture">
            -Rashida S.
            </p>
          </p>
          <div className="coding-icons container container-md">
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-node"></i>
          </div>
          </div>
          <div className="Projects container-fluid-bg">
           <Projects />
      </div>
        </div>
      </div>
        </div>
      );
  };
  
  export default Welcome;
