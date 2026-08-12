/** Project structure only — text lives in assets/i18n/{lang}.json
 *  group: 'odoo' | 'software' — rendered in separate grids on the projects section
 */
const VISIONMATE_VIDEO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_ai-laravel-react-ugcPost-7350148117985419264-oYoW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';
const VISIONMATE_TEXPO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_ai-accessibility-inclusion-share-7383510889888522240-FV1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';
const WAZEFNI_VIDEO =
    'https://www.linkedin.com/posts/fadi-botros-069668276_aiapplication-laraveldeveloper-backenddevelopment-ugcPost-7343965385844547584-CTTu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENfhFEBiusNNhhDVf0cyQcurtykDfRsIHs';

const PROJECTS_CATALOG = [
    /* ——— Odoo ——— */
    {
        id: 'odoo-food-wms',
        group: 'odoo',
        icon: 'fas fa-warehouse',
        image: '/assets/images/projects/odoo/food-wms/cover.png',
        gallery: [
            '/assets/images/projects/odoo/food-wms/cover.png',
            '/assets/images/projects/odoo/food-wms/1.png',
            '/assets/images/projects/odoo/food-wms/2.png',
            '/assets/images/projects/odoo/food-wms/3.png',
            '/assets/images/projects/odoo/food-wms/4.png',
            '/assets/images/projects/odoo/food-wms/5.png'
        ],
        technologies: ['Odoo 19', 'Inventory', 'Purchase', 'Sales', 'Lots'],
        links: { rows: [], github: null },
        featured: true,
        wip: false,
        minor: false
    },
    {
        id: 'odoo-kds',
        group: 'odoo',
        icon: 'fas fa-utensils',
        image: '/assets/images/projects/odoo/kds/cover.png',
        gallery: [
            '/assets/images/projects/odoo/kds/cover.png',
            '/assets/images/projects/odoo/kds/1.png',
            '/assets/images/projects/odoo/kds/2.png',
            '/assets/images/projects/odoo/kds/3.png',
            '/assets/images/projects/odoo/kds/4.png'
        ],
        technologies: ['Odoo 19', 'Python', 'OWL', 'POS', 'REST API'],
        links: { rows: [], github: null },
        featured: true,
        wip: false,
        minor: false
    },

    /* ——— Software & automation (CV + keep extras not on CV) ——— */
    {
        id: 'visionmate',
        group: 'software',
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
        group: 'software',
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
        group: 'software',
        icon: 'fas fa-envelope-open-text',
        image: '/assets/images/projects/tawtheeq-cover.png',
        gallery: [
            '/assets/images/projects/tawtheeq-1.png',
            '/assets/images/projects/tawtheeq-2.png',
            '/assets/images/projects/tawtheeq-3.png',
            '/assets/images/projects/tawtheeq-4.png'
        ],
        technologies: ['Laravel 12', 'MySQL', 'QR Codes', 'Blade'],
        links: { rows: [], github: null },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'smart-expense',
        group: 'software',
        icon: 'fas fa-wallet',
        technologies: ['Laravel 12', 'MySQL', 'Firebase', 'Queues'],
        links: { rows: [], github: null },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'graduation-system',
        group: 'software',
        icon: 'fas fa-user-graduate',
        image: '/assets/images/projects/gs/gs-1.png',
        gallery: [
            '/assets/images/projects/gs/gs-2.png',
            '/assets/images/projects/gs/gs-3.png',
            '/assets/images/projects/gs/gs-4.png',
            '/assets/images/projects/gs/gs-5.png',
            '/assets/images/projects/gs/gs-6.png'
        ],
        technologies: ['PHP', 'Laravel', 'MySQL'],
        links: { rows: [], github: null },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'proxmox-alerts',
        group: 'software',
        icon: 'fas fa-bell',
        image: '/assets/images/projects/proxmox_telegram_alertSystem-1.png',
        gallery: [
            '/assets/images/projects/TELEGRAMproxmox_telegram_alertSystem-2.png',
            '/assets/images/projects/proxmox_telegram_alertSystem-1.png'
        ],
        technologies: ['n8n', 'Proxmox API', 'Telegram'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    },
    {
        id: 'civil-registry',
        group: 'software',
        icon: 'fas fa-id-card',
        technologies: ['ASP.NET Web Forms', 'C#', 'SQL Server'],
        links: { rows: [], github: 'https://github.com/fadiBotros2002' },
        featured: false,
        wip: false,
        minor: false
    }
];
