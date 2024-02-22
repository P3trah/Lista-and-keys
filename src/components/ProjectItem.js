import React from "react";

function ProjectItem({ technologies }) {
  return (
    <div>
      <h3>Project</h3>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;
