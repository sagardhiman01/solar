import React from 'react';
import { Sun, Globe, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <Sun size={28} color="#C5A059" />
              <span className="logo-text" style={{ color: '#fff', fontSize: '1.25rem' }}>KAVYA SOLAR</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Expert Solar Solutions for Haridwar and Uttarakhand. Helping households achieve energy independence.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#solutions">Our Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Subsidy Rules</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Visit Office</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              Buchdi Fatak, Dhandhera,<br />
              Haridwar, Uttarakhand.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p>&copy; 2026 Kavya Solar System. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: 'white' }}><Globe size={20} /></a>
              <a href="#" style={{ color: 'white' }}><MessageCircle size={20} /></a>
              <a href="tel:9536099664" style={{ color: 'white' }}><Phone size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
