import React, { useState, useEffect } from 'react';
import './TasleemPortfolio.css';
import { Mail, Phone, MapPin, ChevronUp, Github, Linkedin, Instagram, Monitor, Briefcase, Award, GraduationCap, Send, X } from 'lucide-react';

// Images
import heroBg from '../../../assets/images/tasleem_hero_bg.png';
import portfolioFoodMenu from '../../../assets/images/portfolio_food_menu.png';
import portfolioAssassin from '../../../assets/images/portfolio_assassin.jpg';
import portfolioEgypt from '../../../assets/images/portfolio_egypt.jpg';
import portfolioIronman from '../../../assets/images/portfolio_ironman.png';
import portfolioTheHill from '../../../assets/images/portfolio_thehill.jpg';
import portfolioBrochure from '../../../assets/images/portfolio_brochure.png';
import portfolioFlyerMockup from '../../../assets/images/portfolio_flyer_mockup.jpg';
import portfolioFoodFlyer from '../../../assets/images/portfolio_food_flyer.jpg';
import portfolioFoodApp from '../../../assets/images/portfolio_food_app.png';

const TasleemPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver(revealCallback, options);

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Premium Food Menu",
      category: "Branding",
      image: portfolioFoodMenu,
      description: "A high-end restaurant menu design featuring vibrant food photography and elegant typography. Designed to provide a luxurious dining experience through visual storytelling."
    },
    {
      id: 2,
      title: "The Assassin Movie Poster",
      category: "Marketing",
      image: portfolioAssassin,
      description: "Conceptual movie poster for 'The Assassin'. Focuses on atmospheric lighting and bold, cinematic typography to capture the essence of the film."
    },
    {
      id: 3,
      title: "Gods of Egypt Campaign",
      category: "Marketing",
      image: portfolioEgypt,
      description: "Promotional visual for 'Gods of Egypt', blending mythological elements with modern action-thriller aesthetics."
    },
    {
      id: 4,
      title: "Iron Man Tribute",
      category: "Marketing",
      image: portfolioIronman,
      description: "A digital art tribute and marketing layout for Iron Man, focusing on composite imagery and dynamic lighting effects."
    },
    {
      id: 5,
      title: "The Hill Film Poster",
      category: "Marketing",
      image: portfolioTheHill,
      description: "Gritty and dramatic film poster design for 'The Hill', using high-contrast textures and evocative imagery."
    },
    {
      id: 6,
      title: "Corporate Business Brochure",
      category: "Branding",
      image: portfolioBrochure,
      description: "Professional tri-fold brochure mockup for 'Graphic Island'. Clean, modern layout focused on corporate services and brand identity."
    },
    {
      id: 7,
      title: "Restaurant Flyer Mockup",
      category: "Marketing",
      image: portfolioFlyerMockup,
      description: "Perspective mockup of a restaurant promotional flyer, showing both front and back designs in a realistic setting."
    },
    {
      id: 8,
      title: "Modern Food Flyer",
      category: "Branding",
      image: portfolioFoodFlyer,
      description: "A clean and modern food delivery flyer design, highlighting special offers and menu items with high-quality graphics."
    },
    {
      id: 9,
      title: "Online Food App UI",
      category: "UI/UX Design",
      image: portfolioFoodApp,
      description: "Comprehensive mobile app design for 'Online Food'. Includes splash screens, authentication flows, and a vibrant food discovery feed focused on user engagement."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <p className="hero-subtitle">Senior Graphic Designer</p>
          <h1 className="hero-title">TASLEEM KOUSAR</h1>
          <p className="hero-desc">
            Dynamic professional with expertise in Graphic Design and Visual Communication. 
            Skilled in conceptualizing high-quality visual campaigns, branding identity, 
            and digital content creation to enhance brand visibility and engagement.
          </p>
          <div className="cta-group">
            <button className="btn-primary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
              View My Design Portfolio
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact for Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section" style={{ background: '#f8f9fa' }}>
        <div className="section-title-wrap reveal">
          <h2 className="section-title">Professional Journey</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal">
            <p className="timeline-date">07/2024 - 01/2025</p>
            <h3 className="timeline-role">Coordinator</h3>
            <p className="timeline-company">Knowledge School</p>
            <p className="timeline-desc">
              Managed hiring and onboarding processes, performed rigorous resume screening, 
              and collaborated closely with the Principal to streamline administrative workflows 
              and enhance institutional efficiency.
            </p>
          </div>

          <div className="timeline-item reveal">
            <p className="timeline-date">08/2023 - 05/2024</p>
            <h3 className="timeline-role">Graphic Designer</h3>
            <p className="timeline-company">Indus Electro Power (PVT) LTD</p>
            <p className="timeline-desc">
              Developed comprehensive marketing materials while maintaining brand consistency 
              across all platforms. Provided cross-functional visual solutions for internal 
              corporate communication and client-facing brochures.
            </p>
          </div>

          <div className="timeline-item">
            <p className="timeline-date">01/2023 - 07/2023</p>
            <h3 className="timeline-role">Graphic Designer</h3>
            <p className="timeline-company">Rendream</p>
            <p className="timeline-desc">
              Leveraged Adobe Creative Suite to deliver high-quality digital content. 
              Managed multiple design projects simultaneously, ensuring timely delivery 
              and adherence to diverse client portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section" style={{ background: '#1a1a1a', color: '#fff' }}>
        <div className="section-title-wrap reveal">
          <h2 className="section-title" style={{ color: '#fff' }}>Design Portfolio</h2>
          <p style={{ opacity: 0.7, maxWidth: '600px', margin: '20px auto' }}>A showcase of creative solutions specializing in Branding, Marketing Collateral, and UI/UX Design.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card reveal">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <span className="project-tag">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description.substring(0, 80)}...</p>
                <button 
                  className="btn-primary" 
                  style={{ padding: '8px 20px', fontSize: '0.8rem' }}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding" style={{ background: '#fafafa' }}>
        <div className="section-title-wrap reveal">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="edu-card reveal">
          <div className="edu-icon-box">
            <GraduationCap size={48} color="#c6a34f" />
          </div>
          <div className="edu-content">
            <p className="degree">Masters in Computer Sciences</p>
            <h3 className="heading-serif">UNIVERSITY OF AGRICULTURE FAISALABAD</h3>
            <p className="year">2016 — 2018</p>
            <div className="edu-badge">Distinction in Visual Computing</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-title-wrap reveal">
          <h2 className="section-title">Professional Expertise</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-category reveal">
            <h3 className="skill-category-title">Design & Creative</h3>
            {[
              { name: 'Branding & Visual Identity', val: 95 },
              { name: 'Social Media Post Design', val: 90 },
              { name: 'Marketing Collateral', val: 92 },
              { name: 'Adobe Illustrator', val: 92 },
              { name: 'Adobe Photoshop', val: 88 },
              { name: 'Canva (Pro)', val: 98 }
            ].map(skill => (
              <div key={skill.name} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.val}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skill-category reveal">
            <h3 className="skill-category-title">Tools & Software</h3>
            <div className="tools-grid">
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#2A0000"/>
                  <text x="32" y="44" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#FF9A00" text-anchor="middle">Ai</text>
                </svg>
                <span className="tool-name">Illustrator</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#001A36"/>
                  <text x="32" y="44" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#31A8FF" text-anchor="middle">Ps</text>
                </svg>
                <span className="tool-name">Photoshop</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#2A001F"/>
                  <text x="32" y="44" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#FF3366" text-anchor="middle">Id</text>
                </svg>
                <span className="tool-name">InDesign</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#2B0044"/>
                  <text x="32" y="44" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#E978D5" text-anchor="middle">Pr</text>
                </svg>
                <span className="tool-name">Premiere</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="12" fill="#000036"/>
                  <text x="32" y="44" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#9999FF" text-anchor="middle">Ae</text>
                </svg>
                <span className="tool-name">After Effects</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F24E1E" d="M12 0H8.5a3.5 3.5 0 1 0 0 7H12V0z"/>
                  <circle fill="#FF7262" cx="15.5" cy="3.5" r="3.5"/>
                  <path fill="#A259FF" d="M12 7H8.5a3.5 3.5 0 1 0 0 7H12V7z"/>
                  <circle fill="#1ABCFE" cx="15.5" cy="10.5" r="3.5"/>
                  <path fill="#0ACF83" d="M12 14H8.5A3.5 3.5 0 1 0 12 17.5V14z"/>
                </svg>
                <span className="tool-name">Figma</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>
                <span className="tool-name">VS Code</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#00C4CC"/>
                  <text x="32" y="44" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#FFFFFF" text-anchor="middle">C</text>
                </svg>
                <span className="tool-name">Canva</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FDB300" d="M12 16 L32 4 L52 16 L60 32 L32 60 L4 32 Z"/>
                  <path fill="#EA6C00" d="M32 4 L52 16 L32 60 Z"/>
                  <path fill="#FDAD00" d="M12 16 L32 60 L4 32 Z"/>
                  <path fill="#FDD231" d="M32 4 L12 16 L52 16 Z"/>
                </svg>
                <span className="tool-name">Autodesk Maya</span>
              </div>
              <div className="tool-icon-wrap">
                <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="32" r="22" fill="#E87D0D"/>
                  <circle cx="30" cy="32" r="10" fill="#FFFFFF"/>
                  <circle cx="30" cy="32" r="4" fill="#265787"/>
                  <path d="M 40 20 L 56 12" stroke="#E87D0D" stroke-width="6" stroke-linecap="round"/>
                  <path d="M 46 32 L 60 32" stroke="#E87D0D" stroke-width="6" stroke-linecap="round"/>
                  <path d="M 40 44 L 56 52" stroke="#E87D0D" stroke-width="6" stroke-linecap="round"/>
                </svg>
                <span className="tool-name">3ds Max</span>
              </div>
            </div>

            <h3 className="skill-category-title languages-title">Languages</h3>
            <div className="lang-list">
              <div className="lang-item"><span>Urdu</span> <span className="text-gold">(Native)</span></div>
              <div className="lang-item"><span>English</span> <span className="text-gold">(Fluent)</span></div>
              <div className="lang-item"><span>Punjabi</span> <span className="text-gold">(Native)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            <div className="modal-image-wrap" onClick={() => setIsZoomed(true)} style={{ cursor: 'zoom-in' }}>
              <img src={selectedProject.image} alt={selectedProject.title} title="Click to expand" />
            </div>
            <div className="modal-details">
              <span className="modal-tag">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.description}</p>
              <div style={{ marginTop: 'auto' }}>
                <button className="btn-primary" onClick={() => setSelectedProject(null)}>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-container">
          <div className="contact-details reveal-left">
            <h3>Let's Connect</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--portfolio-gray-500)' }}>
              Open for creative collaborations and professional opportunities in Graphic Design and Visual Communication.
            </p>
            <div className="contact-info-item">
              <Phone className="contact-icon" />
              <div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Phone</p>
                <p style={{ fontWeight: 600 }}>+92 319 7390366</p>
              </div>
            </div>
            <div className="contact-info-item">
              <Mail className="contact-icon" />
              <div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Email</p>
                <p style={{ fontWeight: 600 }}>tasleemnoor805@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <MapPin className="contact-icon" />
              <div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Location</p>
                <p style={{ fontWeight: 600 }}>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal-right">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group full-width">
                <label>Subject</label>
                <input type="text" placeholder="Project Inquiry" />
              </div>
              <div className="form-group full-width">
                <label>Message</label>
                <textarea placeholder="Tell me about your project..."></textarea>
              </div>
              <div className="form-group full-width">
                <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <h2 className="heading-serif" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>TASLEEM KOUSAR</h2>
        <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2026 Tasleem Kousar. All rights reserved.</p>
      </footer>

      {/* Floating Back to Top Button */}
      <button className="nav-btn-top" onClick={scrollToTop}>
        <ChevronUp style={{ margin: '0 auto' }} />
      </button>

      {/* Image Lightbox (Fullscreen Zoom) */}
      {isZoomed && selectedProject && (
        <div className="lightbox-overlay" onClick={() => setIsZoomed(false)}>
          <button className="modal-close" onClick={() => setIsZoomed(false)}>
            <X size={24} />
          </button>
          <img src={selectedProject.image} alt={selectedProject.title} className="lightbox-img" />
        </div>
      )}

    </div>
  );
};

export default TasleemPortfolio;
