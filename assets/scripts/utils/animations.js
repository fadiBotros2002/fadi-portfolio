// Animation Utilities
import { CONFIG } from '../core/config.js';

export class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.init();
    }
    
    init() {
        this.setupSkillBars();
        this.setupRevealAnimations();
        this.setupTypingEffect();
        this.setupHoverEffects();
        this.setupScrollEffects();
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
        
        this.observers.set('skillBars', observer);
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
        
        this.observers.set('revealAnimations', observer);
    }
    
    setupTypingEffect() {
        const heroTitle = document.querySelector('[data-translate="hero-title"]');
        if (heroTitle) {
            const text = heroTitle.textContent;
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
    
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const heroContent = document.querySelector('.hero-content');
            
            if (hero && heroContent) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - scrolled / 600;
            }
        });
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
    
    // Smooth scroll to element
    smoothScroll(target, duration = 800) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) return;
        
        const startPosition = window.pageYOffset;
        const targetPosition = element.offsetTop - 80; // Account for navbar
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // Fade in element
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    }
    
    // Fade out element
    fadeOut(element, duration = 300) {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
    
    // Slide in element
    slideIn(element, direction = 'up', duration = 300) {
        const transforms = {
            up: 'translateY(100%)',
            down: 'translateY(-100%)',
            left: 'translateX(100%)',
            right: 'translateX(-100%)'
        };
        
        element.style.transform = transforms[direction];
        element.style.transition = `transform ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.transform = 'translate(0, 0)';
        }, 10);
    }
    
    // Clean up observers
    destroy() {
        this.observers.forEach(observer => {
            observer.disconnect();
        });
        this.observers.clear();
    }
}
