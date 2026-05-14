// Main Application
import { CONFIG } from './config.js';
import { TRANSLATIONS } from './translations.js';
import { Utils } from './utils.js';

class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupInitialSettings();
        this.setupEventListeners();
        this.setupAnimations();
        this.setupThemeToggle();
        this.setupLanguageToggle();
    }
    
    setupInitialSettings() {
        // Set initial language
        const currentLang = Utils.getCurrentLanguage();
        Utils.setLanguage(currentLang);
        
        // Set initial theme
        const currentTheme = Utils.getCurrentTheme();
        Utils.setTheme(currentTheme);
        
        // Add loading animation
        document.body.style.opacity = '0';
        document.body.style.transition = `opacity ${CONFIG.ANIMATIONS.normal} ease`;
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    setupEventListeners() {
        // Mobile Navigation
        this.setupMobileNav();
        
        // Smooth Scrolling
        this.setupSmoothScrolling();
        
        // Active Navigation on Scroll
        this.setupActiveNavigation();
        
        // Contact Form
        this.setupContactForm();
        
        // Scroll Effects
        this.setupScrollEffects();
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
                Utils.smoothScroll(target);
            });
        });
    }
    
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', Utils.debounce(() => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
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
        }, 100));
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
        const currentLang = Utils.getCurrentLanguage();
        const translations = TRANSLATIONS[currentLang];
        
        // Validation
        if (!name || !email || !subject || !message) {
            Utils.showNotification(translations.contact.error, 'error');
            return;
        }
        
        if (!Utils.isValidEmail(email)) {
            Utils.showNotification(translations.contact.invalidEmail, 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = translations.contact.form.sending;
        submitBtn.disabled = true;
        
        setTimeout(() => {
            Utils.showNotification(translations.contact.success, 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    setupScrollEffects() {
        // Navbar background on scroll
        window.addEventListener('scroll', Utils.debounce(() => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            }
        }, 100));
        
        // Parallax effect for hero section
        window.addEventListener('scroll', Utils.debounce(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            
            if (hero && heroContent) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - scrolled / 600;
            }
        }, 100));
    }
    
    setupAnimations() {
        // Skill bars animation
        this.setupSkillBars();
        
        // Reveal animations
        this.setupRevealAnimations();
        
        // Typing effect
        this.setupTypingEffect();
        
        // Hover effects
        this.setupHoverEffects();
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
        const elements = document.querySelectorAll('.skill-card, .project-card, .about-text, .contact-info, .contact-form');
        
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
            const currentLang = Utils.getCurrentLanguage();
            const text = TRANSLATIONS[currentLang].hero.title;
            
            setTimeout(() => {
                this.typeWriter(heroTitle, text, 80);
            }, 500);
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
    
    setupHoverEffects() {
        // Project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'rotate(360deg) scale(1.1)';
                    icon.style.transition = 'transform 0.6s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                }
            });
        });
    }
    
    setupThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = Utils.getCurrentTheme();
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                Utils.setTheme(newTheme);
            });
        }
    }
    
    setupLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                const currentLang = Utils.getCurrentLanguage();
                const newLang = currentLang === 'ar' ? 'en' : 'ar';
                Utils.setLanguage(newLang);
            });
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    
    // Console welcome message
    console.log('%c🚀 Welcome to Fadi Botros Portfolio!', `color: ${CONFIG.COLORS.primary}; font-size: 20px; font-weight: bold;`);
    console.log('%cDeveloped with love and creativity ❤️', `color: ${CONFIG.COLORS.accent}; font-size: 14px;`);
});
