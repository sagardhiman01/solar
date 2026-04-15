import React from 'react';
import { CloudRain, Sun, Zap } from 'lucide-react';

const Reliability = () => {
  return (
    <div className="reliability-page">
      <header className="page-hero" data-aos="fade-down" style={{ background: 'var(--clr-primary)', color: 'white', padding: '8rem 0 4rem 0' }}>
        <div className="container">
          <span style={{ color: '#C5A059', fontWeight: 800, letterSpacing: '2px' }}>25 YEAR ASSURANCE</span>
          <h1 style={{ color: 'white', marginTop: '1rem' }}>Designed for <span style={{ color: '#C5A059' }}>Longevity</span></h1>
          <p style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.8)', marginTop: '1.5rem' }}>Our modules are built to withstand the harshest environmental conditions across the Indian subcontinent.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="feature-card" data-aos="fade-right">
              <div className="icon-box green-lite" style={{ width: '80px', height: '80px', fontSize: '2rem' }}><CloudRain size={32} /></div>
              <h3 style={{ fontSize: '1.8rem', marginTop: '1.5rem' }}>Weather Resistance</h3>
              <p style={{ marginTop: '1rem' }}>IP68 rated junction boxes and high-quality EVA encapsulation provide maximum resistance against heavy Haridwar monsoons and high humidity.</p>
            </div>
            <div className="feature-card" data-aos="fade-left">
              <div className="icon-box blue-lite" style={{ width: '80px', height: '80px', fontSize: '2rem' }}><Sun size={32} /></div>
              <h3 style={{ fontSize: '1.8rem', marginTop: '1.5rem' }}>Low Degradation</h3>
              <p style={{ marginTop: '1rem' }}>N-Type TopCon technology ensures less than 1% degradation in the first year and more than 87.4% output after 30 years of operation.</p>
            </div>
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }} data-aos="zoom-in">
            <div style={{ background: 'var(--clr-bg-light)', padding: '4rem', borderRadius: '12px', border: '1px dashed var(--clr-accent)' }}>
              <h2 style={{ marginBottom: '2rem' }}>Extreme Testing Standards</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--clr-primary)', fontSize: '2rem' }}>5400 Pa</h4>
                  <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>SNOW LOAD</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--clr-primary)', fontSize: '2rem' }}>2400 Pa</h4>
                  <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>WIND LOAD</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--clr-primary)', fontSize: '2rem' }}>T4</h4>
                  <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>FIRE RATING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reliability;
