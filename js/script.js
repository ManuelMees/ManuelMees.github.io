// JavaScript for interactions: mobile nav, smooth scroll, and contact form

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('open');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            if (siteNav) siteNav.classList.remove('open');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form (demo-only) - show a success message
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // simple validation
        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = 'Please complete all fields.';
            return;
        }

        // Simulate send
        formStatus.textContent = 'Sending message...';
        setTimeout(() => {
            contactForm.reset();
            formStatus.textContent = 'Thanks — your message has been sent (demo).';
        }, 900);
    });
}
