// Simple bundled version for browser compatibility
console.log('app.js file started executing');

const CONFIG = {
    LANGUAGES: {
        ar: { name: 'العربية', dir: 'rtl' },
        en: { name: 'English', dir: 'ltr' }
    },
    DEFAULT_LANGUAGE: 'ar',
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
    }
};

const TRANSLATIONS = {
    ar: {
        nav: {
            home: 'الرئيسية',
            about: 'نبذة',
            experience: 'الخبرة',
            skills: 'مهارات',
            projects: 'مشاريع',
            linkedin: 'LinkedIn',
            contact: 'تواصل'
        },
        hero: {
            title: 'مرحباً، أنا فادي سمير بطرس',
            subtitle: 'مهندس برمجيات — Backend (Laravel)',
            description:
                'أركز على بناء APIs موثوقة، لوحات إدارة بـ Filament، وأتمتة سير العمل عبر n8n، مع أساس قوي في الواجهات (HTML/CSS/JS وBlade وتجربة عملية في React وVue).',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي',
            linkedin: 'ملفي على LinkedIn',
            emailCta: 'إرسال بريد',
            statProjects: 'مشاريع مختارة',
            statYears: 'سنتان خبرة عملية',
            statDegree: 'تخرج البكالوريوس'
        },
        about: {
            title: 'نبذة',
            description1:
                'مهندس برمجيات متحمس، أتخصص في تطوير الـ Backend باستخدام PHP وLaravel، مع خبرة قوية في أتمتة سير العمل عبر n8n، وبناء APIs ولوحات إدارة باستخدام FilamentPHP.',
            description2:
                'لدي أساس متين في الواجهات (HTML وCSS وJavaScript وBlade) وتجربة عملية في React وVue، وأعمل ضمن ممارسات MVC وتصميم RESTful والأحداث والقوائم والتكامل مع بوابات الدفع مثل Stripe.',
            location: 'دمشق، سوريا',
            cardTitle: 'ملخص سريع',
            factFocus: 'التركيز',
            factEdu: 'التعليم',
            factLang: 'اللغات',
            h1: 'CI/CD عبر GitHub Actions · Docker · Linux (Ubuntu)',
            h2: 'افتراضية: Proxmox وVMware ESXi',
            h3: 'MySQL (فهرسة وتحسين) وSQL Server واختبارات تحميل بـ JMeter'
        },
        skills: {
            title: 'المهارات الأساسية',
            g1Title: 'لغات وإطارات',
            g1Hint: 'طبقة التطبيق والواجهات الخلفية',
            g2Title: 'أتمتة وبنية تحتية',
            g2Hint: 'تشغيل، حاويات، وبيئات إنتاجية',
            g3Title: 'قواعد البيانات والأداء',
            g3Hint: 'موثوقية البيانات واختبار التحميل',
            g4Title: 'أدوات ومفاهيم',
            g4Hint: 'من التصميم إلى الإطلاق',
            g5Title: 'نشر الخوادم',
            g5Hint: 'بيئات استضافة عملت عليها'
        },
        projects: {
            title: 'مشاريع مختارة',
            viewProject: 'عرض المشروع',
            github: 'GitHub'
        },
        contact: {
            title: 'تواصل معي',
            subtitle: 'لنتواصل',
            subtitleHint: 'اختر الطريقة المناسبة لك للتواصل',
            description: 'جاهز للتعاون على منتجات Laravel وواجهات API وأتمتة العمليات.',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            location: 'الموقع',
            copy: 'نسخ',
            map: 'الخريطة',
            socialTitle: 'روابط مهنية',
            social: {
                github: 'GitHub',
                linkedin: 'LinkedIn',
                twitter: 'Twitter',
                instagram: 'Instagram'
            }
        },
        footer: {
            copyright: '© 2026 فادي سمير بطرس.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'Profile',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            linkedin: 'LinkedIn',
            contact: 'Contact'
        },
        hero: {
            title: 'Hello, I\'m Fadi Sameer Botros',
            subtitle: 'Software engineer — Backend (Laravel)',
            description:
                'I build reliable APIs and Filament admin experiences, automate workflows with n8n, and ship solid foundations in HTML/CSS/JS and Blade with hands-on React/Vue work.',
            viewProjects: 'View projects',
            contactMe: 'Contact me',
            linkedin: 'LinkedIn profile',
            emailCta: 'Email me',
            statProjects: 'Highlighted builds',
            statYears: 'Two years of hands-on work',
            statDegree: 'B.Sc. graduation year'
        },
        about: {
            title: 'Profile',
            description1:
                'Motivated software engineer focused on backend development with PHP/Laravel, workflow automation using n8n, and admin systems with FilamentPHP.',
            description2:
                'Strong fundamentals in HTML, CSS, JavaScript, and Blade, with practical experience in React/Vue, applying MVC, RESTful design, events, queues, and Stripe integrations.',
            location: 'Damascus, Syria',
            cardTitle: 'At a glance',
            factFocus: 'Focus',
            factEdu: 'Education',
            factLang: 'Languages',
            h1: 'CI/CD with GitHub Actions · Docker · Linux (Ubuntu)',
            h2: 'Virtualization: Proxmox & VMware ESXi',
            h3: 'MySQL (indexing & tuning), SQL Server, and JMeter load testing'
        },
        skills: {
            title: 'Core skills',
            g1Title: 'Languages & frameworks',
            g1Hint: 'Application and backend layers',
            g2Title: 'Automation & infrastructure',
            g2Hint: 'Operations, containers, production environments',
            g3Title: 'Databases & performance',
            g3Hint: 'Data reliability and load testing',
            g4Title: 'Tools & concepts',
            g4Hint: 'From design to release',
            g5Title: 'Server deployment',
            g5Hint: 'Hosting platforms I have used'
        },
        projects: {
            title: 'Selected projects',
            viewProject: 'View project',
            github: 'GitHub'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Let\'s connect',
            subtitleHint: 'Pick the channel that works best for you',
            description: 'Open to collaborating on Laravel products, APIs, and automation.',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            copy: 'Copy',
            map: 'Map',
            socialTitle: 'Professional links',
            social: {
                github: 'GitHub',
                linkedin: 'LinkedIn',
                twitter: 'Twitter',
                instagram: 'Instagram'
            }
        },
        footer: {
            copyright: '© 2026 Fadi Sameer Botros.'
        }
    }
};

