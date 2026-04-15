import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="hero" style={{ 
      backgroundImage: "url('/static/assets/hero-solar.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      minHeight: '85vh'
    }}>
      <div className="hero-video-overlay" style={{ background: 'linear-gradient(to right, rgba(0, 75, 80, 0.9), transparent)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content" data-aos="fade-up">
          <h1 style={{ fontSize: '4rem', color: 'white', fontWeight: 800, lineHeight: 1.1 }}>
            Zero Electricity Bills <span className="gradient-text-gold">for Your Home</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '2rem 0', opacity: 0.9, color: 'white' }}>
            Switch to clean energy today and save up to ₹1,00,000/- every year on electricity. Haridwar's most trusted partner for PM Surya Ghar Muft Bijli Yojana.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/contact" className="btn btn-primary-lite" style={{ padding: '1rem 2rem' }}>
              CHECK SUBSIDY ELIGIBILITY
            </Link>
            <Link to="/products" className="btn btn-primary" style={{ background: 'transparent', border: '1px solid white', padding: '1rem 2rem' }}>
              SEE HOME PACKAGES
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
