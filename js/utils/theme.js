// Theme management
export function setupThemeToggle() {
    const button = document.getElementById('themeButton');
    const theme = localStorage.getItem('theme') || 'light';
    
    applyTheme(theme);
    
    button.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function applyTheme(theme) {
    const button = document.getElementById('themeButton');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        button.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        button.textContent = '🌙';
    }
}