// ===== Impressum Overlay Toggle =====
function toggleImpressum() {
    const overlay = document.getElementById('impressumOverlay');
    overlay.classList.toggle('active');
    
    // Verhindere Scrollen im Hintergrund wenn Overlay offen ist
    if (overlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Schließe Overlay beim Klick außerhalb des Contents
document.getElementById('impressumOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        toggleImpressum();
    }
});

// Schließe Overlay mit ESC-Taste
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('impressumOverlay');
        if (overlay.classList.contains('active')) {
            toggleImpressum();
        }
    }
});

// ===== Telefon Click Tracking (Optional) =====
const phoneButton = document.querySelector('.phone-button');
if (phoneButton) {
    phoneButton.addEventListener('click', function() {
        console.log('Telefon-Button geklickt - Call to Action erfolgreich!');
        // Hier könnten Sie Analytics Events tracken, z.B.:
        // gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'phone_call' });
    });
}

// ===== Smooth Scroll Effect für Footer =====
window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        footer.style.opacity = '1';
    }
});

// ===== Animation on Scroll (IntersectionObserver) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Beobachte alle Contact Cards für Fade-in Effekt
document.querySelectorAll('.contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    fadeInObserver.observe(card);
});

console.log('Nordhessen-Fleisch Website geladen! ✓');
