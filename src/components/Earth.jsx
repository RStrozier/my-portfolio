import React from 'react';
import '../Earth.css';

const Earth = () => {
  return (
    <div className="earth-container container-lg rounded-2">
        <div className='create-container rounded-3'>
            <p className='create-text'>Create <b>anything</b> you can 
            <br />
            <i>imagine</i></p>
        </div>
      <div className="earth"></div>
    </div>
  );
};

export default Earth;