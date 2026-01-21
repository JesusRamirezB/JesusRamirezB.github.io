document.addEventListener('DOMContentLoaded', async () => {
    const LANG_KEY = 'LANG';
    const DEFAULT_LANG = navigator.language.startsWith('es') ? 'es' : 'en';

    let currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
    let translations = {};

    const langToggle = document.getElementById('langToggle');
    const taglineEl = document.querySelector('.tagline');


    async function loadTranslations(lang) {
        const res = await fetch(`./i18n/text.json`);
        translations = await res.json();
    }

    function getValue(obj, path) {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            let key = el.dataset.i18n;
            let isHtml = false;

            if(key.startsWith('[html]')) {
                isHtml = true;
                key = key.replace('[html]', '');
            }

            const value = getValue(translations[currentLang], key);
            if(!value){
                return;
            }

            if(isHtml){
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });
        resetTypewriter(
            getValue(translations[currentLang], 'header.tagline')
        );

        langToggle.textContent = getValue(translations[currentLang], 'nav.toggle_btn');

        document.documentElement.lang = currentLang === 'es' ? 'es-mx' : 'en';
    }

    let text = '';
    let i = 0;
    let timeout;

    function typeWriter() {
        if (i < text.length) {
            taglineEl.textContent += text.charAt(i);
            i++;
            timeout = setTimeout(typeWriter, 50);
        } else {
            setTimeout(backspace, 800);
        }
    }

    function backspace() {
        if (taglineEl.textContent.length > 0) {
            taglineEl.textContent =
                taglineEl.textContent.slice(0, -1);
            setTimeout(backspace, 40);
        } else {
            i = 0;
            setTimeout(typeWriter, 400);
        }
    }

    function resetTypewriter(newText) {
        clearTimeout(timeout);
        text = newText;
        taglineEl.textContent = '';
        i = 0;
        typeWriter();
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem(LANG_KEY, currentLang);
        applyTranslations();
    });

    await loadTranslations();
    applyTranslations();

});