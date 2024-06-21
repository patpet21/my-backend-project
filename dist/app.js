document.addEventListener('DOMContentLoaded', function() {
    const Benefits = [
        { id: 1, name: 'MetaCubeSpace Origin', img: 'https://via.placeholder.com/300x150', link: 'https://example.com/benefits 1' },
        { id: 2, name: 'Mining Bitcoin Gratuito', img: 'https://via.placeholder.com/300x150', link: 'https://example.com/benefits 2' },
        { id: 3, name: 'Crypto For Beginners', img: 'https://via.placeholder.com/300x150', link: 'https://example.com/benefits 3' },
        // Aggiungi altri corsi come necessario
    ];

    const BenefitsContainer = document.querySelector('.Benefits');
    Benefits.forEach(benefits  => {
        const benefits Element = document.createElement('div');
        benefits Element.classList.add('benefits ');
        benefits Element.innerHTML = `
            <img src="${benefits .img}" alt="${benefits .name}">
            <h3>${benefits .name}</h3>
            <div class="buttons">
                <a href="${benefits .link}" target="_blank">Go to benefits </a>
                <a href="#">Another Button</a>
            </div>
        `;
        BenefitsContainer.appendChild(benefits Element);
    });

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Mostra la sezione Dashboard all'avvio
    showSection('dashboard');
});


