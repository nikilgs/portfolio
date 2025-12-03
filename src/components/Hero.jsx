import React from 'react';
import { Download, Mail, Code, Palette, Database } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder
    link.download = 'YourName_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              Nikil G S
              <br />
              <span className="gradient-text">Full Stack Developer</span>
            </h1>
            
            <p className="hero-subtitle">"Building digital experiences that matter...!"</p>
            
            <p className="hero-description">
              I create exceptional digital experiences that combine beautiful design with powerful functionality. 
              Specialized in modern web technologies and user-centric solutions.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={handleDownloadResume}>
                <Download size={20} />
                Download Resume
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              {/* <div className="stat-item">
                <span className="stat-number">0+</span>
                <span className="stat-label">Happy Clients</span>
              </div> */}
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-circle">
                <div 
                  className="profile-inner"
                  style={{ backgroundImage: 'url(/profile.jpg)' }}
                ></div>
              </div>
              
              <div className="floating-icons">
                <div className="tech-icon icon-1">
                  <Code size={24} />
                </div>
                <div className="tech-icon icon-2">
                  <Palette size={24} />
                </div>
                <div className="tech-icon icon-3">
                  <Database size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;