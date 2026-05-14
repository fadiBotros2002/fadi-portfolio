const VISIONMATE_VIDEO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_ai-laravel-react-ugcPost-7350148117985419264-oYoW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';
const VISIONMATE_TEXPO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_ai-accessibility-inclusion-share-7383510889888522240-FV1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';
const WAZEFNI_VIDEO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_aiapplication-laraveldeveloper-backenddevelopment-ugcPost-7343965385844547584-CTTu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';

const PROJECTS_DATA = [
    {
        id: 'visionmate',
        title: { ar: 'VisionMate', en: 'VisionMate' },
        period: { ar: 'فبراير – يونيو 2025 · مشروع تخرّج', en: 'February – June 2025 · Capstone' },
        description: {
            ar: 'منصة لدعم ذوي الإعاقة البصرية: Laravel وMySQL، React للمتطوعين، Filament للإدارة، تكامل AI وStripe للتبرعات. تمثيل الجامعة العربية الدولية في معرض دمشق الدولي (TEXPO).',
            en: 'Platform supporting people with visual impairments: Laravel & MySQL, React volunteer app, Filament admin, AI features and Stripe donations. Represented AIU at the Damascus International Fair (TEXPO).'
        },
        image: null,
        icon: 'fas fa-eye',
        technologies: ['Laravel', 'React', 'FilamentPHP', 'MySQL', 'Stripe', 'AI'],
        links: {
            rows: [
                {
                    href: VISIONMATE_VIDEO,
                    label: { ar: 'فيديو المشروع (LinkedIn)', en: 'Project video (LinkedIn)' },
                    icon: 'fab fa-linkedin',
                    btnClass: 'btn-small btn-linkedin'
                },
                {
                    href: VISIONMATE_TEXPO,
                    label: { ar: 'معرض دمشق الدولي · TEXPO', en: 'Damascus International Fair · TEXPO' },
                    icon: 'fab fa-linkedin',
                    btnClass: 'btn-small btn-linkedin-soft'
                }
            ],
            github: 'https://github.com/fadiBotros2002'
        },
        featured: true,
        wip: false,
        minor: false
    },
    {
        id: 'wazefni',
        title: { ar: 'Wazefni', en: 'Wazefni' },
        period: { ar: 'أكتوبر 2024 – يناير 2025 · مشروع جامعي', en: 'October 2024 – January 2025 · University project' },
        description: {
            ar: 'منصة وساطة توظيف مع ميزات AI لبناء السيرة واقتراح الوظائف، وتصفية المرشحين للشركات، واختبارات مهارات. تم العرض على LinkedIn.',
            en: 'Employment mediation app with AI-assisted CV building, job matching, employer-side candidate filtering, and skill tests. Shared on LinkedIn.'
        },
        image: null,
        icon: 'fas fa-briefcase',
        technologies: ['Laravel', 'MySQL', 'Blade', 'FilamentPHP', 'JMeter', 'AI'],
        links: {
            rows: [
                {
                    href: WAZEFNI_VIDEO,
                    label: { ar: 'فيديو المشروع (LinkedIn)', en: 'Project video (LinkedIn)' },
                    icon: 'fab fa-linkedin',
                    btnClass: 'btn-small btn-linkedin'
                }
            ],
            github: 'https://github.com/fadiBotros2002'
        },
        featured: true,
        wip: false,
        minor: false
    },
    {
        id: 'smart-expense',
        title: { ar: 'Smart Expense Tracker', en: 'Smart Expense Tracker' },
        period: { ar: 'قيد التطوير · عمل حر', en: 'In progress · freelance' },
        description: {
            ar: 'Laravel 12، Firebase للإشعارات، طوابير ومهام في الخلفية، طبقة خدمات وموارد API. لا يوجد مستودع GitHub عام حالياً.',
            en: 'Laravel 12, Firebase notifications, queued jobs, service layer and API resources. No public GitHub repo yet.'
        },
        image: null,
        icon: 'fas fa-wallet',
        technologies: ['Laravel 12', 'MySQL', 'Firebase', 'Queues'],
        links: { rows: [], github: null },
        featured: false,
        wip: true,
        minor: false
    },
    {
        id: 'proxmox-alerts',
        title: { ar: 'تنبيهات Proxmox عبر Telegram', en: 'Proxmox → Telegram alert system' },
        period: { ar: 'SAMWare-Cs · 2025', en: 'SAMWare-Cs · 2025' },
        description: {
            ar: 'أتمتة مراقبة تربط Proxmox API مع Telegram عبر n8n لإشعارات فورية عن حالة البنية.',
            en: 'Monitoring automation bridging the Proxmox API to Telegram via n8n for instant infrastructure alerts.'
        },
        image: null,
        icon: 'fas fa-bell',
        technologies: ['n8n', 'Proxmox API', 'Telegram'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'graduation-system',
        title: { ar: 'نظام إدارة التخرج', en: 'Graduation Management System' },
        period: { ar: 'فبراير 2026', en: 'February 2026' },
        description: {
            ar: 'مهمة طلابية صغيرة لأتمتة خطوات بسيطة متعلقة بالتخرج (ليس مشروعاً رئيسياً). Laravel وMySQL.',
            en: 'Small student assignment to automate a few graduation-related steps (not a flagship product). Laravel & MySQL.'
        },
        image: null,
        icon: 'fas fa-user-graduate',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        links: { rows: [], github: null },
        featured: false,
        wip: false,
        minor: true
    },
    {
        id: 'maestro',
        title: { ar: 'Maestro — متجر آلات موسيقية', en: 'Maestro — musical instruments store' },
        period: { ar: 'مايو – يونيو 2023', en: 'May – June 2023' },
        description: {
            ar: 'منصة كاملة مع CRUD على MySQL، مصادقة PHP آمنة، والتحقق من جانب العميل بـ JavaScript.',
            en: 'Full-stack store with MySQL CRUD, secure PHP authentication, and client-side JS validation.'
        },
        image: null,
        icon: 'fas fa-guitar',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'civil-registry',
        title: { ar: 'نظام السجل المدني', en: 'Civil Registry System' },
        period: { ar: 'أغسطس 2023', en: 'August 2023' },
        description: {
            ar: 'نظام CRUD آمن لإدارة السجلات المدنية والمصادقة على ASP.NET Web Forms وSQL Server.',
            en: 'Secure CRUD civil records management and authentication using ASP.NET Web Forms and SQL Server.'
        },
        image: null,
        icon: 'fas fa-id-card',
        technologies: ['ASP.NET Web Forms', 'C#', 'SQL Server'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    }
];

function renderProjectLinkRows(project, lang, ui) {
    const rows = project.links && Array.isArray(project.links.rows) ? project.links.rows : [];
    return rows
        .filter((r) => r && r.href)
        .map((row) => {
            const label = row.label[lang] || row.label.ar;
            const icon = row.icon || 'fab fa-linkedin';
            const extra = row.btnClass ? ` ${row.btnClass}` : ' btn-small btn-linkedin';
            return `<a href="${row.href}" target="_blank" rel="noopener noreferrer" class="btn${extra}"><i class="${icon}" aria-hidden="true"></i><span>${label}</span></a>`;
        })
        .join('');
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const currentLang = localStorage.getItem('language') || 'ar';

    const ui =
        currentLang === 'en'
            ? {
                  github: 'GitHub',
                  featured: 'Featured',
                  wip: 'In progress',
                  minorStudent: 'Student task'
              }
            : {
                  github: 'GitHub',
                  featured: 'مشروع بارز',
                  wip: 'قيد التطوير',
                  minorStudent: 'مهمة طلابية'
              };

    if (!projectsGrid) return;

    projectsGrid.innerHTML = PROJECTS_DATA.map((project) => {
        const hasImage = Boolean(project.image);
        const imageBlock = hasImage
            ? `<img src="${project.image}" alt="${project.title[currentLang]}" onerror="this.style.display='none'; this.nextElementSibling.classList.add('project-icon--visible');">`
            : '';

        const iconBlock = `<div class="project-icon ${hasImage ? '' : 'project-icon--visible'}"><i class="${project.icon}"></i></div>`;

        const period = project.period ? `<p class="project-period">${project.period[currentLang]}</p>` : '';

        const badges = [
            project.featured ? `<div class="featured-badge">${ui.featured}</div>` : '',
            project.wip ? `<div class="wip-badge">${ui.wip}</div>` : '',
            project.minor ? `<div class="minor-badge">${ui.minorStudent}</div>` : ''
        ]
            .filter(Boolean)
            .join('');

        const rowButtons = renderProjectLinkRows(project, currentLang, ui);
        const githubBtn =
            project.links && project.links.github
                ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-small btn-outline"><i class="fab fa-github" aria-hidden="true"></i><span>${ui.github}</span></a>`
                : '';

        return `
        <div class="project-card ${project.featured ? 'featured' : ''}" data-project-id="${project.id}">
            <div class="project-image ${hasImage ? '' : 'project-image--placeholder'}">
                ${imageBlock}
                ${iconBlock}
                ${badges}
            </div>
            <div class="project-content">
                <h3>${project.title[currentLang]}</h3>
                ${period}
                <p>${project.description[currentLang]}</p>
                <div class="project-tech">
                    ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links project-links--wrap">
                    ${rowButtons}
                    ${githubBtn}
                </div>
            </div>
        </div>`;
    }).join('');
}

window.addProject = function (newProject) {
    PROJECTS_DATA.push(newProject);
    renderProjects();
};

window.removeProject = function (projectId) {
    const index = PROJECTS_DATA.findIndex((p) => p.id === projectId);
    if (index > -1) {
        PROJECTS_DATA.splice(index, 1);
        renderProjects();
    }
};

window.updateProject = function (projectId, updates) {
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (project) {
        Object.assign(project, updates);
        renderProjects();
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS_DATA, renderProjects };
}
