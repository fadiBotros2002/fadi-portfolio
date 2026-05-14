// Main Application Class
import { CONFIG } from './config.js';
import { ThemeManager } from './theme-manager.js';
import { LanguageManager } from './language-manager.js';
import { ComponentLoader } from './component-loader.js';
import { AnimationManager } from '../utils/animations.js';
import { NavigationManager } from '../utils/navigation.js';
import { FormHandler } from '../utils/form-handler.js';

export class PortfolioApp {
    constructor() {
        this.themeManager = null;
        this.languageManager = null;
        this.componentLoader = null;
        this.animationManager = null;
        this.navigationManager = null;
        this.formHandler = null;
        
        this.init();
    }
    
    async init() {
        try {
            // Setup initial settings
            this.setupInitialSettings();
            
            // Initialize managers
            await this.initializeManagers();
            
            // Load components
            await this.loadComponents();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize animations
            this.initializeAnimations();
            
            // Show welcome message
            this.showWelcomeMessage();
            
        } catch (error) {
            console.error('Application initialization error:', error);
            this.showErrorMessage('Failed to initialize application');
        }
    }
    
    setupInitialSettings() {
        // Set initial opacity for fade-in effect
        document.body.style.opacity = '0';
        document.body.style.transition = `opacity ${CONFIG.ANIMATIONS.normal} ease`;
        
        // Fade in after initialization
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    async initializeManagers() {
        // Initialize theme manager
        this.themeManager = new ThemeManager();
        
        // Initialize language manager
        this.languageManager = new LanguageManager();
        
        // Initialize component loader
        this.componentLoader = new ComponentLoader();
        
        // Initialize utility managers
        this.animationManager = new AnimationManager();
        this.navigationManager = new NavigationManager();
        this.formHandler = new FormHandler();
    }
    
    async loadComponents() {
        try {
            // Load all predefined components
            await this.componentLoader.loadAllComponents();
            
            // Wait a bit for DOM to be ready
            await new Promise(resolve => setTimeout(resolve, 200));
            
            // Re-initialize animations after components are loaded
            if (this.animationManager) {
                this.animationManager.init();
            }
            
        } catch (error) {
            console.error('Error loading components:', error);
            throw error;
        }
    }
    
    setupEventListeners() {
        // Listen for theme changes
        document.addEventListener('themeChanged', (event) => {
            this.handleThemeChange(event.detail.theme);
        });
        
        // Listen for language changes
        document.addEventListener('languageChanged', (event) => {
            this.handleLanguageChange(event.detail.language);
        });
        
        // Listen for component loading
        document.addEventListener('componentLoaded', (event) => {
            this.handleComponentLoaded(event.detail.componentId);
        });
        
        // Listen for all components loaded
        document.addEventListener('allComponentsLoaded', (event) => {
            this.handleAllComponentsLoaded(event.detail.components);
        });
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        // Setup window resize handler
        this.setupResizeHandler();
    }
    
    initializeAnimations() {
        // Setup input validation
        if (this.formHandler) {
            this.formHandler.setupInputValidation();
        }
    }
    
    handleThemeChange(theme) {
        console.log(`Theme changed to: ${theme}`);
        
        // Re-initialize animations that depend on theme
        if (this.animationManager) {
            setTimeout(() => {
                this.animationManager.init();
            }, 300); // Wait for theme transition
        }
    }
    
    handleLanguageChange(language) {
        console.log(`Language changed to: ${language}`);
        
        // Re-initialize animations that depend on text content
        if (this.animationManager) {
            setTimeout(() => {
                this.animationManager.setupTypingEffect();
            }, 300);
        }
    }
    
    handleComponentLoaded(componentId) {
        console.log(`Component loaded: ${componentId}`);
        
        // Re-initialize specific functionality for loaded components
        if (componentId === 'navigation' && this.navigationManager) {
            this.navigationManager.init();
        }
        
        if (componentId === 'contact' && this.formHandler) {
            this.formHandler.init();
        }
    }
    
    handleAllComponentsLoaded(components) {
        console.log('All components loaded:', components);
        
        // Trigger final initialization
        setTimeout(() => {
            this.onApplicationReady();
        }, 200);
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Ctrl/Cmd + K for theme toggle
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                if (this.themeManager) {
                    this.themeManager.toggleTheme();
                }
            }
            
            // Ctrl/Cmd + L for language toggle
            if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
                event.preventDefault();
                if (this.languageManager) {
                    this.languageManager.toggleLanguage();
                }
            }
            
            // Escape to close mobile menu
            if (event.key === 'Escape') {
                if (this.navigationManager) {
                    this.navigationManager.closeMobileNav();
                }
            }
        });
    }
    
    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }
    
    handleResize() {
        // Re-initialize navigation on resize
        if (this.navigationManager) {
            this.navigationManager.init();
        }
    }
    
    onApplicationReady() {
        console.log('Application is ready!');
        
        // Add any final initialization here
        this.addAccessibilityFeatures();
        this.addPerformanceOptimizations();
    }
    
    addAccessibilityFeatures() {
        // Add ARIA labels dynamically
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const currentTheme = this.themeManager.getCurrentTheme();
            themeToggle.setAttribute('aria-label', `Toggle theme (current: ${currentTheme})`);
        }
        
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            const currentLanguage = this.languageManager.getCurrentLanguage();
            const langConfig = this.languageManager.getLanguageConfig(currentLanguage);
            languageToggle.setAttribute('aria-label', `Toggle language (current: ${langConfig?.name || currentLanguage})`);
        }
    }
    
    addPerformanceOptimizations() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Setup lazy loading for images
        this.setupLazyLoading();
    }
    
    preloadCriticalResources() {
        // Preload fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
    }
    
    setupLazyLoading() {
        // Add lazy loading to images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    showWelcomeMessage() {
        console.log('%c🚀 Welcome to Fadi Botros Portfolio!', `color: ${CONFIG.COLORS.primary}; font-size: 20px; font-weight: bold;`);
        console.log('%cDeveloped with love and creativity ❤️', `color: ${CONFIG.COLORS.accent}; font-size: 14px;`);
        console.log('%cPress Ctrl+K to toggle theme, Ctrl+L to toggle language', `color: ${CONFIG.COLORS.secondary}; font-size: 12px;`);
    }
    
    showErrorMessage(message) {
        console.error(message);
        // You could also show a user-friendly error message here
    }
    
    // Public API methods
    getThemeManager() {
        return this.themeManager;
    }
    
    getLanguageManager() {
        return this.languageManager;
    }
    
    getComponentLoader() {
        return this.componentLoader;
    }
    
    getAnimationManager() {
        return this.animationManager;
    }
    
    getNavigationManager() {
        return this.navigationManager;
    }
    
    getFormHandler() {
        return this.formHandler;
    }
    
    // Destroy method for cleanup
    destroy() {
        if (this.animationManager) {
            this.animationManager.destroy();
        }
        
        // Remove event listeners
        document.removeEventListener('themeChanged', this.handleThemeChange);
        document.removeEventListener('languageChanged', this.handleLanguageChange);
        document.removeEventListener('componentLoaded', this.handleComponentLoaded);
        document.removeEventListener('allComponentsLoaded', this.handleAllComponentsLoaded);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.PortfolioApp = new PortfolioApp();
});
