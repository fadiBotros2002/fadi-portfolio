// Theme Management System
import { CONFIG } from './config.js';

export class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || CONFIG.DEFAULT_THEME;
        this.init();
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        this.setupEventListeners();
    }
    
    getStoredTheme() {
        return localStorage.getItem('theme');
    }
    
    setTheme(theme) {
        if (!CONFIG.THEMES[theme]) {
            theme = CONFIG.DEFAULT_THEME;
        }
        
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Remove all theme attributes first
        document.documentElement.removeAttribute('data-theme');
        this.applyTheme(theme);
        
        this.updateThemeToggle();
        this.notifyThemeChange(theme);
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
    toggleTheme() {
        const nextTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(nextTheme);
    }
    
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    updateThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                const iconMap = {
                    light: 'fas fa-moon',
                    dark: 'fas fa-sun'
                };
                icon.className = iconMap[this.currentTheme] || iconMap.light;
            }
        }
    }
    
    setupEventListeners() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    
    setupSystemThemeListener() {
        // System theme listener removed — only light/dark supported
    }
    
    notifyThemeChange(theme) {
        const event = new CustomEvent('themeChanged', { detail: { theme } });
        document.dispatchEvent(event);
    }
    
    // Get theme-specific CSS variables
    getThemeVariables() {
        const computedStyle = getComputedStyle(document.documentElement);
        return {
            primary: computedStyle.getPropertyValue('--color-primary').trim(),
            secondary: computedStyle.getPropertyValue('--color-secondary').trim(),
            accent: computedStyle.getPropertyValue('--color-accent').trim(),
            success: computedStyle.getPropertyValue('--color-success').trim(),
            error: computedStyle.getPropertyValue('--color-error').trim(),
            bgPrimary: computedStyle.getPropertyValue('--bg-primary').trim(),
            bgSecondary: computedStyle.getPropertyValue('--bg-secondary').trim(),
            textPrimary: computedStyle.getPropertyValue('--text-primary').trim(),
            textSecondary: computedStyle.getPropertyValue('--text-secondary').trim(),
            borderPrimary: computedStyle.getPropertyValue('--border-primary').trim()
        };
    }
}
