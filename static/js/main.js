// Initialize Lucide icons
lucide.createIcons();

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

// Navbar stability and scroll effects
const nav = document.getElementById('main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.feature-card, .cta-inner, .contact-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
});

// Form handling (mock)
const solarForm = document.getElementById('solar-form');
if (solarForm) {
    solarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = solarForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.disabled = true;
        btn.textContent = 'Calculating Savings...';
        
        setTimeout(() => {
            btn.textContent = 'Quote Sent Successfully! ✅';
            btn.style.backgroundColor = '#22c55e';
            solarForm.reset();
            
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}

// Smooth scroll for nav links (already handled by CSS but JS refinement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
