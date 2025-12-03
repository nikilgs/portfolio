import React from 'react';

const Skills = () => {
  const skills = [
    { name: "React & HTML", level: "Advanced", progress: 90, category: "Frontend" },
    { name: "Node.js & Express", level: "Advanced", progress: 85, category: "Backend" },
    // { name: "TypeScript", level: "Intermediate", progress: 80, category: "Language" },
    { name: "MongoDB ", level: "Advanced", progress: 85, category: "Database" },
    { name: "CSS", level: "Advanced", progress: 90, category: "Styling" },
    // { name: "Python & Django", level: "Intermediate", progress: 75, category: "Backend" },
    { name: "Git, GitHub, Versel, Netlify & VS Code", level: "Advanced", progress: 80, category: "Tools" },
    { name: "Asure", level: "Intermediate", progress: 65, category: "Cloud" },
    { name: "REST APIs", level: "Intermediate", progress: 90, category: "Backend" },
    // { name: "Redux & State Management", level: "Advanced", progress: 85, category: "Frontend" },
    { name: "Testing", level: "Intermediate", progress: 75, category: "Testing" },
    { name: "Core Languages", level: "Intermediate", progress: 65, category: "JS,Familiar with java and python," },

    // { name: "GraphQL", level: "Intermediate", progress: 70, category: "API" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise and proficiency levels</p>
        </div>

        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;