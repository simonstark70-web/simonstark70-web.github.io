// ===== Kontakt Overlay Toggle =====
function toggleKontakt() {
    const overlay = document.getElementById('kontaktOverlay');
    overlay.classList.toggle('active');
    
    if (overlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// ===== Impressum Overlay Toggle =====
function toggleImpressum() {
    const overlay = document.getElementById('impressumOverlay');
    overlay.classList.toggle('active');
    
    if (overlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// ===== Datenschutz Overlay Toggle =====
function toggleDatenschutz() {
    const overlay = document.getElementById('datenschutzOverlay');
    overlay.classList.toggle('active');
    
    if (overlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Schließe Overlays beim Klick außerhalb des Contents
document.addEventListener('DOMContentLoaded', function() {
    const kontaktOverlay = document.getElementById('kontaktOverlay');
    const impressumOverlay = document.getElementById('impressumOverlay');
    const datenschutzOverlay = document.getElementById('datenschutzOverlay');
    
    if (kontaktOverlay) {
        kontaktOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                toggleKontakt();
            }
        });
    }
    
    if (impressumOverlay) {
        impressumOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                toggleImpressum();
            }
        });
    }
    
    if (datenschutzOverlay) {
        datenschutzOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                toggleDatenschutz();
            }
        });
    }
});

// Schließe Overlays mit ESC-Taste
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const kontaktOverlay = document.getElementById('kontaktOverlay');
        const impressumOverlay = document.getElementById('impressumOverlay');
        const datenschutzOverlay = document.getElementById('datenschutzOverlay');
        
        if (kontaktOverlay && kontaktOverlay.classList.contains('active')) {
            toggleKontakt();
        }
        if (impressumOverlay && impressumOverlay.classList.contains('active')) {
            toggleImpressum();
        }
        if (datenschutzOverlay && datenschutzOverlay.classList.contains('active')) {
            toggleDatenschutz();
        }
    }
});

console.log('Nordhessen-Fleisch Website geladen! ✓');
