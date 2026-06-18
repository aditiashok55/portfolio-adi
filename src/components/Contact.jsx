import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // If Netlify is handling it, we let the default submission proceed,
    // but we can also handle it via AJAX to provide a modern, smooth transition.
    e.preventDefault();
    
    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => console.error(error));
  };

  return (
    <section id="contact" className="contact-section theme-dark-section">
      <div className="container contact-container">
        {/* Top Header Row with Neon Line */}
        <div className="contact-header-row">
          <h1 className="contact-main-title">CONTACT</h1>
          <div className="contact-title-line">
            <div className="contact-line-accent" />
          </div>
        </div>

        {/* Content Row */}
        <div className="contact-content-grid">
          {/* Left Column: text and details */}
          <div className="contact-info-col">
            <h2 className="contact-sub-title">
              Looking to recruit or collaborate? Feel free to contact me.
            </h2>
            <div className="contact-details-block">
              <p className="contact-info-item location-item">Bangalore, Karnataka, India</p>
              <p className="contact-info-item email-item">
                <a href="mailto:aditiashok148@gmail.com">aditiashok148@gmail.com</a>
              </p>
            </div>
            
            {/* Social Icons row for footer */}
            <div className="contact-socials">
              <a href="https://github.com/aditiashok55/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aditi-ashok-8b5831228/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="form-success-message">
                <div className="success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn-success-reset">
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                {/* Netlify form identifiers */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-inputs-row">
                  <div className="form-field half-width">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>
                  <div className="form-field half-width">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="form-field full-width">
                  <textarea
                    name="message"
                    placeholder="Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="contact-textarea"
                    rows="6"
                  />
                </div>

                <button type="submit" className="contact-send-button">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Footer info */}
        <div className="contact-footer">
          <p>© {new Date().getFullYear()} Aditi Ashok Jangamakote. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
