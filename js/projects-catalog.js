/** Project structure only — text lives in assets/i18n/{lang}.json */
const VISIONMATE_VIDEO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_ai-laravel-react-ugcPost-7350148117985419264-oYoW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';
const VISIONMATE_TEXPO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_ai-accessibility-inclusion-share-7383510889888522240-FV1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';
const WAZEFNI_VIDEO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_aiapplication-laraveldeveloper-backenddevelopment-ugcPost-7343965385844547584-CTTu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';

const PROJECTS_CATALOG = [
    {
        id: 'visionmate',
        icon: 'fas fa-eye',
        technologies: ['Laravel', 'React', 'FilamentPHP', 'MySQL', 'Stripe', 'AI'],
        links: {
            rows: [
                { href: VISIONMATE_VIDEO, labelKey: 'video', icon: 'fab fa-linkedin', btnClass: 'btn-small btn-linkedin' },
                { href: VISIONMATE_TEXPO, labelKey: 'texpo', icon: 'fab fa-linkedin', btnClass: 'btn-small btn-linkedin-soft' }
            ],
            github: 'https://github.com/fadiBotros2002'
        },
        featured: true,
        wip: false,
        minor: false
    },
    {
        id: 'wazefni',
        icon: 'fas fa-briefcase',
        technologies: ['Laravel', 'MySQL', 'Blade', 'FilamentPHP', 'JMeter', 'AI'],
        links: {
            rows: [{ href: WAZEFNI_VIDEO, labelKey: 'video', icon: 'fab fa-linkedin', btnClass: 'btn-small btn-linkedin' }],
            github: 'https://github.com/fadiBotros2002'
        },
        featured: true,
        wip: false,
        minor: false
    },
    {
        id: 'tawtheeq',
        icon: 'fas fa-envelope-open-text',
        image: 'assets/images/projects/tawtheeq-cover.png',
        gallery: [
            'assets/images/projects/tawtheeq-1.png',
            'assets/images/projects/tawtheeq-2.png',
            'assets/images/projects/tawtheeq-3.png',
            'assets/images/projects/tawtheeq-4.png'
        ],
        technologies: ['Laravel 12', 'MySQL', 'QR Codes' , 'Blade'],
        links: { rows: [], github: null },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'smart-expense',
        icon: 'fas fa-wallet',
        technologies: ['Laravel 12', 'MySQL', 'Firebase', 'Queues'],
        links: { rows: [], github: null },
        featured: false,
        wip: true,
        minor: false
    },
    {
        id: 'proxmox-alerts',
        icon: 'fas fa-bell',
        image: 'assets/images/projects/proxmox_telegram_alertSystem-1.png',
        gallery: ['assets/images/projects/TELEGRAMproxmox_telegram_alertSystem-2.png','assets/images/projects/proxmox_telegram_alertSystem-1.png'],
        technologies: ['n8n', 'Proxmox API', 'Telegram'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'graduation-system',
        icon: 'fas fa-user-graduate',
        technologies: ['PHP', 'Laravel', 'MySQL'],
        links: { rows: [], github: null },
        featured: false,
        wip: false,
        minor: true
    },
    {
        id: 'maestro',
        icon: 'fas fa-guitar',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'civil-registry',
        icon: 'fas fa-id-card',
        technologies: ['ASP.NET Web Forms', 'C#', 'SQL Server'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    }
];
