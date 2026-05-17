/**
 * Loads locale JSON from assets/i18n/{lang}.json and applies [data-i18n] keys.
 */
window.I18n = {
    lang: 'en',
    data: {},
    cache: {},

    getDir(lang) {
        const cfg = window.I18N_CONFIG.locales[lang];
        return cfg ? cfg.dir : 'ltr';
    },

    t(path) {
        if (!path) return '';
        return path.split('.').reduce((obj, key) => (obj != null ? obj[key] : undefined), this.data) ?? '';
    },

    async load(lang) {
        const locales = window.I18N_CONFIG.locales;
        if (!locales[lang]) {
            lang = window.I18N_CONFIG.default;
        }
        if (!this.cache[lang]) {
            const url = `${window.I18N_CONFIG.basePath}/${lang}.json`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Locale not found: ${url}`);
            }
            this.cache[lang] = await response.json();
        }
        this.lang = lang;
        this.data = this.cache[lang];
        return this.data;
    },

    apply(root) {
        const scope = root || document;
        scope.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const value = this.t(key);
            if (value === '') return;
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });
    },

    nextLang(current) {
        const cycle = window.I18N_CONFIG.cycle;
        const index = cycle.indexOf(current);
        return cycle[(index + 1) % cycle.length];
    }
};
