import React from 'react';
import myResume from '../assets/Jacob_Smith_Resume_123.png';

const Resume = () => {
  return (
    <div className='mainBody'>
        <div className='resumePage'>
            <h2>My Resume</h2>
            <div className='resumeBox'>
                <img src={myResume} alt="Jake Smith's Resume" className='myResume'/>
            </div>
        </div>
    </div>
  );
};

export default Resume;