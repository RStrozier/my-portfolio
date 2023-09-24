import React from 'react';
import '../Earth.css';

const Earth = () => {
  return (
    <div className='earth-shell'>
        <div className='black-earth-container rounded-2'>
        <div className="earth-container container-md rounded-3">
        <div className='create-container rounded-3'>
            <p className='create-text'>The Earth is a canvas, 
            <br /><i>and we are the artists. </i>
            <br />Let's paint a masterpiece of love, 
            <br />compassion, and sustainability.</p>
        </div>
      <div className="earth"></div>
    </div>
    </div>
    </div>
  );
};

export default Earth;