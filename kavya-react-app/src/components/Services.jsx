import React from 'react';
import { Wallet, HandCoins, ShieldCheck, MapPin } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay, colorClass }) => (
    <div className="feature-card" data-aos="fade-up" data-aos-delay={delay}>
        <div className={`icon-box ${colorClass}`}>
            <Icon size={24} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Services = () => {
    const services = [
        {
            icon: Wallet,
            title: "Max Subsidy",
            description: "Direct assistance to get ₹85,800/- subsidy credited to your account.",
            delay: "100",
            colorClass: "blue-lite"
        },
        {
            icon: HandCoins,
            title: "Easy EMI",
            description: "Affordable EMI starting from just ₹1,100/- after subsidy benefits.",
            delay: "200",
            colorClass: "green-lite"
        },
        {
            icon: ShieldCheck,
            title: "100% Loan",
            description: "Get your solar system installed with 0% down payment and 100% financing.",
            delay: "300",
            colorClass: "blue-lite"
        },
        {
            icon: MapPin,
            title: "Local Support",
            description: "Located in Haridwar, providing prompt maintenance and installation support.",
            delay: "400",
            colorClass: "green-lite"
        }
    ];

    return (
        <section id="solutions" className="section-padding">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>Why Choose <span style={{ color: '#004B50' }}>Kavya Solar?</span></h2>
                    <p>Apply for Central Government Subsidy under the PM Surya Ghar Free Electricity Scheme.</p>
                </div>
                <div className="feature-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
