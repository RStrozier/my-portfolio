import React from 'react';
import rashidaImage from '../imgs/rashida.jpg'
import '../App.css';

const About = () => {
    return (
        <div className='Entire-Welcome-App'>
          <div className="App">
            <div className='message-signiture-container'>
            <div className="Message container-lg p-1 rounded-2">
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
      </div>
    </div>
      );
  };
  
  export default About;