const translations = {
    ar: {
      about: "من أنا",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل معي",
      switchToEn: "English",
      switchToAr: "العربية"
    }
  };
  
  function switchLang(lang) {
    const isArabic = lang === 'ar';
    document.body.classList.toggle('rtl', isArabic);
    localStorage.setItem('lang', lang);
    if (isArabic) {
      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations.ar[key];
      });
    } else {
      location.reload(); // reload to default English
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang');
    if (lang === 'ar') {
      switchLang('ar');
    }
  });
  