class PortfolioApp {
    constructor() {
        console.log('PortfolioApp constructor called');
        this.init();
    }
    
    init() {
        console.log('PortfolioApp init called');
        this.setupInitialSettings();
        this.setupEventListeners();
        this.setupAnimations();
    }
    
    setupInitialSettings() {
        const currentLang = localStorage.getItem('language') || CONFIG.DEFAULT_LANGUAGE;
        this.setLanguage(currentLang);
        
        const currentTheme = localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
        this.setTheme(currentTheme);
        
        document.body.style.opacity = '0';
        document.body.style.transition = `opacity ${CONFIG.ANIMATIONS.normal} ease`;
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    setupEventListeners() {
        console.log('Setting up event listeners...');
        this.setupMobileNav();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupScrollEffects();
        this.setupThemeToggle();
        this.setupLanguageToggle();
        console.log('Event listeners setup completed');
        
        // Initialize projects after setup
        setTimeout(() => {
            if (typeof renderProjects === 'function') {
                renderProjects();
            }
        }, 100);
    }
    
    setupMobileNav() {
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
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = anchor.getAttribute('href');
                this.smoothScroll(target);
            });
        });
    }
    
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
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
    
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                const currentTheme = this.getCurrentTheme();
                if (window.scrollY > 50) {
                    if (currentTheme === 'dark') {
                        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                    } else {
                        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    }
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    // Reset to CSS variable value
                    navbar.style.background = '';
                    navbar.style.boxShadow = '';
                }
            }
        });
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            
            if (hero && heroContent && scrolled < 600) {
                // Only apply parallax effect when hero is still visible
                hero.style.transform = `translateY(${scrolled * 0.2}px)`;
                heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
                heroContent.style.opacity = Math.max(0.3, 1 - scrolled / 600);
            }
        });
    }
    
    setupAnimations() {
        this.setupSkillBars();
        this.setupRevealAnimations();
        this.setupTypingEffect();
        this.setupHoverEffects();
        this.setupStatsCounter();
        this.setupSkillFiltering();
        this.setupContactActions();
    }
    
    setupSkillBars() {
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
    }
    
    setupRevealAnimations() {
        const elements = document.querySelectorAll('.cv-skill-panel, .project-card, .about-text, .about-card, .experience-card, .education-strip, .contact-info');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity ${CONFIG.ANIMATIONS.slow} ease, transform ${CONFIG.ANIMATIONS.slow} ease`;
        });
        
        const observer = new IntersectionObserver((entries) => {
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
            observer.observe(element);
        });
    }
    
    setupTypingEffect() {
        const heroTitle = document.querySelector('[data-translate="hero-title"]');
        if (heroTitle) {
            const currentLang = this.getCurrentLanguage();
            const text = TRANSLATIONS[currentLang].hero.title;
            
            setTimeout(() => {
                this.typeWriter(heroTitle, text, 80);
            }, 500);
        }
    }
    
    setupHoverEffects() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        document.querySelectorAll('.cv-skill-panel').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.cv-skill-panel__icon');
                if (icon) {
                    icon.style.transform = 'translateY(-2px) scale(1.05)';
                    icon.style.transition = 'transform 0.35s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.cv-skill-panel__icon');
                if (icon) {
                    icon.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
    }
    
    setupThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            console.log('Theme toggle found, setting up event listener');
            themeToggle.addEventListener('click', () => {
                console.log('Theme toggle clicked');
                const currentTheme = this.getCurrentTheme();
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        } else {
            console.log('Theme toggle not found');
        }
    }
    
    setupLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            console.log('Language toggle found, setting up event listener');
            languageToggle.addEventListener('click', () => {
                console.log('Language toggle clicked');
                const currentLang = this.getCurrentLanguage();
                const newLang = currentLang === 'ar' ? 'en' : 'ar';
                this.setLanguage(newLang);
            });
        } else {
            console.log('Language toggle not found');
        }
    }
    
    getCurrentLanguage() {
        return localStorage.getItem('language') || CONFIG.DEFAULT_LANGUAGE;
    }
    
    setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = CONFIG.LANGUAGES[lang].dir;
        this.updateContent(lang);
        
        // Re-render projects when language changes
        if (typeof renderProjects === 'function') {
            setTimeout(() => renderProjects(), 50);
        }
    }
    
    updateContent(lang) {
        const translations = TRANSLATIONS[lang];
        
        this.updateElement('[data-translate="nav-home"]', translations.nav.home);
        this.updateElement('[data-translate="nav-about"]', translations.nav.about);
        this.updateElement('[data-translate="nav-experience"]', translations.nav.experience);
        this.updateElement('[data-translate="nav-skills"]', translations.nav.skills);
        this.updateElement('[data-translate="nav-projects"]', translations.nav.projects);
        this.updateElement('[data-translate="nav-linkedin"]', translations.nav.linkedin);
        this.updateElement('[data-translate="nav-contact"]', translations.nav.contact);
        
        this.updateElement('[data-translate="hero-title"]', translations.hero.title);
        this.updateElement('[data-translate="hero-subtitle"]', translations.hero.subtitle);
        this.updateElement('[data-translate="hero-description"]', translations.hero.description);
        this.updateElement('[data-translate="hero-view-projects"]', translations.hero.viewProjects);
        this.updateElement('[data-translate="hero-contact-me"]', translations.hero.contactMe);
        this.updateElement('[data-translate="hero-linkedin"]', translations.hero.linkedin);
        this.updateElement('[data-translate="hero-email-cta"]', translations.hero.emailCta);
        this.updateElement('[data-translate="hero-stat-projects"]', translations.hero.statProjects);
        this.updateElement('[data-translate="hero-stat-years"]', translations.hero.statYears);
        this.updateElement('[data-translate="hero-stat-degree"]', translations.hero.statDegree);
        
        this.updateElement('[data-translate="about-title"]', translations.about.title);
        this.updateElement('[data-translate="about-description-1"]', translations.about.description1);
        this.updateElement('[data-translate="about-description-2"]', translations.about.description2);
        this.updateElement('[data-translate="about-location"]', translations.about.location);
        this.updateElement('[data-translate="about-card-title"]', translations.about.cardTitle);
        this.updateElement('[data-translate="about-fact-focus"]', translations.about.factFocus);
        this.updateElement('[data-translate="about-fact-edu"]', translations.about.factEdu);
        this.updateElement('[data-translate="about-fact-lang"]', translations.about.factLang);
        this.updateElement('[data-translate="about-h1"]', translations.about.h1);
        this.updateElement('[data-translate="about-h2"]', translations.about.h2);
        this.updateElement('[data-translate="about-h3"]', translations.about.h3);
        
        this.updateElement('[data-translate="skills-title"]', translations.skills.title);
        this.updateElement('[data-translate="skills-g1-title"]', translations.skills.g1Title);
        this.updateElement('[data-translate="skills-g1-hint"]', translations.skills.g1Hint);
        this.updateElement('[data-translate="skills-g2-title"]', translations.skills.g2Title);
        this.updateElement('[data-translate="skills-g2-hint"]', translations.skills.g2Hint);
        this.updateElement('[data-translate="skills-g3-title"]', translations.skills.g3Title);
        this.updateElement('[data-translate="skills-g3-hint"]', translations.skills.g3Hint);
        this.updateElement('[data-translate="skills-g4-title"]', translations.skills.g4Title);
        this.updateElement('[data-translate="skills-g4-hint"]', translations.skills.g4Hint);
        this.updateElement('[data-translate="skills-g5-title"]', translations.skills.g5Title);
        this.updateElement('[data-translate="skills-g5-hint"]', translations.skills.g5Hint);
        
        this.updateElement('[data-translate="projects-title"]', translations.projects.title);
        
        this.updateElement('[data-translate="contact-title"]', translations.contact.title);
        this.updateElement('[data-translate="contact-subtitle"]', translations.contact.subtitle);
        this.updateElement('[data-translate="contact-subtitle-hint"]', translations.contact.subtitleHint);
        this.updateElement('[data-translate="contact-description"]', translations.contact.description);
        this.updateElement('[data-translate="contact-email"]', translations.contact.email);
        this.updateElement('[data-translate="contact-phone"]', translations.contact.phone);
        this.updateElement('[data-translate="contact-location"]', translations.contact.location);
        document.querySelectorAll('[data-translate="contact-copy"]').forEach((el) => {
            el.textContent = translations.contact.copy;
        });
        this.updateElement('[data-translate="contact-map"]', translations.contact.map);
        this.updateElement('[data-translate="contact-social-title"]', translations.contact.socialTitle);
        this.updateElement('[data-translate="contact-social-github"]', translations.contact.social.github);
        this.updateElement('[data-translate="contact-social-linkedin"]', translations.contact.social.linkedin);
        this.updateElement('[data-translate="contact-social-twitter"]', translations.contact.social.twitter);
        this.updateElement('[data-translate="contact-social-instagram"]', translations.contact.social.instagram);
        this.updateElement('[data-translate="footer-copyright"]', translations.footer.copyright);
        
    }
    
    updateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
    
    getCurrentTheme() {
        return localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
    }
    
    setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeToggle(theme);
    }
    
    updateThemeToggle(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
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
    
    setupStatsCounter() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const target = parseInt(stat.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 100;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            stat.textContent = Math.ceil(current);
                            setTimeout(updateCounter, 20);
                        } else {
                            stat.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(stat);
                }
            });
        }, {
            threshold: 0.5
        });
        
        statNumbers.forEach(stat => observer.observe(stat));
    }
    
    setupSkillFiltering() {
        const categoryTabs = document.querySelectorAll('.category-tab');
        const skillCards = document.querySelectorAll('.skill-card');
        
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                const category = tab.getAttribute('data-category');
                
                skillCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    setupContactActions() {
        // Add copy to clipboard functionality
        window.copyToClipboard = (text) => {
            navigator.clipboard.writeText(text).then(() => {
                this.showNotification('تم النسخ إلى الحافظة!', 'success');
            }).catch(() => {
                this.showNotification('فشل النسخ، يرجى المحاولة يدوياً', 'error');
            });
        };
        
        // Add map functionality
        window.openMap = () => {
            window.open('https://maps.google.com/?q=Damascus,Syria', '_blank', 'noopener,noreferrer');
        };
    }
}

console.log('PortfolioApp class defined');

// Load projects data
if (typeof PROJECTS_DATA === 'undefined') {
    // Projects will be loaded from projects.js
    console.log('Projects data will be loaded from projects.js');
}

// Explicitly assign to window
window.PortfolioApp = PortfolioApp;
console.log('PortfolioApp assigned to window:', typeof window.PortfolioApp);

// NOTE: initialization is handled by the host page after components are loaded to avoid
// double-instantiation. If you need to initialize here, call `new PortfolioApp()`.
