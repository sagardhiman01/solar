import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const Quality = () => {
  return (
    <div className="quality-page">
      <header className="page-hero" data-aos="fade-down" style={{ background: 'var(--clr-bg-light)', padding: '8rem 0 4rem 0' }}>
        <div className="container">
          <span style={{ color: '#C5A059', fontWeight: 800, letterSpacing: '2px' }}>YOUR ROOF IS SAFE</span>
          <h1 style={{ color: 'var(--clr-primary)', marginTop: '1rem' }}>Why Trust Us for <span style={{ color: '#C5A059' }}>Your Home?</span></h1>
          <p style={{ maxWidth: '700px', color: 'var(--clr-text-light)', marginTop: '1.5rem' }}>We understand that installing solar is a big decision. Here is why Haridwar homeowners choose Kavya Solar.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '5rem', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <div style={{ background: 'var(--clr-primary)', color: 'white', padding: '3rem', borderRadius: '12px' }}>
                <h3 style={{ color: 'white', marginBottom: '2rem' }}>Our Home Warranty</h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  {[
                    "25 Years Performance Warranty",
                    "12 Years Hardware Warranty",
                    "5 Years Free Service Visits",
                    "100% Subsidy Handling Included"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <Shield size={20} color="#C5A059" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Worry-Free Solar Installation</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--clr-text-light)' }}>Choosing Kavya Solar means zero stress for your family. We don't just "install and leave"—we treat your roof like our own. Our engineers ensure that your home's structure is protected and the solar system is optimized for max savings.</p>
              <p style={{ color: 'var(--clr-text-light)' }}>We use high-grade aluminum structures and high-efficiency panels that are tested for the Haridwar monsoon and heat, ensuring your investment stays safe for decades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--clr-primary)', color: 'white' }}>
        <div className="container">
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { title: "IEC", desc: "International Safety Tested" },
              { title: "BIS", desc: "Verified by Indian Standards" },
              { title: "MNRE", desc: "Govt. Approved Components" }
            ].map((stat, idx) => (
              <div key={idx} className="stat-item" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <h3 style={{ color: '#C5A059', fontSize: '2rem' }}>{stat.title}</h3>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
