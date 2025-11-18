import { projectsSummary } from './data/projects-data.js';
import { setInitialTheme } from './theme.js';
import { setFooterYear } from './utils.js';

// --- renderProjects function ---
function renderProjects(filterCategory = 'All') {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; 
    projectsSummary.forEach(project => {
        const isVisible = filterCategory === 'All' || project.category === filterCategory;
        
        if (isVisible) {
            const projectElement = document.createElement('a');
            projectElement.classList.add('project-card');
            projectElement.setAttribute('data-category', project.category);
            projectElement.setAttribute('data-id', project.id);
            projectElement.href = `project-detail.html?id=${project.id}`;
            
            projectElement.innerHTML = `
                <div class="project-summary">
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title} project" class="project-image">
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        
                        <span class="view-project-link">
                            View Project <i class="fa-solid fa-arrow-right"></i>
                        </span>

                    </div>
                </div>
            `;
            container.appendChild(projectElement);
        }
    });
}

// --- renderFilters ---
function renderFilters(initialFilter = 'All') {
    const container = document.getElementById('filter-container');
    const categories = new Set(projectsSummary.map(p => p.category));
    
    let buttonsHtml = `<button class="filter-button" data-filter="All">All (${projectsSummary.length})</button>`;
    categories.forEach(category => {
        const count = projectsSummary.filter(p => p.category === category).length;
        buttonsHtml += `<button class="filter-button" data-filter="${category}">${category} (${count})</button>`;
    });
    
    container.innerHTML = buttonsHtml;
    
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-button')) {
            const newCategory = e.target.getAttribute('data-filter');
            document.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            renderProjects(newCategory);
        }
    });
    
    const activeBtn = container.querySelector(`[data-filter="${initialFilter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        return initialFilter;
    } else {
        container.querySelector(`[data-filter="All"]`).classList.add('active');
        return 'All';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();
    setFooterYear();
    
    const initialFilter = renderFilters('All');
    renderProjects(initialFilter);
});