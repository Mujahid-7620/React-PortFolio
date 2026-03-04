import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Used Cars Portal System',
      description: 'Built a Used Cars Portal using Java Spring Boot Full-Stack that enables users to list, search, and manage used car listings with secure backend APIs and database integration.',
      tech: 'Java, Spring Boot,HTML,CSS,JS'
    },
    {
      title: 'AI-FitMentor',
      description: 'Built AI FitMentor, a Spring Boot full-stack application integrated with the OpenAI API to generate personalized fitness advice, workout plans, and health guidance using AI.',
      tech: 'Java,Spring Boot,AI-Integeration(OpenAI Key & OLLAMA),HTML,CSS,JS'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;