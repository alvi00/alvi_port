import * as React from 'react';

function ProjectCard({ project }) {
  const { name, description, tools, githubLink, websiteLink } = project;

  return (
    <div className="project-card">
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    </div>
  );
}

export default ProjectCard;
