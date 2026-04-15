import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <span className="badge-mini">PM SURYA GHAR AUTHORIZED</span>
          <span className="badge-mini secondary">ZERO BILLS FOR HOME</span>
        </div>
      </div>
      
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''} style={{ top: isScrolled ? '0' : '40px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.8rem' }}>☀️</span>
            <span className="logo-text" style={{ color: isScrolled ? '#004B50' : '#fff', fontSize: '1.5rem', fontWeight: 800 }}>
              KAVYA <span className="gradient-text-gold">SOLAR</span>
            </span>
          </Link>

          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            
            <li className="has-mega">
              <Link to="#">WHY GO SOLAR? <ChevronDown size={14} style={{ display: 'inline-block' }} /></Link>
              {/* Mega menu placeholder - simplified for React for now */}
            </li>

            <li className="has-mega">
              <Link to="/products">PACKAGES <ChevronDown size={14} style={{ display: 'inline-block' }} /></Link>
            </li>

            <li><Link to="/news">SUBSIDY GUIDE</Link></li>
            <li><Link to="/media">INSTALLATIONS</Link></li>
            <li>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', color: 'white' }}>
                GET FREE QUOTE
              </Link>
            </li>
          </ul>

          <div className="mobile-menu-btn" style={{ display: 'none' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
