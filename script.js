// Dictionnaire des traductions
const translations = {
    fr: {
        greeting: "Bonjour, je suis Belem Abdoul Kalilou 👋",
        role: "Ingénieur en conception et productique",
        contact: "Contact",
        about_title: "À propos de moi",
        about_text: "Ingénieur passionné par la conception et la productique. Je suis spécialisé dans l'optimisation des processus de production et le développement de solutions innovantes pour améliorer l'efficacité industrielle.",
        skills_title: "Compétences",
        projects_title: "Mes Projets",
        proj1_title: "Optimisation de ligne de production",
        proj1_desc: "Analyse et réorganisation d'une chaîne de montage pour réduire les temps de cycle de 15%.",
        proj2_title: "Conception d'un dispositif industriel",
        proj2_desc: "Modélisation 3D et prototypage d'un outil d'assemblage ergonomique pour les opérateurs.",
        see_code: "Voir les détails",
        see_demo: "Voir le projet",
        footer: "© 2024 Belem Abdoul Kalilou. Fait avec ❤️ et hébergé sur GitHub Pages."
    },
    en: {
        greeting: "Hello, I am Belem Abdoul Kalilou 👋",
        role: "Design and Manufacturing Engineer",
        contact: "Contact",
        about_title: "About Me",
        about_text: "Engineer passionate about design and manufacturing. I specialize in optimizing production processes and developing innovative solutions to improve industrial efficiency.",
        skills_title: "Skills",
        projects_title: "My Projects",
        proj1_title: "Production Line Optimization",
        proj1_desc: "Analysis and reorganization of an assembly line to reduce cycle times by 15%.",
        proj2_title: "Industrial Device Design",
        proj2_desc: "3D modeling and prototyping of an ergonomic assembly tool for operators.",
        see_code: "See details",
        see_demo: "View project",
        footer: "© 2024 Belem Abdoul Kalilou. Made with ❤️ and hosted on GitHub Pages."
    },
    ru: {
        greeting: "Здравствуйте, я Белем Абдул Калилу 👋",
        role: "Инженер по проектированию и производству",
        contact: "Контакт",
        about_title: "Обо мне",
        about_text: "Инженер, увлеченный проектированием и производством. Я специализируюсь на оптимизации производственных процессов и разработке инновационных решений для повышения промышленной эффективности.",
        skills_title: "Навыки",
        projects_title: "Мои проекты",
        proj1_title: "Оптимизация производственной линии",
        proj1_desc: "Анализ и реорганизация сборочной линии для сокращения времени цикла на 15%.",
        proj2_title: "Проектирование промышленного устройства",
        proj2_desc: "3D-моделирование и прототипирование эргономичного сборочного инструмента для операторов.",
        see_code: "Подробнее",
        see_demo: "Смотреть проект",
        footer: "© 2024 Белем Абдул Калилу. Сделано с ❤️ и размещено на GitHub Pages."
    }
};

// Fonction pour changer la langue
function setLanguage(lang) {
    // 1. Sauvegarder le choix dans le navigateur
    localStorage.setItem('preferredLanguage', lang);
    
    // 2. Mettre à jour tous les textes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 3. Mettre à jour l'apparence des boutons (mettre en évidence la langue active)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    // 4. Changer la langue de la balise <html> pour l'accessibilité
    document.documentElement.lang = lang;
}

// Au chargement de la page, vérifier la langue sauvegardée ou utiliser le français par défaut
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(savedLang);
});
