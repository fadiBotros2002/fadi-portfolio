// Utility Functions
export class Utils {
    // Language Management
    static getCurrentLanguage() {
        return localStorage.getItem('language') || CONFIG.DEFAULT_LANGUAGE;
    }
    
    static setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = CONFIG.LANGUAGES[lang].dir;
        this.updateContent(lang);
    }
    
    static updateContent(lang) {
        const translations = TRANSLATIONS[lang];
        
        // Update navigation
        this.updateElement('[data-translate="nav-home"]', translations.nav.home);
        this.updateElement('[data-translate="nav-about"]', translations.nav.about);
        this.updateElement('[data-translate="nav-skills"]', translations.nav.skills);
        this.updateElement('[data-translate="nav-projects"]', translations.nav.projects);
        this.updateElement('[data-translate="nav-contact"]', translations.nav.contact);
        
        // Update hero section
        this.updateElement('[data-translate="hero-title"]', translations.hero.title);
        this.updateElement('[data-translate="hero-subtitle"]', translations.hero.subtitle);
        this.updateElement('[data-translate="hero-description"]', translations.hero.description);
        this.updateElement('[data-translate="hero-view-projects"]', translations.hero.viewProjects);
        this.updateElement('[data-translate="hero-contact-me"]', translations.hero.contactMe);
        
        // Update about section
        this.updateElement('[data-translate="about-title"]', translations.about.title);
        this.updateElement('[data-translate="about-description-1"]', translations.about.description1);
        this.updateElement('[data-translate="about-description-2"]', translations.about.description2);
        this.updateElement('[data-translate="about-experience"]', translations.about.experience);
        this.updateElement('[data-translate="about-frontend"]', translations.about.frontend);
        this.updateElement('[data-translate="about-backend"]', translations.about.backend);
        this.updateElement('[data-translate="about-uiux"]', translations.about.uiux);
        
        // Update skills section
        this.updateElement('[data-translate="skills-title"]', translations.skills.title);
        this.updateElement('[data-translate="skills-html-name"]', translations.skills.html.name);
        this.updateElement('[data-translate="skills-html-desc"]', translations.skills.html.description);
        this.updateElement('[data-translate="skills-css-name"]', translations.skills.css.name);
        this.updateElement('[data-translate="skills-css-desc"]', translations.skills.css.description);
        this.updateElement('[data-translate="skills-js-name"]', translations.skills.javascript.name);
        this.updateElement('[data-translate="skills-js-desc"]', translations.skills.javascript.description);
        this.updateElement('[data-translate="skills-react-name"]', translations.skills.react.name);
        this.updateElement('[data-translate="skills-react-desc"]', translations.skills.react.description);
        this.updateElement('[data-translate="skills-node-name"]', translations.skills.nodejs.name);
        this.updateElement('[data-translate="skills-node-desc"]', translations.skills.nodejs.description);
        this.updateElement('[data-translate="skills-db-name"]', translations.skills.database.name);
        this.updateElement('[data-translate="skills-db-desc"]', translations.skills.database.description);
        
        // Update projects section
        this.updateElement('[data-translate="projects-title"]', translations.projects.title);
        this.updateElement('[data-translate="project-ecommerce-title"]', translations.projects.ecommerce.title);
        this.updateElement('[data-translate="project-ecommerce-desc"]', translations.projects.ecommerce.description);
        this.updateElement('[data-translate="project-blog-title"]', translations.projects.blog.title);
        this.updateElement('[data-translate="project-blog-desc"]', translations.projects.blog.description);
        this.updateElement('[data-translate="project-dashboard-title"]', translations.projects.dashboard.title);
        this.updateElement('[data-translate="project-dashboard-desc"]', translations.projects.dashboard.description);
        this.updateElement('[data-translate="project-view"]', translations.projects.ecommerce.viewProject);
        this.updateElement('[data-translate="project-github"]', translations.projects.ecommerce.github);
        
        // Update contact section
        this.updateElement('[data-translate="contact-title"]', translations.contact.title);
        this.updateElement('[data-translate="contact-subtitle"]', translations.contact.subtitle);
        this.updateElement('[data-translate="contact-description"]', translations.contact.description);
        this.updateElement('[data-translate="contact-email"]', translations.contact.email);
        this.updateElement('[data-translate="contact-phone"]', translations.contact.phone);
        this.updateElement('[data-translate="contact-location"]', translations.contact.location);
        this.updateElement('[data-translate="contact-form-name"]', translations.contact.form.name);
        this.updateElement('[data-translate="contact-form-email"]', translations.contact.form.email);
        this.updateElement('[data-translate="contact-form-subject"]', translations.contact.form.subject);
        this.updateElement('[data-translate="contact-form-message"]', translations.contact.form.message);
        this.updateElement('[data-translate="contact-form-send"]', translations.contact.form.send);
        this.updateElement('[data-translate="footer-copyright"]', translations.footer.copyright);
        
        // Update placeholders
        this.updatePlaceholder('[data-translate-placeholder="contact-form-name"]', translations.contact.form.name);
        this.updatePlaceholder('[data-translate-placeholder="contact-form-email"]', translations.contact.form.email);
        this.updatePlaceholder('[data-translate-placeholder="contact-form-subject"]', translations.contact.form.subject);
        this.updatePlaceholder('[data-translate-placeholder="contact-form-message"]', translations.contact.form.message);
    }
    
    static updateElement(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
    
    static updatePlaceholder(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.placeholder = text;
        }
    }
    
    // Theme Management
    static getCurrentTheme() {
        return localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
    }
    
    static setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeToggle(theme);
    }
    
    static updateThemeToggle(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }
    
    // Notification System
    static showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
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
        
        // Set background color based on type
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
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // Form Validation
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Animation Helpers
    static animateOnScroll(selector, animationClass = 'fade-in-up') {
        const elements = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
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
    
    // Smooth Scroll
    static smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Debounce Function
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}
