// Check for saved theme preference or use device preference
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        // Use device preference if no saved theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', initialTheme);
        updateThemeIcon(initialTheme);
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
}

// Update the icon based on current theme
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    
    if (theme === 'dark') {
        // Show sun icon for dark mode
        themeIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        // Show moon icon for light mode
        themeIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
}

// Initialize the theme when the page loads
document.addEventListener('DOMContentLoaded', setInitialTheme);