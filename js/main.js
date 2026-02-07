document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Create mobile toggle button if it doesn't exist (it might be in HTML already)
    // Checking if .menu-toggle exists in HTML or if we need to dynamic bind

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Language Toggle
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'en'; // Default language

    function updateContent(lang) {
        // Update text content for elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key]; // Use innerHTML to allow HTML tags like <br>
                }
            }
        });

        // Update specific dynamic sections (News, Projects, etc. if they are rendered by JS)
        // In this case, the lists (News, Projects, Publications) seem to be static in HTML?
        // Wait, index.html likely needs to render these lists dynamically if they are in translations.js
        // If index.html has static content, we need to replace it or render it from JS.

        renderLists(lang);

        // Update button text
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'en' ? translations.en.btn_lang_cn : translations.cn.btn_lang_en;
        }
    }

    function renderLists(lang) {
        const t = translations[lang];

        // Render News
        const newsContainer = document.querySelector('#news .news-list'); // Assuming structure
        if (newsContainer && t.news_items) {
            newsContainer.innerHTML = t.news_items.map(item => `
                <div class="news-item">
                    <span class="date">${item.date}</span>
                    <span class="content">${item.text}</span>
                    ${item.images ? `<div class="news-images">${item.images.map(img => `<img src="${img}" alt="News Image">`).join('')}</div>` : ''}
                </div>
            `).join('');
        }

        // Render Projects
        const projectsContainer = document.querySelector('#projects .project-grid'); // Assuming structure
        if (projectsContainer && t.projects_items) {
            projectsContainer.innerHTML = t.projects_items.map(item => `
                <div class="project-card">
                    <div class="project-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="project-content">
                        <h3>${item.title}</h3>
                        <p class="period">${item.period}</p>
                        <p class="desc">${item.desc}</p>
                        <div class="tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render Publications
        const pubContainer = document.querySelector('#publications .publication-list');
        if (pubContainer && t.publications_list) {
            pubContainer.innerHTML = t.publications_intro ? `<p class="pub-intro">${t.publications_intro}</p>` : '';
            pubContainer.innerHTML += `<ul>` + t.publications_list.map(item => `
                <li>${item}</li>
            `).join('') + `</ul>`;
        }

        // Render Interests if needed
        const interestsContainer = document.querySelector('.interests-list'); // Assuming class
        if (interestsContainer && t.interests_list) {
            interestsContainer.innerHTML = t.interests_list.map(item => `<li>${item}</li>`).join('');
        }

        // Render Title for sections if they have data-i18n, handled by generic updater
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'cn' : 'en';
            updateContent(currentLang);
        });
    }

    // Initial Render
    updateContent(currentLang);
});
