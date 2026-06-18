import React, { useState } from 'react';
import './Hero.css';
import aditiPhoto from '../assets/aditi.jpeg';
import aditiCV from '../assets/aditi_cv.pdf';
import { Mail, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";


export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToChat = (e) => {
    e.preventDefault();
    const event = new CustomEvent('open-chatbot');
    window.dispatchEvent(event);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section">
      <div className="hero-aura-1" />
      <div className="hero-aura-2" />

      <div className="container hero-grid-layout animate-fade-in-up">
        {/* Left Column: Text & Content */}
        <div className="hero-text-col">
          <div className="hero-badge-row">
          <span className="hero-badge">Cloud & MLOps Engineer</span>
          <span className="hero-badge">Patent Holder</span>
          <span className="hero-badge">IIST Researcher</span>
          </div>

          <h1 className="hero-title">
            Engineering the future of <span className="text-gradient">MLOps & Cloud Scale.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Aditi Ashok Jangamakote</strong>. Currently at A.P. Moller Maersk engineering 
            Day 0/1 database-as-a-service (DBaaS) automation across 150+ production and 250+ non-production 
            databases. Certified in AWS and Azure, trained in GCP, with a granted patent and 
            control-theory research roots.
          </p>


          <div className="hero-social-icons">
            <a href="mailto:aditiashok148@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/aditiashok55" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/aditi-ashok-8b5831228" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://medium.com/@aditiashok148" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <FaMedium size={20} />
            </a>
            <a href={aditiCV} download aria-label="Download CV">
              <FileDown size={20} />
              <span>CV</span>
            </a>
          </div>

          <div className="hero-actions">
            {/* <a href="#chatbot" onClick={scrollToChat} className="btn-primary">
              Chat with Aditi AI
              <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </a> */}
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="view-work-btn">
              View Work
              <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            {/* <button className="view-work-btn" onClick={() => scrollToSection('projects')}>
              View Work <ArrowRight size={18} />
            </button> */}
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Databases Automated</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-value">1</span>
              <span className="stat-label">Granted Patent</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-value">9.13</span>
              <span className="stat-label">B.E. Honours CGPA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Photo Container */}
        <div className="hero-photo-col">
          <div className="photo-frame">
            {!imgError ? (
              <img 
                src={aditiPhoto} 
                alt="Aditi Ashok Jangamakote" 
                className="hero-profile-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="profile-fallback-card">
                <div className="fallback-gradient-bg" />
                <div className="fallback-initials">AJ</div>
                <div className="fallback-caption">
                  <p className="fallback-name">Aditi Ashok</p>
                  <p className="fallback-title">Bangalore, India</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
