import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Experience', target: '#experience' },
  { label: 'Projects', target: '#projects' },
  { label: 'Contact', target: '#contact' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Detect scroll for background blur effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer to highlight current active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the center of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();
    setActiveItem(target);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-dock">
        {navItems.map((item) => {
          const isActive = activeItem === item.target;
          return (
            <a
              key={item.target}
              href={item.target}
              onClick={(e) => handleClick(e, item.target)}
              className={`navbar-item ${isActive ? 'navbar-item-active' : ''}`}
            >
              <span className="navbar-label">{item.label}</span>
              {isActive && <div className="navbar-active-dot" />}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
