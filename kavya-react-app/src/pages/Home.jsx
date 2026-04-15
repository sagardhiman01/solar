import React from 'react';
import { ShieldCheck, PiggyBank, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero and Stats Banner are handled in Hero and App separately or inside here */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="zoom-in">
              <h2>5000+</h2>
              <p>FAMILIES POWERED</p>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
              <h2>₹85,800</h2>
              <p>MAX CASH SUBSIDY</p>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
              <h2>₹0</h2>
              <p>DOWN PAYMENT OPTIONS</p>
            </div>
            <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
              <h2>25Y</h2>
              <p>HOME WARRANTY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <span className="gradient-text-gold" style={{ fontWeight: 800, letterSpacing: '2px' }}>FOR YOUR HOUSEHOLD</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Why Haridwar Families Trust Us?</h2>
              <p style={{ margin: '2rem 0', color: 'var(--clr-text-light)' }}>
                We make going solar simple for you. From handling all government subsidy paperwork to installing the most durable panels on your roof, Kavya Solar is your neighborhood solar expert.
              </p>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ background: 'var(--clr-bg-light)', padding: '1.5rem', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon-box green-lite" style={{ width: '40px', height: '40px' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <span style={{ fontWeight: 700, color: 'var(--clr-primary)' }}>Authorized Subsidy Support</span>
                </div>
                <div style={{ background: 'var(--clr-bg-light)', padding: '1.5rem', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div className="icon-box blue-lite" style={{ width: '40px', height: '40px' }}>
                    <PiggyBank size={20} />
                  </div>
                  <span style={{ fontWeight: 700, color: 'var(--clr-primary)' }}>Zero-Interest Loan Options</span>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" style={{ position: 'relative' }}>
              <div style={{ background: '#fdfaf5', padding: '2rem', borderRadius: '12px', border: '1px solid #eee' }}>
                <h3 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--clr-accent)', display: 'inline-block' }}>Typical Home Savings</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'white', borderRadius: '8px' }}>
                    <span style={{ fontWeight: 600 }}>Current Monthly Bill</span>
                    <span style={{ color: '#e74c3c', fontWeight: 700 }}>₹4,500</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'var(--clr-primary)', color: 'white', borderRadius: '8px' }}>
                    <span style={{ fontWeight: 600 }}>Monthly Bill After Solar</span>
                    <span style={{ color: 'var(--clr-accent)', fontWeight: 800 }}>₹150</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-light)', marginTop: '1rem' }}>*Based on a standard 3kW household installation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding" style={{ background: 'var(--clr-bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ marginBottom: '3rem', color: 'var(--clr-text-light)', letterSpacing: '2px', fontSize: '1rem' }}>THE BRANDS WE INSTALL ON YOUR ROOF</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', opacity: 0.6, filter: 'grayscale(1)', flexWrap: 'wrap' }}>
            {['ADANI', 'WAAREE', 'TATA POWER', 'LUMINOUS'].map((brand) => (
              <h2 key={brand} style={{ fontWeight: 900, fontSize: '2rem' }}>{brand}</h2>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Choose Your Home Package</h2>
            <p>All packages include subsidy assistance, installation, and 5 years of free maintenance.</p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card" data-aos="fade-up" style={{ padding: 0, border: '2px solid #eee' }}>
              <div style={{ background: 'var(--clr-primary)', color: 'white', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: 'white', margin: 0 }}>3kW PACKAGE</h3>
                <p style={{ color: 'var(--clr-accent)', fontWeight: 800, fontSize: '1.1rem', marginTop: '0.5rem' }}>For Small Families</p>
              </div>
              <div style={{ padding: '2.5rem' }}>
                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><Check size={18} color="#C5A059" /> Save up to ₹3,500/Month</li>
                  <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><Check size={18} color="#C5A059" /> ₹78,000 Cash Subsidy</li>
                  <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><Check size={18} color="#C5A059" /> Runs AC, Fridge & Lights</li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>ENQUIRE NOW</Link>
              </div>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="100" style={{ padding: 0, border: '2px solid var(--clr-accent)', transform: 'scale(1.05)', zIndex: 2 }}>
              <div style={{ background: 'var(--clr-accent)', color: 'var(--clr-primary)', padding: '2rem', textAlign: 'center' }}>
                <span style={{ background: 'var(--clr-primary)', color: 'white', fontSize: '0.6rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 800, display: 'inline-block', marginBottom: '0.5rem' }}>BEST VALUE</span>
                <h3 style={{ color: 'var(--clr-primary)', margin: 0 }}>5kW PACKAGE</h3>
                <p style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem', marginTop: '0.5rem' }}>For Medium Families</p>
              </div>
              <div style={{ padding: '2.5rem', background: 'white' }}>
                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><Check size={18} color="#C5A059" /> Save up to ₹6,500/Month</li>
                  <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><Check size={18} color="#C5A059" /> Max Govt. Subsidy Approved</li>
                  <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.5rem' }}><Check size={18} color="#C5A059" /> 25 Years Panel Warranty</li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>ENQUIRE NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
