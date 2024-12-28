import React from 'react';
import { Link } from 'react-router-dom';
import mmelodiesPic from '../assets/mmelodioespic.png';

const projects = [
  {
    title: 'Meteorological Melodies',
    image: mmelodiesPic, // Replace with actual image link
    deployedLink: 'link-to-deployed-app1', // Replace with actual deployed app link
    githubLink: 'link-to-github-repo1', // Replace with actual GitHub repo link
  },
  {
    title: 'Stream Screenings',
    image: 'link-to-image1', // Replace with actual image link
    deployedLink: 'link-to-deployed-app1', // Replace with actual deployed app link
    githubLink: 'link-to-github-repo1', // Replace with actual GitHub repo link
  },
  {
    title: 'CLI-Garage',
    image: 'link-to-image1', // Replace with actual image link
    deployedLink: 'link-to-deployed-app1', // Replace with actual deployed app link
    githubLink: 'link-to-github-repo1', // Replace with actual GitHub repo link
  },
  {
    title: 'ReadMe Machine',
    image: 'link-to-image1', // Replace with actual image link
    deployedLink: 'link-to-deployed-app1', // Replace with actual deployed app link
    githubLink: 'link-to-github-repo1', // Replace with actual GitHub repo link
  }
];

const Portfolio = () => {
  return (
    <div className='mainBody'>
      <div className="portfolioPage">
        <div className='OOOO'>
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project"> {/* Use project title as key for uniqueness */}
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;