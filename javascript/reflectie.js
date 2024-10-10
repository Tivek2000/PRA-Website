// Selecteer alle navigatieknoppen
const navLinks = document.querySelectorAll('.nav-item a');

// Voeg een klik-eventlistener toe aan elke knop
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Voeg een actieve klasse toe aan de geklikte knop
        navLinks.forEach(btn => btn.classList.remove('active'));
        link.classList.add('active');

        // Verwijder de actieve klasse na een korte tijd (om de animatie te zien)
        setTimeout(() => {
            link.classList.remove('active');
        }, 300); // 300 ms is de tijdsduur van de animatie
    });
});
