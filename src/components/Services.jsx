import React from 'react';
import { Code, Palette, Database, CheckCircle, Smartphone, Globe, Server } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Clean Code"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs and efficient database architectures.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Scalable Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native-like experiences on iOS and Android.",
      features: ["React ", "Progressive Web Apps", "App Optimization", "Push Notifications"]
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end development services covering both frontend and backend requirements.",
      features: ["MERN Stack", "Next.js Apps", "Real-time Features", "Third-party Integrations"]
    },
    {
      icon: Server,
      title: "DevOps & Cloud",
      description: "Cloud infrastructure setup, deployment automation, and continuous integration/deployment.",
      features: ["AWS/Azure Setup", "Docker Containers", "CI/CD Pipelines", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-link">Learn More →</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;