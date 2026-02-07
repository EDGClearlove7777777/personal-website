document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const currentLang = localStorage.getItem('language') || 'en';

    // Set initial state
    setLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'en' ? 'cn' : 'en';
        setLanguage(newLang);
    });
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);

    // Update Toggle Button Text
    const langToggle = document.getElementById('lang-toggle');
    langToggle.textContent = lang === 'en' ? '中文' : 'English';

    const data = translations[lang];

    // Update Text Content by ID
    const textIds = [
        'name', 'role', 'email_label',
        'nav_about', 'nav_news', 'nav_publications', 'nav_projects', 'nav_experience', 'nav_honors', 'nav_cv', 'nav_cv_cn',
        'section_about', 'about_intro', 'about_prev', 'about_interests_text',
        'section_education', 'section_news', 'section_publications', 'section_research', 'section_experience', 'section_honors',
        'footer', 'publications_intro'
    ];

    textIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = data[id];
        }
    });

    // Update Interests List
    const interestsList = document.getElementById('interests_list');
    if (interestsList) {
        interestsList.innerHTML = data.interests_list.map(item => `<li>${item}</li>`).join('');
    }

    // Update Education
    const eduContainer = document.getElementById('education_container');
    if (eduContainer) {
        eduContainer.innerHTML = data.education_items.map(item => `
            <div class="edu-item">
                <div class="edu-logo">
                    <img src="${item.logo}" alt="${item.scool_name}">
                </div>
                <div class="edu-date">${item.period}</div>
                <div class="edu-details">
                    <h4>${item.scool_name}</h4>
                    <p>${item.degree}</p>
                    <p class="gpa">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Update News
    const newsContainer = document.getElementById('news_list');
    if (newsContainer) {
        newsContainer.innerHTML = data.news_items.map(item => `
            <li>
                <span class="date">${item.date}</span>
                <div class="news-content-wrapper">
                    <span class="content">${item.content}</span>
                    ${item.images ? `<div class="news-images">
                        ${item.images.map(img => `<img src="${img}" onclick="window.open(this.src)" alt="News Image">`).join('')}
                    </div>` : ''}
                </div>
            </li>
        `).join('');
    }

    // Update Publications
    const pubContainer = document.getElementById('publications_list');
    if (pubContainer) {
        pubContainer.innerHTML = data.publications_list.map(pub => `
            <div class="publication-item">
                <div class="pub-year">${pub.year}</div>
                <div class="pub-content">
                    <h3 class="pub-title">${pub.title}</h3>
                    <p class="pub-authors">${pub.authors}</p>
                    <p class="pub-venue">${pub.venue}</p>
                    <div class="pub-links">
                        ${pub.status ? `<span class="tag pending">${pub.status}</span>` : ''}
                        ${pub.links.map(link => `<a href="${link.url}" class="tag" target="_blank">${link.name}</a>`).join('')}
                    </div>
                    ${pub.abstract ? `<p class="pub-abstract">${pub.abstract}</p>` : ''}
                </div>
            </div>
        `).join('');
    }

    // Update Research Projects
    const projectsContainer = document.getElementById('projects_container');
    if (projectsContainer) {
        projectsContainer.innerHTML = data.projects_items.map(proj => `
            <div class="project-card">
                <h3>${proj.title}</h3>
                <p class="project-role">${proj.role}</p>
                <p class="project-advisor">${proj.advisor}</p>
                ${proj.images && proj.images.length > 0 ? `
                <div class="project-images-scroll">
                    ${proj.images.map(img => `<img src="${img}" class="project-img" onclick="window.open(this.src)" alt="${proj.title}">`).join('')}
                </div>
                ` : ''}
                <ul>
                    ${proj.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Update Experience
    const expContainer = document.getElementById('experience_container');
    if (expContainer) {
        expContainer.innerHTML = data.experience_items.map(item => `
            <div class="project-card">
                <h3>${item.title}</h3>
                <p class="project-role">${item.org} | ${item.period}</p>
                <p>${item.desc}</p>
            </div>
        `).join('');
    }

    // Update Honors
    const honorsContainer = document.getElementById('honors_container');
    if (honorsContainer) {
        honorsContainer.innerHTML = data.honors_list.map(honor => `
            <li>${honor}</li>
        `).join('');
    }
}
