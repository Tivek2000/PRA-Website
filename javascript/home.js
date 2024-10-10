// Wacht tot de pagina is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer alle navigatieknoppen
    const navLinks = document.querySelectorAll('.nav-item a');

    // Voeg animatie toe voor elke knop
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)'; // Vergroot knop bij hover
            link.style.backgroundColor = '#004085'; // Donkerdere kleur bij hover
            link.style.transition = 'transform 0.3s ease, background-color 0.3s ease'; // Smooth transition
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)'; // Herstel oorspronkelijke grootte
            link.style.backgroundColor = '#0056b3'; // Herstel oorspronkelijke kleur
        });
    });

    // Voeg een animatie-effect toe aan de CTA-knop
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'scale(1.05)'; // Vergroot knop bij hover
            ctaButton.style.backgroundColor = '#218838'; // Donkerdere kleur bij hover
            ctaButton.style.transition = 'transform 0.3s ease, background-color 0.3s ease'; // Smooth transition
        });

        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'scale(1)'; // Herstel oorspronkelijke grootte
            ctaButton.style.backgroundColor = '#28a745'; // Herstel oorspronkelijke kleur
        });
    }

    // Lazy loading van afbeeldingen
    const images = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = (image) => {
        image.src = image.dataset.src;
        image.onload = () => image.classList.add('loaded');
    };

    images.forEach(image => {
        if (image.dataset.src) {
            lazyLoad(image);
        }
    });

    // Scroll animaties toevoegen
    document.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const homeSection = document.querySelector('.home-section');

        if (scrollTop > 100) {
            homeSection.classList.add('scrolled');
        } else {
            homeSection.classList.remove('scrolled');
        }
    });
});
