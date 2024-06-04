document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { id: 1, name: 'MetaCubeSpace Origin', img: 'https://via.placeholder.com/300x150', link: 'https://example.com/course1' },
        { id: 2, name: 'Mining Bitcoin Gratuito', img: 'https://via.placeholder.com/300x150', link: 'https://example.com/course2' },
        { id: 3, name: 'Crypto For Beginners', img: 'https://via.placeholder.com/300x150', link: 'https://example.com/course3' },
        // Aggiungi altri corsi come necessario
    ];

    const coursesContainer = document.querySelector('.courses');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <img src="${course.img}" alt="${course.name}">
            <h3>${course.name}</h3>
            <div class="buttons">
                <a href="${course.link}" target="_blank">Go to Course</a>
                <a href="#">Another Button</a>
            </div>
        `;
        coursesContainer.appendChild(courseElement);
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


