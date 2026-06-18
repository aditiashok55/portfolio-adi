import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'MLOps Pipeline — Predictive Maintenance',
    desc: 'End-to-end production MLOps platform predicting Remaining Useful Life (RUL) of industrial jet engines. Integrates CI/CD automation with active monitoring dashboards.',
    details: 'Covers data ingestion, XGBoost training, MLflow experiment tracking, FastAPI inference, Prometheus/Grafana monitoring, GitHub Actions CI/CD, and Terraform-provisioned AWS infra (EC2, S3, VPC, IAM).',
    stack: ['Python', 'XGBoost', 'MLflow', 'FastAPI', 'Docker', 'Prometheus', 'Grafana', 'Terraform', 'AWS', 'GitHub Actions'],
    github: 'https://github.com/aditiashok55/ml-ops-predictive-maintenance',
    category: 'MLOps & IaC'
  },
  {
    title: 'MCP Oracle DB Integration',
    desc: 'Built an MCP (Model Context Protocol) server exposing read/write tool interfaces for Oracle DB — enabling structured AI-agent interaction with enterprise relational databases.',
    details: 'Implements the Model Context Protocol standard, allowing LLM-based agents to perform verified queries and CRUD operations under secure credentials.',
    stack: ['Python', 'Oracle DB', 'MCP', 'LLMs'],
    github: 'https://github.com/aditiashok55/oracle-mcp-server',
    category: 'AI & Data'
  },
  {
    title: 'IaC — Secure AWS RDS PostgreSQL',
    desc: 'Provisioned private, secure connectivity from an AWS environment to RDS PostgreSQL databases using Terraform automation.',
    details: 'Configured security controls, including AWS IAM database authentication, VPC subnet separation, private link endpoints, and custom security group rules.',
    stack: ['Terraform', 'AWS (RDS, EC2, VPC, IAM, S3)'],
    github: 'https://github.com/aditiashok55/iac-aws-rds',
    category: 'MLOps & IaC'
  },
  {
    title: 'IaC — Azure Infrastructure Stack',
    desc: 'Designed and deployed a full enterprise-grade Azure infrastructure stack using Infrastructure-as-Code principles.',
    details: 'Configured networking topologies (VNet, subnets, NSGs), virtual compute instances, scalable blob storage, and structured Resource Groups.',
    stack: ['Terraform', 'Azure (VNet, VM, Storage, Resource Groups)'],
    github: 'https://github.com/aditiashok55/iac-azure-infra',
    category: 'MLOps & IaC'
  },
  {
    title: 'Dog Alert & Safety System',
    desc: 'IoT system monitoring canine health indicators. Awarded 3rd Prize at a National-Level Project Expo and granted a official patent.',
    details: 'Monitors canine heart rate and sound patterns via embedded sensors, triggering real-time alerts for anomalous readings with live GPS tracking. Registered under Patent Office Journal No. 35/2025.',
    stack: ['IoT Sensors', 'Embedded Systems', 'GPS', 'Microcontrollers'],
    github: 'https://github.com/aditiashok55/dog-alert-system',
    category: 'AI & Data'
  },
  {
    title: 'Biodiversity Guardian — Wildlife Classifier',
    desc: 'CNN-based image classifier for multi-class wildlife identification, built on the Animal Image Dataset.',
    details: 'Trained a convolutional neural network using transfer learning and data augmentation to improve classification accuracy across multiple wildlife species, exploring how pretrained vision models generalize to domain-specific image sets.',
    stack: ['Python', 'TensorFlow', 'Keras', 'CNNs'],
    github: 'https://github.com/aditiashok55/Biodiversity-Guardian-Wildlife-Classifier',
    category: 'AI & Data'
  },
  {
    title: 'Pawfect — Pet Adoption Platform',
    desc: 'Full-stack web application for managing pet adoption listings with user authentication.',
    details: 'Built a complete pet adoption management system with secure user authentication, database-backed listings, and an interactive UI for browsing and managing adoptable pets.',
    stack: ['PHP', 'MySQL', 'XAMPP', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aditiashok55/Pawfect',
    category: 'Full-Stack'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="projects-header">
          <div className="section-header">
            <h2 className="section-title-desc">Selected Work</h2>
            <h1 className="section-main-title">Building automated, scalable and intelligent systems.</h1>
          </div>

          <div className="projects-filters">
            {['All', 'MLOps & IaC', 'AI & Data'].map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'filter-tab-active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <a
              key={idx}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link-wrapper animate-fade-in"
            >
              <div className="project-card bento-card">
                <div className="project-header-row">
                  <span className="project-category">{p.category}</span>
                  <span className="project-github-icon-slot">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </div>

                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <p className="project-details">{p.details}</p>

                <div className="project-stack">
                  {p.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
