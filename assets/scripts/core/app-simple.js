// Simple bundled version for browser compatibility
const CONFIG = {
    LANGUAGES: {
        ar: { name: 'العربية', dir: 'rtl' },
        en: { name: 'English', dir: 'ltr' }
    },
    DEFAULT_LANGUAGE: 'en',
    THEMES: {
        light: { name: 'light' },
        dark: { name: 'dark' }
    },
    DEFAULT_THEME: 'light',
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
    ANIMATIONS: {
        fast: '0.2s',
        normal: '0.3s',
        slow: '0.5s'
    },
    COMPONENTS: {
        navigation: 'components/navigation.html',
        hero: 'components/hero.html',
        about: 'components/about.html',
        skills: 'components/skills.html',
        projects: 'components/projects.html',
        contact: 'components/contact.html',
        footer: 'components/footer.html'
    }
};

// Simple translations
const TRANSLATIONS = {
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'عني',
            skills: 'مهارات',
            projects: 'مشاريع',
            contact: 'تواصل'
        },
        hero: {
            title: 'مرحباً، أنا فادي بطرس',
            subtitle: 'مطور ويب محترف',
            description: 'أتخصص في تطوير مواقع الويب الحديثة والجذابة باستخدام أحدث التقنيات والأدوات',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي'
        },
        about: {
            title: 'عني',
            description1: 'مطور ويب شغوف بالتكنولوجيا والإبداع. أسعى دائماً لتقديم حلول مبتكرة تلبي احتياجات العملاء وتتجاوز توقعاتهم. أمتلك خبرة واسعة في تطوير الواجهات الأمامية والخلفية.',
            description2: 'أؤمن بأهمية التعلم المستمر ومتابعة أحدث التقنيات في عالم تطوير الويب لضمان تقديم أفضل الحلول الممكنة.',
            experience: 'الخبرات',
            frontend: 'تطوير الواجهات الأمامية',
            backend: 'تطوير الواجهات الخلفية',
            uiux: 'تصميم واجهات المستخدم'
        },
        skills: {
            title: 'مهاراتي',
            html: { name: 'HTML5', description: 'لغة ترميز قوية لبناء هيكل المواقع' },
            css: { name: 'CSS3', description: 'تصميم وتنسيق المواقع بشكل احترافي' },
            javascript: { name: 'JavaScript', description: 'برمجة تفاعلات ديناميكية للمواقع' },
            react: { name: 'React', description: 'مكتبة قوية لبناء واجهات المستخدم' },
            nodejs: { name: 'Node.js', description: 'تطوير الخوادم والواجهات الخلفية' },
            database: { name: 'قواعد البيانات', 'description': 'إدارة وتصميم قواعد البيانات' }
        },
        projects: {
            title: 'مشاريعي',
            ecommerce: { title: 'متجر إلكتروني', description: 'متجر إلكتروني حديث مع نظام دفع آمن وواجهة مستخدم سهلة' },
            blog: { title: 'منصة تدوين', description: 'منصة تدوين متكاملة مع نظام إدارة محتوى متقدم' },
            dashboard: { title: 'لوحة تحكم إحصائيات', description: 'لوحة تحكم تفاعلية لعرض البيانات والإحصائيات بشكل مرئي' },
            viewProject: 'عرض المشروع',
            github: 'GitHub'
        },
        contact: {
            title: 'تواصل معي',
            subtitle: 'لنتواصل',
            description: 'أنا دائماً متحمس لبدء مشاريع جديدة والتعاون مع فرق مبدعة',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            location: 'الموقع',
            form: {
                name: 'الاسم الكامل',
                email: 'البريد الإلكتروني',
                subject: 'الموضوع',
                message: 'رسالتك',
                send: 'إرسال الرسالة',
                sending: 'جاري الإرسال...'
            },
            success: 'تم إرسال رسالتك بنجاح! سأرد عليك قريباً.',
            error: 'يرجى ملء جميع الحقول المطلوبة',
            invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح'
        },
        footer: {
            copyright: '© 2024 فادي بطرس. جميع الحقوق محفوظة.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            title: 'Hello, I\'m Fadi Botros',
            subtitle: 'Professional Web Developer',
            description: 'I specialize in developing modern and attractive websites using the latest technologies and tools',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me'
        },
        about: {
            title: 'About Me',
            description1: 'Passionate web developer with a love for technology and creativity. I always strive to provide innovative solutions that meet client needs and exceed their expectations.',
            description2: 'I believe in the importance of continuous learning and keeping up with the latest technologies.',
            experience: 'Experience',
            frontend: 'Frontend Development',
            backend: 'Backend Development',
            uiux: 'UI/UX Design'
        },
        skills: {
            title: 'My Skills',
            html: { name: 'HTML5', description: 'Powerful markup language for building website structure' },
            css: { name: 'CSS3', description: 'Professional website design and styling' },
            javascript: { name: 'JavaScript', description: 'Programming dynamic website interactions' },
            react: { name: 'React', description: 'Powerful library for building user interfaces' },
            nodejs: { name: 'Node.js', description: 'Server and backend development' },
            database: { name: 'Databases', description: 'Database management and design' }
        },
        projects: {
            title: 'My Projects',
            ecommerce: { title: 'E-commerce Store', description: 'Modern e-commerce store with secure payment system' },
            blog: { title: 'Blogging Platform', description: 'Complete blogging platform with advanced CMS' },
            dashboard: { title: 'Analytics Dashboard', description: 'Interactive dashboard for data visualization' },
            viewProject: 'View Project',
            github: 'GitHub'
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Let\'s Connect',
            description: 'I\'m always excited to start new projects and collaborate',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            form: {
                name: 'Full Name',
                email: 'Email Address',
                subject: 'Subject',
                message: 'Your Message',
                send: 'Send Message',
                sending: 'Sending...'
            },
            success: 'Your message has been sent successfully!',
            error: 'Please fill in all required fields',
            invalidEmail: 'Please enter a valid email address'
        },
        footer: {
            copyright: '© 2024 Fadi Botros. All rights reserved.'
        }
    }
};

