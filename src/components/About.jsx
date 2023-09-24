import React from 'react';
import rashidaImage from '../imgs/rashida.jpg';
import '../about.css';

const About = () => {
  return (
      <div className="App">
          <div className="Message container-lg p-1 rounded-3">
             <div className='coding-container'>
             <h3 className='tech-stack-text'>Current Technology Stack:</h3>
                <div className="coding-icons">
                 <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-gitlab"></i>
                <i class="fa-brands fa-git"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-node"></i>
                </div>
            </div>
             <div className='sign-container'>
                <div className='message-signiture-container'>
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
                 </div>
             </div>
            <div className='selfie-container'>
            <img src={rashidaImage} alt="self" className="image-size-2 right-image" />
          </div>
        </div>
      </div>
  );
};

export default About;