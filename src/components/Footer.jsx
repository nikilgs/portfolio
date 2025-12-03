import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, link: "https://github.com/nikilgs?tab=repositories", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/nikil-g-s/", label: "LinkedIn" },
    // { icon: Twitter, link: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Mail, link: "Mail-To:nikilgs143@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" }
  ];

  const resources = [
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
    { label: "Resume", link: "/resume.pdf" },
    { label: "Blog", link: "#" }
  ];

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Nikil G S</h3>
              <p>
                Full Stack Developer passionate about creating exceptional digital experiences. 
                Let's build something amazing together.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index} onClick={() => scrollToSection(link.id)}>
                      {link.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Resources</h4>
                <ul>
                  {resources.map((link, index) => (
                    <li key={index}>
                      {link.id ? (
                        <span onClick={() => scrollToSection(link.id)}>
                          {link.label}
                        </span>
                      ) : (
                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Footer;