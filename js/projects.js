function renderProjectLinkRows(project) {
    const rows = project.links && Array.isArray(project.links.rows) ? project.links.rows : [];
    const base = `projects.items.${project.id}.links`;

    return rows
        .filter((r) => r && r.href)
        .map((row) => {
            const label = window.I18n.t(`${base}.${row.labelKey}`);
            const icon = row.icon || 'fab fa-linkedin';
            const extra = row.btnClass ? ` ${row.btnClass}` : ' btn-small btn-linkedin';
            return `<a href="${row.href}" target="_blank" rel="noopener noreferrer" class="btn${extra}"><i class="${icon}" aria-hidden="true"></i><span>${label}</span></a>`;
        })
        .join('');
}

function renderProjectGallery(project, copy) {
    const images = Array.isArray(project.gallery) ? project.gallery.filter(Boolean) : [];
    if (!images.length) return '';

    const title = copy.title || '';
    return `<div class="project-gallery" role="group" aria-label="${title}">
        ${images
            .map(
                (src, index) =>
                    `<button type="button" class="project-gallery__thumb${index === 0 ? ' is-active' : ''}" data-src="${src}" aria-label="${title} — ${index + 1}">
                <img src="${src}" alt="" loading="lazy" onerror="this.closest('button')?.remove()">
            </button>`
            )
            .join('')}
    </div>`;
}

function bindProjectGallery() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.querySelectorAll('.project-gallery__thumb').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            const card = thumb.closest('.project-card');
            const mainImg = card && card.querySelector('.project-image > img');
            if (!mainImg || !thumb.dataset.src) return;

            mainImg.src = thumb.dataset.src;
            card.querySelectorAll('.project-gallery__thumb').forEach((btn) => btn.classList.remove('is-active'));
            thumb.classList.add('is-active');
        });
    });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid || !window.I18n.data.projects) return;

    const ui = window.I18n.data.projects.ui;

    projectsGrid.innerHTML = PROJECTS_CATALOG.filter((project) => !project.hidden).map((project) => {
        const copy = window.I18n.data.projects.items[project.id] || {};
        const hasImage = Boolean(project.image);
        const imageBlock = hasImage
            ? `<img src="${project.image}" alt="${copy.title || ''}" onerror="this.style.display='none'; this.nextElementSibling.classList.add('project-icon--visible');">`
            : '';

        const iconBlock = `<div class="project-icon ${hasImage ? '' : 'project-icon--visible'}"><i class="${project.icon}"></i></div>`;

        const period = copy.period ? `<p class="project-period">${copy.period}</p>` : '';
        const galleryBlock = renderProjectGallery(project, copy);

        const badges = [
            project.featured ? `<div class="featured-badge">${ui.featured}</div>` : '',
            project.wip ? `<div class="wip-badge">${ui.wip}</div>` : '',
            project.minor ? `<div class="minor-badge">${ui.minorStudent}</div>` : ''
        ]
            .filter(Boolean)
            .join('');

        const rowButtons = renderProjectLinkRows(project);
        const githubBtn =
            project.links && project.links.github
                ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-small btn-outline"><i class="fab fa-github" aria-hidden="true"></i><span>${ui.github}</span></a>`
                : '';
        const linksBlock =
            rowButtons || githubBtn
                ? `<div class="project-links project-links--wrap">
                    ${rowButtons}
                    ${githubBtn}
                </div>`
                : '';

        return `
        <div class="project-card ${project.featured ? 'featured' : ''}" data-project-id="${project.id}">
            <div class="project-image ${hasImage ? '' : 'project-image--placeholder'}">
                ${imageBlock}
                ${iconBlock}
                ${badges}
            </div>
            <div class="project-content">
                <h3>${copy.title || ''}</h3>
                ${period}
                <p>${copy.description || ''}</p>
                ${galleryBlock}
                <div class="project-tech">
                    ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                ${linksBlock}
            </div>
        </div>`;
    }).join('');

    bindProjectGallery();
}

window.addProject = function (newProject) {
    PROJECTS_CATALOG.push(newProject);
    renderProjects();
};

window.removeProject = function (projectId) {
    const index = PROJECTS_CATALOG.findIndex((p) => p.id === projectId);
    if (index > -1) {
        PROJECTS_CATALOG.splice(index, 1);
        renderProjects();
    }
};

window.updateProject = function (projectId, updates) {
    const project = PROJECTS_CATALOG.find((p) => p.id === projectId);
    if (project) {
        Object.assign(project, updates);
        renderProjects();
    }
};
