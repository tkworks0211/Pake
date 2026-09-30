// 翻訳先の言語（日本語）をCookieで事前指定
document.cookie = 'googtrans=/auto/ja; path=/';

window.addEventListener('DOMContentLoaded', () => {
  const box = document.createElement('div');
  box.id = 'google_translate_element';
  box.style.cssText = 'position:fixed;bottom:8px;right:8px;z-index:2147483647';
  document.body.appendChild(box);

  window.googleTranslateElementInit = () => {
    new google.translate.TranslateElement(
      { pageLanguage: 'auto', includedLanguages: 'ja', autoDisplay: false },
      'google_translate_element'
    );
  };

  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(s);
});
