import React from 'react';

function Skills() {
  const skills = [
    'Core Java', 'OOPS', 'JDBC', 'Hibernate', 'Spring Boot', 'REST API',
    'HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'MongoDB', 'Git','Spring Security','MicroServices'
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;