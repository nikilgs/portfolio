import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'YourName_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              I'm a passionate full-stack developer who loves turning ideas into reality through code.
            </p>
            
            <p>
              I have good experience in web development as a fresher, I specialize in building scalable, 
              user-friendly applications using modern technologies. My journey in tech started with 
              a curiosity about how websites work, and it has evolved into a career I'm truly passionate about.
            </p>
            
            <p>
              I believe in writing clean, maintainable code and creating solutions that not only meet 
              technical requirements but also provide exceptional user experiences. When I'm not coding, 
              you can find me exploring new technologies, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>
            
            <p>
              My approach combines technical expertise with creative problem-solving, ensuring every 
              project I work on is both functional and beautiful.
            </p>

            <button className="btn-primary" onClick={handleDownloadResume}>
              <Download size={20} />
              Download Full Resume
            </button>
          </div>

          <div className="about-visual">
            <div className="experience-card">
              <h3>Experience & Expertise</h3>
              <div className="progress-ring">
                <div className="progress-text">
                  Good experiance<br />
                  in Project building<br />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;