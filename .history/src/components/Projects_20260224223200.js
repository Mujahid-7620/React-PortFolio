import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'School Management System',
      description: 'A Java-based application using Spring Boot for managing student records, attendance, and grades. Features REST APIs for seamless integration.',
      tech: 'Java, Spring Boot'
    },
    {
      title: 'Fashion Recommendation System',
      description: 'A Java-based system that recommends fashion items based on user preferences and trends. Includes data processing and basic AI logic.',
      tech: 'Java'
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