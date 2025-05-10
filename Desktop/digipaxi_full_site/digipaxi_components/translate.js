// Basic translation script for demo
(function() {
  function setLanguage(lang) {
    var dict = window.translations && window.translations[lang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    localStorage.setItem('lang', lang);
  }

  // Detect language or use default
  var lang = localStorage.getItem('lang') || 'en';
  setLanguage(lang);

  // Expose for language switcher
  window.setLanguage = setLanguage;
})(); 