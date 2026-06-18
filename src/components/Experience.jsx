import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'A.P. Moller Maersk',
    location: 'Bangalore, India',
    period: 'Aug 2025 – Present',
    type: 'Industry',
    details: [
      'Built Day 0 and Day 1 automation workflows using GitHub Actions, Azure Logic Apps, and Azure Function Apps for a cloud-native DBaaS platform.',
      'Eliminated manual connectivity checks and monitoring across 152 production and 250+ non-production databases.',
      'Designed and deployed Grafana dashboards tracking automated metrics pushed to Prometheus, providing real-time fleet observability.',
      'Conducted HammerDB load testing against internal load balancers to validate database performance under peak conditions.',
      'Wrote unit and regression tests; identified and resolved SonarQube code quality issues across the core DBaaS codebase.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'A.P. Moller Maersk',
    location: 'Bangalore, India',
    period: 'Jul 2024 – Jul 2025',
    type: 'Industry',
    details: [
      'Contributed to Go-based DBaaS microservices, writing tests and performing Root Cause Analysis (RCA) on live service incidents.',
      'Built AI + database proof-of-concept systems to explore LLM-database integration for internal innovation initiatives.',
      'Completed Azure Fundamentals (AZ-900) certification and structured Google Cloud (GCP) training.'
    ]
  },
  {
    role: 'Research Intern',
    company: 'Indian Institute of Space and Technology (IIST)',
    location: 'Bangalore, India • Under Prof. Raju K George',
    period: 'May 2024 – Jun 2024',
    type: 'Research',
    details: [
      'Worked at the intersection of ML and Control Theory: modelled Linear Time-Invariant (LTI) systems in state-space representation for satellite orbital mechanics.',
      'Constructed a synthetic dataset by simulating orbital trajectories with randomised initial conditions, generating state-output pairs capturing orbital behavior.',
      'Applied linear regression models to predict the thrust force required to maintain a satellite on its desired orbital path.'
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredExperiences = experiences.filter(
    (exp) => activeTab === 'All' || exp.type === activeTab
  );

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <div className="experience-header">
          <div className="section-header">
            <h2 className="section-title-desc">My Journey</h2>
            <h1 className="section-main-title">Professional Experience & Scientific Research</h1>
          </div>

          {/* Filter tabs: Industry vs Academic Research */}
          <div className="experience-filters">
            {['All', 'Industry', 'Research'].map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${activeTab === tab ? 'filter-tab-active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedIndex(null); // Reset expand status on tab change
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          <div className="timeline-line" />
          
          {filteredExperiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx} className="timeline-item animate-fade-in">
                {/* Timeline node */}
                <div className={`timeline-node ${exp.type === 'Research' ? 'node-research' : 'node-industry'}`}>
                  {exp.type === 'Research' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M2 22h20M2 22l8-16 4 8 8-8" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  )}
                </div>

                <div className="timeline-content bento-card">
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className={`exp-type-badge ${exp.type === 'Research' ? 'badge-research' : 'badge-industry'}`}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-location-dot">•</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>

                  {/* Bullet details */}
                  <ul className={`exp-details-list ${isExpanded ? 'details-expanded' : ''}`}>
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="exp-detail-bullet">
                        <span className="bullet-point">•</span>
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Toggle button */}
                  <button className="exp-expand-btn" onClick={() => toggleExpand(idx)}>
                    {isExpanded ? 'Show Less' : 'Show Details'}
                    <svg
                      className={`expand-arrow ${isExpanded ? 'arrow-rotated' : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
