document.addEventListener('DOMContentLoaded', () => {

    // --- 1. EMBEDDED TRANSLATIONS (NO FETCH NEEDED) ---
    const TRANSLATIONS = {
        "en": {
            "nav": {
                "toggle_btn": "ES"
            },
            "header": {
                "tagline": "| Java Developer | \"El Dev de Liceaga\" |",
                "status": "LEVEL 25 | LOCATION: GTO, MX | CLASS: DEVELOPER",
                "cta": "Start Game (Email Me)"
            },
            "about": {
                "title": "01. PLAYER INFO",
                "bio_p1": "I am a <strong>Software Developer</strong> based in the rural hills of Romita, Guanajuato. Currently specializing in <strong>Java</strong>, I have a passion for tinkering with technology while enjoying the quiet life away from the city noise.",
                "bio_p2": "When I'm not debugging legacy code, you can find me working on my '90s truck, taking care of my family, or building tools to make rural life more connected. My goal is to become a Senior Full-Stack Developer combining the discipline of engineering with the creativity of a maker."
            },
            "experience": {
                "title": "02. QUEST LOG",
                "job1": {
                    "title": "Java Developer",
                    "date": "Aug 2024 - Present",
                    "desc1": "Maintained and analyzed incidents in legacy Java systems.",
                    "desc2": "Developed technical solutions and performed regression testing using JUnit and Mockito.",
                    "desc3": "Managed version control and documentation for banking-grade software (NCR Authentic 4.5)."
                },
                "job2": {
                    "title": "Junior Software Engineer",
                    "date": "Aug 2023 - Apr 2024",
                    "desc1": "Developed features based on user stories in an Agile/Kanban environment.",
                    "desc2": "Implemented automated QA test suites and managed Git workflows (PRs, merges).",
                    "desc3": "Collaborated with international teams to deliver scalable web solutions."
                },
                "job3": {
                    "title": "Developer & Support",
                    "date": "Sep 2022 - Dec 2022",
                    "desc1": "Fixed bugs and maintained web system modules.",
                    "desc2": "Integrated and consumed web services for internal tools."
                }
            },
            "skills": {
                "title": "03. INVENTORY",
                "subtitle": "Current tech stack and tools equipped.",
                "section1": "Languages & Frameworks",
                "section2": "Tools & Platforms"
            },
            "projects": {
                "title": "04. SIDE QUESTS",
                "subtitle": "<span style='font-family: var(--font-retro)'>[OPTIONAL]</span> Small builds.",
                "nodrive_desc": "Alcolock system with facial recognition for internal combustion vehicles. Awarded 2nd Place at TALEN-TIC Campus León.",
                "unias_desc": "Promotional website for a local nail salon in Romita, Gto.",
                "preview": "Preview",
                "repo": "Repository",
                "folder_desc": "Web-based tool that compares contents of two folders to ensure that all files are present and identical.",
                "disk_desc": "Program that measures read and write speeds of hard disks.",
                "game_desc": "Shooting game built with Pygame.",
                "portfolio_desc": "Personal portfolio and branding project capturing the \"Rural Dev\" aesthetic. <br>(You are already here!)"
            },
            "education": {
                "title": "05. TUTORIALS",
                "degree": "Bachelor of Computer Systems Engineering",
                "degree_status": "Currently in progress with a focus on Software development.",
                "english_cert": "English Proficiency (C2)",
                "english_desc": "Full professional proficiency for international collaboration."
            },
            "footer": {
                "built_with": "Built with <span style='color:var(--accent-green)'>♥</span> in Romita, Gto."
            }
        },
        "es": {
            "nav": {
                "toggle_btn": "EN"
            },
            "header": {
                "tagline": "| Desarrollador Java | \"El Dev de Liceaga\" |",
                "status": "NIVEL 25 | UBICACIÓN: GTO, MX | CLASE: DESARROLLADOR",
                "cta": "Iniciar Juego (Enviar Correo)"
            },
            "about": {
                "title": "01. INFO DEL JUGADOR",
                "bio_p1": "Soy un <strong>Desarrollador de Software</strong> viviendo en la zona rural de Romita, Guanajuato. Actualmente especializándome en <strong>Java</strong>, me apasiona cacharrear con tecnología mientras disfruto de la vida tranquila lejos del ruido de la ciudad.",
                "bio_p2": "Cuando no estoy depurando código legado, me encontrarás arreglando mis camioneta de los 90s, cuidando de mi familia o construyendo herramientas para conectar mejor la vida rural. Mi meta es convertirme en Senior Full-Stack Developer combinando la disciplina de la ingeniería con la creatividad de un maker."
            },
            "experience": {
                "title": "02. REGISTRO DE MISIONES",
                "job1": {
                    "title": "Desarrollador Java",
                    "date": "Ago 2024 - Presente",
                    "desc1": "Mantenimiento y análisis de incidentes en sistemas Java legados.",
                    "desc2": "Desarrollo de soluciones técnicas y pruebas de regresión usando JUnit y Mockito.",
                    "desc3": "Gestión de control de versiones y documentación para software bancario (NCR Authentic 4.5)."
                },
                "job2": {
                    "title": "Ingeniero de Software Jr",
                    "date": "Ago 2023 - Abr 2024",
                    "desc1": "Desarrollo de funcionalidades basadas en historias de usuario en entorno Agile/Kanban.",
                    "desc2": "Implementación de suites de pruebas QA automatizadas y flujos Git (PRs, merges).",
                    "desc3": "Colaboración con equipos internacionales para entregar soluciones web escalables."
                },
                "job3": {
                    "title": "Desarrollador y Soporte",
                    "date": "Sep 2022 - Dic 2022",
                    "desc1": "Corrección de bugs y mantenimiento de módulos del sistema web.",
                    "desc2": "Integración y consumo de servicios web para herramientas internas."
                }
            },
            "skills": {
                "title": "03. INVENTARIO",
                "subtitle": "Stack tecnológico actual y herramientas equipadas.",
                "section1": "Lenguajes y Frameworks",
                "section2": "Herramientas y Plataformas"
            },
            "projects": {
                "title": "04. MISIONES SECUNDARIAS",
                "subtitle": "<span style='font-family: var(--font-retro)'>[OPCIONAL]</span> Proyectos pequeños.",
                "nodrive_desc": "Sistema Alcolock con reconocimiento facial para vehículos de combustión interna. Ganador del 2º Lugar en TALEN-TIC Campus León.",
                "unias_desc": "Sitio web promocional para salón de uñas local en Romita, Gto.",
                "preview": "Ver Demo",
                "repo": "Repositorio",
                "folder_desc": "Herramienta web para comparar contenidos de dos carpetas y asegurar que los archivos sean idénticos.",
                "disk_desc": "Programa que mide las velocidades de lectura y escritura de discos duros.",
                "game_desc": "Juego de disparos construido con Pygame.",
                "portfolio_desc": "Portafolio personal y branding capturando la estética del \"Dev Rural\". <br>(¡Ya estás aquí!)"
            },
            "education": {
                "title": "05. TUTORIALES",
                "degree": "Ingeniería en Sistemas Computacionales",
                "degree_status": "Actualmente en progreso con enfoque en desarrollo de Software.",
                "english_cert": "Dominio de Inglés (C2)",
                "english_desc": "Competencia profesional completa para colaboración internacional."
            },
            "footer": {
                "built_with": "Creado con <span style='color:var(--accent-green)'>♥</span> en Romita, Gto."
            }
        }
    };

    // --- 2. LOGIC ---
    const LANG_KEY = 'LANG';
    const DEFAULT_LANG = navigator.language.startsWith('es') ? 'es' : 'en';
    let currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

    const langToggle = document.getElementById('langToggle');
    const taglineEl = document.querySelector('.tagline');

    function getValue(obj, path) {
        if (!obj) return null;
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            let key = el.dataset.i18n;
            let isHtml = false;

            // Handle [html] prefix
            if (key.startsWith('[html]')) {
                isHtml = true;
                key = key.replace('[html]', '');
            }

            const value = getValue(TRANSLATIONS[currentLang], key);

            if (!value) return;

            if (isHtml) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        // Update Toggle Button Text
        const btnText = getValue(TRANSLATIONS[currentLang], 'nav.toggle_btn');
        if (btnText) langToggle.textContent = btnText;

        // Reset Typewriter effect
        const taglineText = getValue(TRANSLATIONS[currentLang], 'header.tagline');
        if (taglineText) resetTypewriter(taglineText);

        // Update HTML lang attribute
        document.documentElement.lang = currentLang === 'es' ? 'es-mx' : 'en';
    }

    // --- 3. TYPEWRITER EFFECT ---
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

    // --- 4. INIT ---
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem(LANG_KEY, currentLang);
        applyTranslations();
    });

    // Start immediately
    applyTranslations();
});
