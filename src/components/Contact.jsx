import React, { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_nikil",          // ✅ Service ID (correct)
      "template_85fybli",       // ✅ Template ID (correct)
      formRef.current,
      "re_ALq2FtUVZngQ28"       // ✅ Your REAL Public Key
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      e.target.reset();
    })
    .catch((error) => {
      console.error("EMAILJS ERROR:", error);
      if (error?.text) {
        console.error("EMAILJS ERROR TEXT:", error.text);
      }
      alert("Failed to send message ❌");
    });
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nikilgs143@gmail.com",
      link: "mailto:nikilgs143@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6360235409",
      link: "tel:+916360235409",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together on your next project
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Cards */}
          <div className="contact-info">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                  {info.link && (
                    <a href={info.link} className="btn-contact">
                      Contact Me
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"   // 🔴 must match {{from_name}} in template
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reply_to">Email</label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"   // 🔴 must match {{reply_to}} in template
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"    // 🔴 must match {{subject}} in template
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"    // 🔴 must match {{message}} in template
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-submit">
                <Send size={20} />
                <span style={{ marginLeft: "8px" }}>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
