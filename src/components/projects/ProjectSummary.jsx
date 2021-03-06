import React from 'react';


const ProjectSummary = ({ project }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <img src={project.imgURL}alt="No data" height="300" width="375" />
      <p>$ {project.price}</p>
    </div>
  </div>
);

export default ProjectSummary;
