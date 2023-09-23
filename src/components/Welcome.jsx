import React from 'react';
import '../App.css';
import Projects from './Projects';
import rashidaImage from '../imgs/rashida.jpg'

const Welcome = () => {
    return (
      <div className=''>
        <div className='Entire-Welcome-App'>
          <div className="App">
            <div className='message-signiture-container'>
            <div className="Message container-sm p-1 rounded-2">
             <div className="coding-icons">
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-css3-alt"></i>
             <i class="fa-brands fa-html5"></i>
             <i class="fa-brands fa-js"></i>
             <i class="fa-brands fa-node"></i>
             </div>
          <i class="fa-regular fa-hand"></i>
          <p className="Text-Full">
            Just like me, this website is a 
          <p className="Work-Text">
              Work In Progress..
          </p>
          <p className="Signiture">
            -Rashida S.
          </p>
          </p>
          <div className='selfie-container'>
            <img src={rashidaImage} alt="self" className="image-size" />
          </div>
          </div>
            </div>
          <div className="Projects container-md">
           <Projects />
          </div>
        </div>  
      </div>
    </div>
      );
  };
  
  export default Welcome;