class SimplePortfolioApp {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
        this.currentLanguage = localStorage.getItem('language') || CONFIG.DEFAULT_LANGUAGE;
        this.init();
    }
    
    async init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Set initial language
        this.setLanguage(this.currentLanguage);
        
        // Load components
        await this.loadComponents();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Setup animations
        this.setupAnimations();
        
        console.log('%c🚀 Welcome to Fadi Botros Portfolio!', `color: ${CONFIG.COLORS.primary}; font-size: 20px; font-weight: bold;`);
    }
    
    async loadComponents() {
        const components = [
            { id: 'navigation', file: CONFIG.COMPONENTS.navigation },
            { id: 'hero', file: CONFIG.COMPONENTS.hero },
            { id: 'about', file: CONFIG.COMPONENTS.about },
            { id: 'skills', file: CONFIG.COMPONENTS.skills },
            { id: 'projects', file: CONFIG.COMPONENTS.projects },
            { id: 'contact', file: CONFIG.COMPONENTS.contact },
            { id: 'footer', file: CONFIG.COMPONENTS.footer }
        ];
        
        for (const component of components) {
            try {
                const response = await fetch(component.file);
                const html = await response.text();
                const container = document.getElementById(component.id);
                if (container) {
                    container.innerHTML = html;
                }
            } catch (error) {
                console.error(`Error loading component ${component.id}:`, error);
            }
        }
        
        // Update content after components are loaded
        this.updateContent();
        
        // Update theme toggle after components are loaded
        this.updateThemeToggle();
    }
    
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Language toggle
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
        
        // Navigation
        this.setupNavigation();
        
        // Mobile menu
        this.setupMobileMenu();
        
        // Contact form
        this.setupContactForm();
    }
    
    setupNavigation() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = anchor.getAttribute('href');
                this.smoothScroll(target);
            });
        });
        
        // Active navigation
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }
    
    setupContactForm() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(contactForm);
            });
        }
    }
    
    handleContactForm(form) {
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const subject = form.querySelectorAll('input[type="text"]')[1].value;
        const message = form.querySelector('textarea').value;
        const translations = TRANSLATIONS[this.currentLanguage];
        
        if (!name || !email || !subject || !message) {
            this.showNotification(translations.contact.error, 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showNotification(translations.contact.invalidEmail, 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = translations.contact.form.sending;
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.showNotification(translations.contact.success, 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    setupAnimations() {
        // Skill bars
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    observer.unobserve(bar);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
        
        // Reveal animations
        const elements = document.querySelectorAll('.skill-card, .project-card, .about-text, .contact-info, .contact-form');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity ${CONFIG.ANIMATIONS.slow} ease, transform ${CONFIG.ANIMATIONS.slow} ease`;
        });
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(element => {
            revealObserver.observe(element);
        });
        
        // Typing effect
        const heroTitle = document.querySelector('[data-translate="hero-title"]');
        if (heroTitle) {
            const text = TRANSLATIONS[this.currentLanguage].hero.title;
            setTimeout(() => {
                this.typeWriter(heroTitle, text, 80);
            }, 500);
        }
    }
    
    // Theme methods
    setTheme(theme) {
        if (!CONFIG.THEMES[theme]) {
            theme = CONFIG.DEFAULT_THEME;
        }
        
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Set theme attribute
        document.documentElement.setAttribute('data-theme', theme);
        
        this.updateThemeToggle();
    }
    
    toggleTheme() {
        const themes = Object.keys(CONFIG.THEMES);
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        this.setTheme(nextTheme);
    }
    
    updateThemeToggle() {
        const themeToggle = document.querySelector('.theme-icon');
        if (themeToggle) {
            const iconMap = {
                light: 'fas fa-moon',
                dark: 'fas fa-sun'
            };
            themeToggle.className = iconMap[this.currentTheme] || iconMap.light;
        }
    }
    
    // Language methods
    setLanguage(language) {
        if (!CONFIG.LANGUAGES[language]) {
            language = CONFIG.DEFAULT_LANGUAGE;
        }
        
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        document.documentElement.dir = CONFIG.LANGUAGES[language].dir;
        this.updateContent();
    }
    
    toggleLanguage() {
        const languages = Object.keys(CONFIG.LANGUAGES);
        const currentIndex = languages.indexOf(this.currentLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        const nextLanguage = languages[nextIndex];
        this.setLanguage(nextLanguage);
    }
    
    updateContent() {
        const translations = TRANSLATIONS[this.currentLanguage];
        if (!translations) return;
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getNestedValue(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update all elements with data-translate-placeholder attribute
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getNestedValue(translations, key);
            if (translation) {
                element.placeholder = translation;
            }
        });
    }
    
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }
    
    // Utility methods
    smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform ${CONFIG.ANIMATIONS.normal} ease;
            max-width: 300px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        `;
        
        switch(type) {
            case 'success':
                notification.style.background = CONFIG.COLORS.success;
                break;
            case 'error':
                notification.style.background = CONFIG.COLORS.error;
                break;
            default:
                notification.style.background = CONFIG.COLORS.info;
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SimplePortfolioApp();
});
