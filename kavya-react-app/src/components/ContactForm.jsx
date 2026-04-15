import React, { useState } from 'react';
import axios from 'axios';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await axios.post('/api/contact.php', formData);
            if (response.data.status === 'success') {
                setStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
                setFormData({ name: '', phone: '' });
            } else {
                setStatus({ type: 'error', message: response.data.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <div data-aos="fade-right">
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready for Free <span style={{ color: '#C5A059' }}>Electricity?</span></h2>
                        <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: '#666' }}>Visit us at our office or call now for a free site survey and subsidy application.</p>
                        
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="icon-box blue-lite"><MapPin /></div>
                                <div>
                                    <h4 style={{ color: '#C5A059' }}>Location</h4>
                                    <p>Buchdi Fatak, Dhandhera - Haridwar (U.K.)</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="icon-box green-lite"><Mail /></div>
                                <div>
                                    <h4 style={{ color: '#C5A059' }}>Email</h4>
                                    <p>kavyasolarsystem@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div className="icon-box blue-lite"><Phone /></div>
                                <div>
                                    <h4 style={{ color: '#C5A059' }}>Phone</h4>
                                    <p>+91 9536099664</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form" data-aos="fade-left">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    required 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="987xxxxxxx" 
                                    required 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }} disabled={loading}>
                                {loading ? 'Sending...' : <>Apply Now <Send size={18} /></>}
                            </button>
                            
                            {status.message && (
                                <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '4px', background: status.type === 'success' ? '#e6fffa' : '#fff5f5', color: status.type === 'success' ? '#2c7a7b' : '#c53030', textAlign: 'center' }}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
