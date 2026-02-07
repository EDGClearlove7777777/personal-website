document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.main-nav a');

    // --- Sidebar Logic ---
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900 &&
            sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !mobileToggle.contains(e.target)) {

            sidebar.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // --- Language Toggle & Content Rendering ---
    let currentLang = 'en';
    const langToggleBtn = document.getElementById('lang-toggle');

    if (typeof translations !== 'undefined') {
        // Initial Render
        setLanguage('en');

        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', () => {
                const newLang = currentLang === 'en' ? 'cn' : 'en';
                const scrollPosition = window.scrollY; // Preserve scroll
                setLanguage(newLang);
                window.scrollTo(0, scrollPosition);
            });
        }
    }

    function setLanguage(lang) {
        currentLang = lang;
        const data = translations[lang];

        // Update simple text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                el.innerHTML = data[key];
            }
        });

        // Update Button Text
        if (langToggleBtn) {
            if (lang === 'en') {
                langToggleBtn.textContent = "中文";
            } else {
                langToggleBtn.textContent = "English";
            }
        }

        // Render Complex Lists
        renderInterests(data.interests_list);
        renderNews(data.news_items);
        renderPublications(data.publications_list, data.publications_intro);
        renderProjects(data.projects_items);

        // Render About Bio
        const aboutText = document.getElementById('about-text');
        if (aboutText) aboutText.innerHTML = data.about_text;
    }

    function renderInterests(items) {
        const list = document.getElementById('interests-list');
        if (!list || !items) return;
        list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }

    function renderNews(items) {
        const list = document.getElementById('news-list');
        if (!list || !items) return;
        list.innerHTML = items.map(item => `
            <li>
                <span class="date">${item.date}</span>
                <div class="news-content-wrapper">
                    <span class="content">${item.text}</span>
                    ${item.images ? `
                        <div class="news-images">
                            ${item.images.map(img => `<img src="${img}" alt="News Image" onclick="window.open(this.src)" onerror="this.style.display='none'">`).join('')}
                        </div>
                    ` : ''}
                </div>
            </li>
        `).join('');
    }

    function renderPublications(items, intro) {
        const list = document.getElementById('publications-list');
        const introEl = document.getElementById('pub-intro');
        if (introEl) introEl.textContent = intro || "";

        if (!list || !items) return;
        list.innerHTML = items.map(item => `
            <div class="publication-item">
                <div class="pub-content">
                    <p class="pub-citation">${item}</p>
                </div>
            </div>
        `).join('');
    }

    function renderProjects(items) {
        const list = document.getElementById('projects-list');
        if (!list || !items) return;
        list.innerHTML = items.map(item => `
            <div class="project-card">
                <div class="project-header">
                    <h3>${item.title}</h3>
                    <span class="project-period">${item.period}</span>
                </div>
                <div class="project-body">
                    ${item.image ? `
                    <div class="project-poster-container">
                         <img src="${item.image}" alt="${item.title}" class="project-poster" onclick="window.open(this.src)" onerror="this.style.display='none'">
                    </div>` : ''}
                    <p class="project-desc">${item.desc}</p>
                    <div class="project-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- Scroll Spy ---
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
