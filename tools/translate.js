(function () {
  try {
    document.cookie = "googtrans=/auto/ja; path=/";
  } catch (e) {}

  function start() {
    if (document.getElementById("google_translate_element")) return;
    var box = document.createElement("div");
    box.id = "google_translate_element";
    box.style.cssText =
      "position:fixed;bottom:8px;right:8px;z-index:2147483647;background:#fff;padding:2px";
    document.body.appendChild(box);

    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement(
        { pageLanguage: "auto", includedLanguages: "ja", autoDisplay: false },
        "google_translate_element",
      );
    };
    var s = document.createElement("script");
    s.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(s);
  }

  if (document.body) start();
  else window.addEventListener("DOMContentLoaded", start);
})();
