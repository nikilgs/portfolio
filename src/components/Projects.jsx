import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform (RECENT)" ,
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "JavaScript"],
      liveLink: "#",
      githubLink: "https://github.com/nikilgs/E-commerce-website/tree/main"
    },
    {
      title: "Task Management App (RECENT)",
      description: "Collaborative project management tool with real-time updates and team communication features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tech: ["React", "JavaScript", "Express.js", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/nikilgs?tab=repositories"
    },
     {
      title: "Book My Ticket (RECENT)",
      description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      image: "https://img.freepik.com/premium-photo/cropped-image-person-holding-ticket-railroad-station_1048944-23058972.jpg?semt=ais_hybrid&w=740&q=80",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      liveLink: "#",
      githubLink: "https://github.com/nikilgs?tab=repositories"
    },
      {
      title: "Smart Drug Lable Analyzer (RECENT)",
      description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      image: "https://media.istockphoto.com/id/1268333171/photo/home-healthcare-nurse-reviews-medication-with-patient.jpg?s=612x612&w=0&k=20&c=lXXyDDlVZJR8AD479BxaiFjb7Z4ezauL9S_23YgiBwk=",
      tech: ["React ", "Node.js", "MongoDB", "AWS"],
      liveLink: "#",
      githubLink: "https://github.com/nikilgs?tab=repositories"
    },
    {
      title: "AI Content Generator (Feature)",
      description: "AI-powered content creation platform with multiple templates and customization options.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Dashboard (Feature)",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Express", "MySQL", "Chart.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Real Estate Marketplace (Feature)",
      description: "Property listing platform with advanced search filters and virtual tour integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tech: ["React", "Firebase", "Google Maps", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Fitness Tracking App(Feature)",
      description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      tech: ["React Native", "Node.js", "MongoDB", "AWS"],
      liveLink: "#",
      githubLink: "#"
    },
  
   
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div 
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <button className="project-view">
                    <ExternalLink size={24} />
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
    <div className="project-links">
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
      >
        <ExternalLink size={18} />
        Live Demo
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-link"
      >
        <Github size={18} />
        Source Code
      </a>
    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;