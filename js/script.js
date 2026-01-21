document.addEventListener('DOMContentLoaded', () => {

    let TRANSLATIONS = {}; // Will hold fetched JSON
    const LANG_KEY = 'LANG';
    const DEFAULT_LANG = navigator.language.startsWith('es') ? 'es' : 'en';
    let currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

    const langToggle = document.getElementById('langToggle');
    const taglineEl = document.querySelector('.tagline');

    // --- 1. FETCH DATA ---
    fetch('i18n/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            TRANSLATIONS = data;
            initializePortfolio();
        })
        .catch(err => {
            console.error("Could not load language file:", err);
            // Fallback content or alert could go here
            document.body.innerHTML = "<h1>Error loading content. Please run via Local Server.</h1>";
        });


    // --- 2. INITIALIZATION & LOGIC ---
    function initializePortfolio() {
        applyTranslations();

        // Event Listener for Toggle
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            localStorage.setItem(LANG_KEY, currentLang);
            applyTranslations();
        });
    }

    function getValue(obj, path) {
        if (!obj) return null;
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }

    function applyTranslations() {
        if (!TRANSLATIONS[currentLang]) return;

        const data = TRANSLATIONS[currentLang];

        // A. Static Elements (using data-i18n)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            let key = el.dataset.i18n;
            let isHtml = false;

            if (key.startsWith('[html]')) {
                isHtml = true;
                key = key.replace('[html]', '');
            }

            const value = getValue(data, key);
            if (value) {
                if (isHtml) el.innerHTML = value;
                else el.textContent = value;
            }
        });

        // B. Dynamic Lists (Skills & Projects)
        renderLists(data);

        // C. Specific Element Updates
        document.title = data.meta.title;
        document.documentElement.lang = currentLang === 'es' ? 'es-mx' : 'en';

        // Reset Typewriter
        if (data.header && data.header.tagline) {
            resetTypewriter(data.header.tagline);
        }
    }

    function renderLists(data) {
        // 1. Render Skills
        const langContainer = document.getElementById('skills-lang-container');
        const toolsContainer = document.getElementById('skills-tools-container');

        if (langContainer && data.skills.list_languages) {
            langContainer.innerHTML = data.skills.list_languages.map(skill =>
                `<div class="skill-tag">${skill}</div>`
            ).join('');
        }

        if (toolsContainer && data.skills.list_tools) {
            toolsContainer.innerHTML = data.skills.list_tools.map(skill =>
                `<div class="skill-tag">${skill}</div>`
            ).join('');
        }

        // 2. Render Projects
        const projContainer = document.getElementById('projects-container');
        if (projContainer && data.projects.items) {
            projContainer.innerHTML = data.projects.items.map(proj => {
                let linksHtml = '';

                if (proj.link_preview) {
                    linksHtml += `<br><a href="${proj.link_preview}" target="_blank">${data.projects.link_preview}</a>`;
                }
                if (proj.link_repo) {
                    linksHtml += `<br><a href="${proj.link_repo}" target="_blank">${data.projects.link_repo}</a>`;
                }

                return `
                <div class="project-card">
                    <div class="project-title">${proj.title}</div>
                    <span class="project-tech">${proj.tech}</span>
                    <div class="project-desc">
                        <span>${proj.desc}</span>
                        ${linksHtml}
                    </div>
                </div>`;
            }).join('');
        }
    }

    // --- 3. TYPEWRITER EFFECT (Unchanged) ---
    let text = '';
    let i = 0;
    let timeout;

    function typeWriter() {
        if (i < text.length) {
            taglineEl.textContent += text.charAt(i);
            i++;
            timeout = setTimeout(typeWriter, 50);
        } else {
            setTimeout(backspace, 2000);
        }
    }

    function backspace() {
        if (taglineEl.textContent.length > 0) {
            taglineEl.textContent = taglineEl.textContent.slice(0, -1);
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
});