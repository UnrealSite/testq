// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('themeButton');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        button.textContent = '🌙';
    } else {
        body.classList.add('dark-theme');
        button.textContent = '☀️';
    }
}


    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all content articles
document.querySelectorAll('.content article').forEach(article => {
    observer.observe(article);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
});
