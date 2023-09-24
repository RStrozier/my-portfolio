import React from 'react';
import rashidaImage from '../imgs/rashida.jpg';
import '../about.css';
import Bio from './Bio';
import Earth from './Earth';

const About = () => {
  return (
    <div className="App">
     <div className="Message container-lg p-1 rounded-3">
      <div className="coding-container">
        <h3 className="tech-stack-text">Rashida Strozier - Developer</h3>
        <div className="coding-icons">
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-gitlab"></i>
          <i className="fa-brands fa-git"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-node"></i>
        </div>
      </div>
      <Earth />
        <div className='bottom-container-shell'>
          <div className="bottom-container row rounded-3">
                <div className="sign-container">
                  <div className="message-signiture-container">
                    <p className="Welcome-Text">
                      Welcome to my world.
                    </p>
                </div>
                <div className="selfie-container">
                  <img src={rashidaImage} alt="self" className="image-size-2 right-image" />
                </div>
                  <p className="Signiture">
                        -Rashida S.
                  </p>
              </div>
                <Bio />
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;