import React from 'react';
import './About.css';

export default function About() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Go', 'JavaScript', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'Frontend (Working Knowledge)',
      skills: ['React', 'JavaScript (ES6+)', 'HTML/CSS', 'Vite'],
    },
    {
      title: 'Cloud & IaC',
      skills: ['AWS (RDS, EC2, VPC, S3)', 'Azure (VM, DBs, Storage, Network, LogicApp, Function Apps)', 'GCP', 'Terraform', 'Microservices', 'REST APIs'],
    },
    {
      title: 'MLOps & AI',
      skills: ['MLflow', 'FastAPI', 'Docker', 'Prometheus', 'Grafana', 'GitHub Actions', 'MCP (Model Context Protocol)', 'XGBoost', 'TensorFlow'],
    },
    {
      title: 'Databases & Tools',
      skills: ['PostgreSQL', 'MySQL', 'Oracle DB', 'HammerDB', 'SonarQube'],
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-desc">About Me</h2>
          <h1 className="section-main-title">Academic Foundation meets Enterprise Scale.</h1>
        </div>

        <div className="bento-grid about-bento">
          {/* Bio Card */}
          <div className="bento-card bio-card span-col-2">
          <div className="card-tag">Profile</div>
            <h3 className="card-title">Cloud and MLOps Engineer</h3>
            <p className="card-text">
              I work at the intersection of cloud infrastructure and ML systems — building automation, 
              monitoring, and backend microservices architecture that keep production environments reliable. At A.P. Moller 
              Maersk, I've built Day 0/1 automation and a FastAPI monitoring backend for a DBaaS platform 
              spanning 150+ production databases across AWS, Azure, and GCP. Outside work, I build 
              end-to-end MLOps pipelines — from model training to deployment and observability.
            </p>
            <p className="card-text">
              My research foundation includes modelling state-space trajectories for satellite orbital 
              mechanics at IIST, alongside designing embedded systems for real-time monitoring. I'm 
              looking for roles with end-to-end technical ownership — across infrastructure, backend, and ML.
            </p>
            <div className="bio-footer-badges">
              <span className="footer-badge">Maersk DBaaS</span>
              <span className="footer-badge">IIST Research</span>
              <span className="footer-badge">Multi-Cloud</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="bento-card education-card">
            <div className="card-tag">Education</div>
            <h3 className="card-title">B.E. Honours</h3>
            <p className="education-major">CS Eng. (Data Science)</p>
            <p className="education-school">RNS Institute of Technology, VTU</p>
            <div className="education-cgpa">
              <span className="cgpa-num">9.13</span>
              <span className="cgpa-label">CGPA</span>
            </div>
            <p className="education-duration">Class of 2021 – 2025</p>
          </div>

          {/* Patent Card */}
          <div className="bento-card patent-card">
            <div className="card-tag">Innovation</div>
            <h3 className="card-title">Granted Patent</h3>
            <p className="patent-name">Dog Safety & Alert System</p>
            <p className="patent-journal">Patent Office Journal No. 35/2025</p>
            <p className="card-text small-text">
              An IoT platform tracking canine heart rates and sound patterns via embedded sensors, triggering real-time anomaly alerts with live GPS tracking.
            </p>
            <div className="patent-badge">3rd Place @ National Expo</div>
          </div>

          {/* Skills Card */}
          <div className="bento-card skills-card span-col-2">
            <div className="card-tag">Core Capabilities</div>
            <h3 className="card-title">Technical Stack</h3>
            <div className="skills-groups">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="skills-group">
                  <h4 className="skills-group-title">{cat.title}</h4>
                  <div className="skills-list">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bento-card skills-card span-col-2">
            <div className="card-tag">Recognitions</div>
            <h3 className="card-title">Certifications & Awards</h3>
            <ul className="certs-list">
              <li>
                <span className="cert-title">Google Cloud Computing</span>
                <span className="cert-sub">NPTEL / IIT Madras • Top 1%</span>
              </li>
              <li>
                <span className="cert-title">Edge Computing</span>
                <span className="cert-sub">NPTEL • Top 5%</span>
              </li>
              <li>
                <span className="cert-title">NPTEL Super Star</span>
                <span className="cert-sub">Top performer across 3 subjects</span>
              </li>
              <li>
                <span className="cert-title">Microsoft Azure Fundamentals</span>
                <span className="cert-sub">AZ-900 Certification</span>
              </li>
              <li>
                <span className="cert-title">AWS Cloud Foundations</span>
                <span className="cert-sub">AWS Certification</span>
              </li>
              <li>
                <span className="cert-title">Supervised Machine Learning: Regression and Classification</span>
                <span className="cert-sub">DeepLearning.AI</span>
              </li>
              <li>
                <span className="cert-title">Introduction to Large Language Models</span>
                <span className="cert-sub">NPTEL</span>
              </li>
            </ul>
          </div>
          
          {/* More about me */}
          <div className="bento-card certifications-card">
            <div className="card-tag">Beyond the Code</div>
            <h3 className="card-title">Creative Stack</h3>
            <p>
              I  run marathons — long-distance running has taught me patience, 
              consistency, and how to push through plateaus, lessons that translate 
              well into debugging gnarly production systems. I also write personal essays and post my art work 
              on <strong><a href="https://substack.com/@adi5533">Substack</a></strong>, when I'm not writing Terraform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
