import {THEME_CONFIG} from './config.js';

export function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    let initialTheme = 'light';
    if (savedTheme) {
        initialTheme = savedTheme;
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        initialTheme = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.style.setProperty('--accent-color-rgb', initialTheme === 'light' ? THEME_CONFIG.lightAccentRgb : THEME_CONFIG.darkAccentRgb);
    updateThemeIcon(initialTheme);
}

export function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.innerHTML = theme === 'dark' 
        ? `<i class="fa-solid fa-sun"></i>` 
        : `<i class="fa-solid fa-moon"></i>`;
}

export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.style.setProperty('--accent-color-rgb', newTheme === 'light' ? THEME_CONFIG.lightAccentRgb : THEME_CONFIG.darkAccentRgb);
    updateThemeIcon(newTheme);
}

// Make toggleTheme available globally for onclick handler
window.toggleTheme = toggleTheme;