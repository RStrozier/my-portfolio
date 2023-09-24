import React from 'react';
import '../about.css'

const Bio = () => {
  return (   
    <div className="bio-container col-md-12">
        <div className="bio-text rounded-2">
            <div className='bio-text-p-1'>
                Hey there! I'm Rashida, a <i>self-taught developer</i>
                <br />
                with a passion for pushing the boundaries of reality. 
                <br />Currently, I'm venturing into the realms of 
                <br /> virtual reality and augmented reality. 
                <br />When I'm not conjuring digital experiences, I explore
                <br />the world's hidden gems & enjoy reading books. 
                <br />My interests span beyond code, encompassing the
                <br />worlds of botany, history, and deep thinking. 
                <br />
            </div>
            <div className='bio-text-p-2'>
                <br /><b>Welcome to my captivating portfolio showcasing</b>
                <br />the mind-bending creations of my imaginative
                <br />journey into virtual and augmented realities.
                <br />Let's embark to discover where the lines
                <br />are between what's real and what's possible.
                <br /><u>Than let's blur those lines in the most wondrous ways.</u>
            </div>
        </div>
    </div>
  );
};

export default Bio;