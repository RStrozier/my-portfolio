import React from 'react';
import rashidaImage from '../imgs/rashida.jpg';
import '../about.css';

const About = () => {
  return (
    <div className="App">
      <div className="Message container-md p-1 rounded-3">
        <div className="row">
          <div className="col-md-6 offset-md-3 coding-container">
            <h3 className="tech-stack-text">Current technology stack:</h3>
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
                <div className="bio-container col-md-12">
                  <div className="bio-text rounded-2">
                    Hey there! I'm Rashida, a self-taught web developer
                    <br />
                    with a passion for pushing the boundaries of reality. 
                    <br />Currently,
                    my magical powers are channeled into the
                    <br />realms  of virtual reality and augmented reality. 
                    <br />When I'm not conjuring
                    captivating digital experiences, 
                    <br />I explore the world's
                    hidden gems and read captivating books. 
                    <br />
                    My interests span beyond code, encompassing the
                    <br />fascinating worlds of botany, history, and deep thinking. 
                    <br />
                    <br />Welcome to my captivating
                    portfolio showcasing the mind-bending creations of
                    <br />
                    my imaginative journey into virtual and augmented realities.
                    <br />Let's embark together to discover where the lines are between what's real 
                    <br />and what's possible, and blur in the most wondrous ways.
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;