// Application Configuration
export const CONFIG = {
    // Language Configuration
    LANGUAGES: {
        ar: { name: 'العربية', dir: 'rtl' },
        en: { name: 'English', dir: 'ltr' }
    },
    DEFAULT_LANGUAGE: 'ar',
    
    // Theme Configuration (only light and dark)
    THEMES: {
        light: { name: 'light' },
        dark: { name: 'dark' }
    },
    DEFAULT_THEME: 'light',
    
    // Colors
    COLORS: {
        primary: '#1e3a8a',
        primaryLight: '#3b82f6',
        secondary: '#64748b',
        accent: '#f59e0b',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    },
    
    // Gradients
    GRADIENTS: {
        primary: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        secondary: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
        success: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
    },
    
    // Animation Durations
    ANIMATIONS: {
        fast: '0.2s',
        normal: '0.3s',
        slow: '0.5s',
        slower: '0.8s'
    },
    
    // Breakpoints
    BREAKPOINTS: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        large: '1200px'
    },
    
    // Social Links
    SOCIAL: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        instagram: '#'
    },
    
    // Contact Info
    CONTACT: {
        email: 'fadi@example.com',
        phone: '+962 7xxxxxxx',
        location: 'Jordan'
    },
    
    // Component Paths
    COMPONENTS: {
        navigation: 'components/navigation.html',
        hero: 'components/hero.html',
        about: 'components/about.html',
        skills: 'components/skills.html',
        projects: 'components/projects.html',
        contact: 'components/contact.html',
        footer: 'components/footer.html'
    },
    
    // Translation Paths
    TRANSLATIONS: {
        ar: 'assets/data/translations/ar.js',
        en: 'assets/data/translations/en.js'
    }
};
