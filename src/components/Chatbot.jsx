import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const presetPrompts = [
  { text: '💼 Maersk DBaaS Work', key: 'maersk' },
  { text: '🛰️ Satellite Research', key: 'research' },
  { text: '🐕 IoT Safety Patent', key: 'patent' },
  { text: '🎓 Master\'s Goals', key: 'masters' },
  { text: '✉️ Contact Details', key: 'contact' }
];

const knowledgeBase = {
  maersk: "At A.P. Moller Maersk, I work as an Associate Software Engineer (and previously as an Intern). My focus is on DBaaS automation. I built Day 0 and Day 1 workflows using GitHub Actions, Azure Logic Apps, and Azure Function Apps, which eliminated manual connectivity checks across 152 production and 250+ non-production databases. I also designed Grafana/Prometheus dashboards and implemented HammerDB load testing.",
  research: "I conducted research under Prof. Raju K George at the Indian Institute of Space and Technology (IIST). My work was at the intersection of ML and Control Theory. I modelled Linear Time-Invariant (LTI) systems for satellite orbital mechanics, generated synthetic trajectory datasets, and trained linear regression models to predict thrust force required for orbital path maintenance.",
  patent: "I hold a granted patent (Patent Office Journal No. 35/2025) for my 'Dog Safety & Alert System'. It's an IoT platform that tracks canine heart rates and sound patterns with embedded sensors, triggering real-time anomaly alerts with live GPS tracking. This project won 3rd Prize at a National-Level Expo!",
  masters: "I'm highly interested in joining a Master's program in Computer Science or Data Science. I want to delve deeper into MLOps, ML Systems, and high-performance cloud databases. With my experience building robust cloud automation at Maersk, combined with ML research at IIST and a granted patent, I am well-prepared to contribute to systems-focused labs.",
  contact: "You can email me at aditiashok148@gmail.com, call me at +91 6366882783, find me on LinkedIn (linkedin.com/in/aditi-ashok-8b5831228), or view my GitHub repositories (github.com/aditiashok55). You can also send a message via the form at the bottom of this page!",
  skills: "My tech stack includes:\n- Languages: Python, Go, JavaScript, SQL, HTML/CSS\n- Cloud & IaC: AWS, Azure, GCP, Terraform\n- MLOps & AI: MLflow, FastAPI, Docker, Prometheus, Grafana, GitHub Actions, MCP, XGBoost, TensorFlow\n- Databases: PostgreSQL, MySQL, Oracle DB"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Aditi's AI Twin. Ask me anything about my cloud/MLOps automation at Maersk, satellite orbital research, IoT patent, or my interest in Master's positions!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Listen for custom open-chatbot event
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpen);
    
    // Handle click outside to close drawer
    const handleClickOutside = (e) => {
      if (isOpen && chatWindowRef.current && !chatWindowRef.current.contains(e.target) && !e.target.closest('.chatbot-bubble')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('open-chatbot', handleOpen);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleBotResponse = (userInput) => {
    setIsTyping(true);

    setTimeout(() => {
      const cleanedInput = userInput.toLowerCase();
      let responseText = "";

      if (cleanedInput.includes('maersk') || cleanedInput.includes('dbaas') || cleanedInput.includes('work') || cleanedInput.includes('job') || cleanedInput.includes('company') || cleanedInput.includes('associate') || cleanedInput.includes('automation')) {
        responseText = knowledgeBase.maersk;
      } else if (cleanedInput.includes('research') || cleanedInput.includes('iist') || cleanedInput.includes('satellite') || cleanedInput.includes('orbit') || cleanedInput.includes('control') || cleanedInput.includes('trajectory')) {
        responseText = knowledgeBase.research;
      } else if (cleanedInput.includes('patent') || cleanedInput.includes('dog') || cleanedInput.includes('iot') || cleanedInput.includes('heart') || cleanedInput.includes('gps')) {
        responseText = knowledgeBase.patent;
      } else if (cleanedInput.includes('masters') || cleanedInput.includes('master') || cleanedInput.includes('grad') || cleanedInput.includes('university') || cleanedInput.includes('study') || cleanedInput.includes('studies') || cleanedInput.includes('advisors')) {
        responseText = knowledgeBase.masters;
      } else if (cleanedInput.includes('skills') || cleanedInput.includes('languages') || cleanedInput.includes('tech') || cleanedInput.includes('stack') || cleanedInput.includes('databases') || cleanedInput.includes('tools')) {
        responseText = knowledgeBase.skills;
      } else if (cleanedInput.includes('contact') || cleanedInput.includes('hire') || cleanedInput.includes('email') || cleanedInput.includes('phone') || cleanedInput.includes('linkedin') || cleanedInput.includes('github')) {
        responseText = knowledgeBase.contact;
      } else {
        responseText = "I'm not quite sure about that specific topic. Feel free to ask about my work at Maersk, my research on satellite mechanics, my granted patent, my tech stack, or why I am looking to pursue a Master's degree!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputText('');

    // Trigger AI response
    handleBotResponse(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputText);
    }
  };

  const handlePresetClick = (key) => {
    const promptMap = {
      maersk: "Tell me about your DBaaS automation work at Maersk.",
      research: "Explain your satellite control-theory research at IIST.",
      patent: "What is your patented Dog Safety System?",
      masters: "Why are you looking to apply for a Master's program?",
      contact: "How can I contact you?"
    };
    
    // Add user question
    setMessages(prev => [...prev, { sender: 'user', text: promptMap[key] }]);
    
    // Trigger response
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: knowledgeBase[key] }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Chat Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`chatbot-bubble ${isOpen ? 'bubble-active' : ''}`}
        aria-label="Open AI Chatbot"
      >
        <span className="bubble-ping" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Slide-out Chat Drawer */}
      <div ref={chatWindowRef} className={`chatbot-window ${isOpen ? 'chat-window-open' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar-info">
            <div className="chat-avatar">
              <span className="avatar-initials">AJ</span>
              <span className="status-dot online" />
            </div>
            <div>
              <h4 className="chat-bot-name">Aditi Ashok</h4>
              <p className="chat-bot-status">AI twin • Pitching Aditi</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="chat-close-btn" aria-label="Close Chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Message Panel */}
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-row ${msg.sender === 'user' ? 'row-user' : 'row-bot'}`}>
              {msg.sender === 'bot' && (
                <div className="msg-avatar">Aditi</div>
              )}
              <div className="msg-bubble">
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message-row row-bot">
              <div className="msg-avatar">Aditi</div>
              <div className="msg-bubble bubble-typing">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="chat-presets">
          {presetPrompts.map((preset) => (
            <button
              key={preset.key}
              onClick={() => handlePresetClick(preset.key)}
              className="preset-chip"
            >
              {preset.text}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask a question..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="chat-input"
          />
          <button 
            onClick={() => handleSendMessage(inputText)} 
            className="chat-send-btn"
            disabled={!inputText.trim()}
            aria-label="Send Message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
