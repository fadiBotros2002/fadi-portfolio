// Simple bundled version for browser compatibility
console.log('app.js file started executing');

const CONFIG = {
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

class PortfolioApp {
    constructor() {
        this.ready = this.init();
    }

    async init() {
        const currentLang = this.getCurrentLanguage();
        await window.I18n.load(currentLang);

        const currentTheme = localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
        this.setTheme(currentTheme);

        document.body.style.opacity = '0';
        document.body.style.transition = `opacity ${CONFIG.ANIMATIONS.normal} ease`;

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);

        this.applyTranslations();
        this.setupEventListeners();
        this.setupAnimations();

        if (typeof renderProjects === 'function') {
            renderProjects();
        }
    }

    applyTranslations() {
        document.documentElement.lang = window.I18n.lang;
        document.documentElement.dir = window.I18n.getDir(window.I18n.lang);
        window.I18n.apply();
    }
    
    setupEventListeners() {
        console.log('Setting up event listeners...');
        this.setupMobileNav();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupScrollEffects();
        this.setupThemeToggle();
        this.setupLanguagePicker();
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
        const heroTitle = document.querySelector('[data-i18n="hero.title"]');
        if (heroTitle) {
            const text = window.I18n.t('hero.title');
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
        document.querySelectorAll('.theme-toggle').forEach((themeToggle) => {
            themeToggle.addEventListener('click', () => {
                const currentTheme = this.getCurrentTheme();
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        });
    }
    
    setupLanguagePicker() {
        this.syncLanguageSelects(this.getCurrentLanguage());

        document.querySelectorAll('.language-select').forEach((select) => {
            select.addEventListener('change', async (event) => {
                const lang = event.target.value;
                await this.setLanguage(lang);
                this.syncLanguageSelects(lang);
            });
        });
    }

    syncLanguageSelects(lang) {
        document.querySelectorAll('.language-select').forEach((select) => {
            if (select.value !== lang) {
                select.value = lang;
            }
        });
    }

    getCurrentLanguage() {
        return localStorage.getItem('language') || window.I18N_CONFIG.default;
    }

    async setLanguage(lang) {
        await window.I18n.load(lang);
        localStorage.setItem('language', lang);
        this.syncLanguageSelects(lang);
        this.applyTranslations();
        if (typeof renderProjects === 'function') {
            renderProjects();
        }
        if (this.setupTypingEffect) {
            this.setupTypingEffect();
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
        document.querySelectorAll('.theme-toggle i').forEach((icon) => {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
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
