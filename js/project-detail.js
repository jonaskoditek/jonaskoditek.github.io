import { setInitialTheme } from './theme.js';
import { setFooterYear, getUrlParameter } from './utils.js';
import { projectsData } from './data/projects-data.js';

function buildKeyInfoHtml(keyInfo) {
    if (!keyInfo) return '';

    const createListItem = (label, value) => {
        if (!value) return '';
        if (Array.isArray(value)) {
            const itemsHtml = value.map(item => `<span class="key-list-item">${item}</span>`).join('');
            return `<li><strong>${label}:</strong> <span class="key-list">${itemsHtml}</span></li>`;
        } else {
            return `<li><strong>${label}:</strong> <span>${value}</span></li>`;
        }
    };

    return `
        <div class="project-key-info">
            <h3>Key Information</h3>
            <ul>
                ${createListItem("Role", keyInfo.role)}
                ${createListItem("Goal", keyInfo.goal)}
                ${createListItem("Skills", keyInfo.skills)}
                ${createListItem("Tech", keyInfo.technologies)}
                ${createListItem("Result", keyInfo.result)}
            </ul>
        </div>
    `;
}

function loadProjectDetails() {
    const projectId = getUrlParameter('id');
    const project = projectsData.find(p => p.id === projectId);
    const container = document.getElementById('project-content-wrapper');

    if (project) {
        document.title = project.title + " | Jonas Koditek";

        const heroImageHtml = project.image
            ? `<img src="${project.image}" alt="${project.title} hero image" class="project-hero-image">` 
            : '';

        const keyInfoHtml = buildKeyInfoHtml(project.keyInfo);

        const backButtonHtml = `
            <a href="index.html" class="back-button-bottom">
                <i class="fa-solid fa-arrow-left"></i> Back
            </a>`;

        container.innerHTML = `
            ${heroImageHtml}
            <p class="project-date">${project.date || 'PROJECT'}</p>
            <h1 class="project-main-title">${project.title}</h1>
            <p class="project-summary-text">${project.description}</p>
            ${keyInfoHtml}
            <div class="project-detail-content">
                ${project.detailContent}
                ${backButtonHtml}
            </div>`;
    } else {
        document.title = "Project Not Found";
        container.innerHTML = `
            <h1 class="project-main-title">Project Not Found</h1>
            <p class="project-summary-text">The project you're looking for doesn't seem to exist...</p>`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();
    setFooterYear();
    loadProjectDetails();
});