import React from 'react';
import myImage from '../assets/jakepic.jpg'; // Adjust the file name and extension as needed

const About = () => {
  return (
    <div className='mainBody'>
      <div className="aboutPage">
        <img src={myImage} alt="Jake Smith's Picture" className='myProfileImage'/>
        <p className='bioText'>&emsp;&emsp;I am a passionate Web Developer with a strong 
          foundation in coding and creating engaging user experiences. My background in 
          music production fuels my creativity, allowing me to blend technology and art 
          effectively. I enjoy tackling challenging problems and developing innovative solutions, 
          whether it's building interactive web applications to enhance user experiences further
          or learning game development. I'm committed to continuous learning and improvement, 
          I strive to deliver exceptional results in every project I undertake.</p>
      </div>
    </div>
  );
};

export default About;