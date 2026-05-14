// Language Management System
import { CONFIG } from './config.js';

export class LanguageManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || CONFIG.DEFAULT_LANGUAGE;
        this.translations = {};
        this.init();
    }
    
    async init() {
        await this.loadTranslations(this.currentLanguage);
        this.setupEventListeners();
        this.applyLanguage(this.currentLanguage);
    }
    
    getStoredLanguage() {
        return localStorage.getItem('language');
    }
    
    async loadTranslations(language) {
        try {
            const translationPath = CONFIG.TRANSLATIONS[language];
            if (!translationPath) {
                console.warn(`Translation file not found for language: ${language}`);
                return;
            }
            
            // For ES modules, we need to import directly
            if (language === 'ar') {
                const module = await import('../../data/translations/ar.js');
                this.translations[language] = module.ARABIC;
            } else if (language === 'en') {
                const module = await import('../../data/translations/en.js');
                this.translations[language] = module.ENGLISH;
            } else {
                throw new Error(`Unsupported language: ${language}`);
            }
            
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to default language
            if (language !== CONFIG.DEFAULT_LANGUAGE) {
                await this.loadTranslations(CONFIG.DEFAULT_LANGUAGE);
            }
        }
    }
    
    async setLanguage(language) {
        if (!CONFIG.LANGUAGES[language]) {
            language = CONFIG.DEFAULT_LANGUAGE;
        }
        
        // Load translations if not already loaded
        if (!this.translations[language]) {
            await this.loadTranslations(language);
        }
        
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        this.applyLanguage(language);
        this.updateLanguageToggle();
        this.notifyLanguageChange(language);
    }
    
    applyLanguage(language) {
        const langConfig = CONFIG.LANGUAGES[language];
        if (langConfig) {
            document.documentElement.lang = language;
            document.documentElement.dir = langConfig.dir;
        }
        
        this.updateContent(language);
    }
    
    updateContent(language) {
        const translations = this.translations[language];
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
    
    translate(key, language = this.currentLanguage) {
        const translations = this.translations[language];
        if (!translations) return key;
        
        const translation = this.getNestedValue(translations, key);
        return translation || key;
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    getAvailableLanguages() {
        return Object.keys(CONFIG.LANGUAGES);
    }
    
    toggleLanguage() {
        const languages = this.getAvailableLanguages();
        const currentIndex = languages.indexOf(this.currentLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        const nextLanguage = languages[nextIndex];
        this.setLanguage(nextLanguage);
    }
    
    updateLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            const currentLangConfig = CONFIG.LANGUAGES[this.currentLanguage];
            if (currentLangConfig) {
                languageToggle.title = `Current: ${currentLangConfig.name}`;
            }
        }
    }
    
    setupEventListeners() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    notifyLanguageChange(language) {
        const event = new CustomEvent('languageChanged', { detail: { language } });
        document.dispatchEvent(event);
    }
    
    // Get language configuration
    getLanguageConfig(language = this.currentLanguage) {
        return CONFIG.LANGUAGES[language];
    }
    
    // Check if current language is RTL
    isRTL() {
        const langConfig = this.getLanguageConfig();
        return langConfig && langConfig.dir === 'rtl';
    }
    
    // Get text direction based on current language
    getTextDirection() {
        return this.isRTL() ? 'rtl' : 'ltr';
    }
}
