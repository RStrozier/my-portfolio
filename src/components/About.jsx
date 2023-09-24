import React from 'react';
import rashidaImage from '../imgs/rashida.jpg';
import '../about.css';
import Bio from './Bio';

const About = () => {
  return (
    <div className="App">
     <div className="Message container-md p-1 rounded-3">
      <div className="coding-container">
        <h3 className="tech-stack-text">Rashida Strozier - Web Developer</h3>
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
        <div className='bottom-container'>
          <div className="row">
              <div className="row">
                <div className="col-md-6 sign-container">
                  <div className="message-signiture-container">
                    <i className="fa-regular fa-hand"></i>
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
                <div className="col-md-6 selfie-container">
                  <img src={rashidaImage} alt="self" className="image-size-2 right-image" />
                </div>
              </div>
              <div className="row">
                <Bio />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;