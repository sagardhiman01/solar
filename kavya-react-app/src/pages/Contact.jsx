import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="page-hero" style={{ background: 'var(--clr-bg-light)', padding: '8rem 0 4rem 0' }}>
        <div className="container">
          <h1 style={{ color: 'var(--clr-primary)' }}>Get a Free <span className="gradient-text-gold">Quote</span></h1>
          <p style={{ maxWidth: '600px', marginTop: '1rem' }}>Our team will visit your home for a free site survey and calculate your subsidy eligibility.</p>
        </div>
      </header>
      <ContactForm />
    </div>
  );
};

export default Contact;
