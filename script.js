// 1. DONNÉES DES PROJETS (Pour la fenêtre modale)
// Tu pourras ajouter autant de projets que tu veux ici, avec leurs images et descriptions détaillées.
const projectsData = {
    proj1: { 
        fr: { title: "Optimisation de ligne de production", desc: "Dans le cadre de mon projet de fin d'études, j'ai analysé une chaîne de montage existante. En appliquant les principes du Lean Manufacturing, j'ai réorganisé les postes de travail, ce qui a permis de réduire les temps de cycle de 15% et d'éliminer les goulots d'étranglement.", tags: ["Lean", "SolidWorks", "Analyse de données"] },
        en: { title: "Production Line Optimization", desc: "For my final year project, I analyzed an existing assembly line. By applying Lean Manufacturing principles, I reorganized workstations, which reduced cycle times by 15% and eliminated bottlenecks.", tags: ["Lean", "SolidWorks", "Data Analysis"] },
        ru: { title: "Оптимизация производственной линии", desc: "В рамках моего дипломного проекта я проанализировал существующую сборочную линию. Применяя принципы бережливого производства, я реорганизовал рабочие места, что позволило сократить время цикла на 15% и устранить узкие места.", tags: ["Бережливое производство", "SolidWorks", "Анализ данных"] }
    },
    proj2: {
        fr: { title: "Conception d'un dispositif industriel", desc: "Conception et prototypage d'un outil d'assemblage ergonomique. J'ai réalisé la modélisation 3D sur CATIA, effectué des simulations de contraintes, et supervisé l'impression 3D du prototype pour des tests en conditions réelles avec les opérateurs.", tags: ["CATIA", "Prototypage", "Ergonomie"] },
        en: { title: "Industrial Device Design", desc: "Design and prototyping of an ergonomic assembly tool. I performed 3D modeling in CATIA, ran stress simulations, and supervised the 3D printing of the prototype for real-world testing with operators.", tags: ["CATIA", "Prototyping", "Ergonomics"] },
        ru: { title: "Проектирование промышленного устройства", desc: "Проектирование и прототипирование эргономичного сборочного инструмента. Я выполнил 3D-моделирование в CATIA, провел симуляцию напряжений и контролировал 3D-печать прототипа для тестирования в реальных условиях с операторами.", tags: ["CATIA", "Прототипирование", "Эргономика"] }
    }
};

// 2. TRADUCTIONS GÉNÉRALES DE LA PAGE
const translations = {
    fr: {
        name: "Belem Abdoul Kalilou",
        role: "Ingénieur en conception et productique",
        email: "Email",
        about_title: "À propos de moi",
        about_text: "Ingénieur en conception et productique, je me situe à la croisée de la mécanique traditionnelle et des technologies de demain. Passionné par l'industrie, la robotique et l'intelligence artificielle, je cherche constamment à repousser les limites de l'innovation pour concevoir des solutions plus intelligentes et plus efficaces. Curieux et en apprentissage continu, je transforme chaque nouveau défi en opportunité de croissance. Découvrez ci-dessous un aperçu de mes compétences et des projets qui témoignent de mon parcours.",
        skills_title: "Compétences",
        skill_process: "Optimisation",
        skill_process_desc: "Lean Manufacturing, 5S, Kaizen",
        skill_management: "Gestion",
        skill_management_desc: "Planification, Gestion de projet",
        projects_title: "Mes Projets",
        proj1_title: "Optimisation de ligne",
        proj1_short: "Réduction des temps de cycle de 15%.",
        proj2_title: "Dispositif industriel",
        proj2_short: "Modélisation 3D et prototypage ergonomique.",
        read_more: "Lire la suite →"
        cat_cao: "CAO 3D",
cat_sim: "Simulation & Automatisation",
cat_robot: "Robotique & IoT",
cat_data: "IA & Data",
cat_code: "Programmation",
cat_erp: "Gestion & ERP",
    },
    en: {
        name: "Belem Abdoul Kalilou",
        role: "Design and Manufacturing Engineer",
        email: "Email",
        about_title: "About Me",
        about_text: "As a Design and Manufacturing Engineer, I stand at the intersection of traditional mechanics and tomorrow's technologies. Passionate about industry, robotics, and artificial intelligence, I constantly strive to push the boundaries of innovation to design smarter and more efficient solutions. Curious and committed to continuous learning, I turn every new challenge into an opportunity for growth. Below, you'll find an overview of my skills and the projects that reflect my journey.",
        skills_title: "Skills",
        skill_process: "Optimization",
        skill_process_desc: "Lean Manufacturing, 5S, Kaizen",
        skill_management: "Management",
        skill_management_desc: "Planning, Project Management",
        projects_title: "My Projects",
        proj1_title: "Line Optimization",
        proj1_short: "Reduced cycle times by 15%.",
        proj2_title: "Industrial Device",
        proj2_short: "3D modeling and ergonomic prototyping.",
        read_more: "Read more →"
    cat_cao: "3D CAD",
cat_sim: "Simulation & Automation",
cat_robot: "Robotics & IoT",
cat_data: "AI & Data",
cat_code: "Programming",
cat_erp: "Management & ERP",
    },
    ru: {
        name: "Белем Абдул Калилу",
        role: "Инженер по проектированию и производству",
        email: "Эл. почта",
        about_title: "Обо мне",
        about_text: "Как инженер по проектированию и производству, я нахожусь на пересечении традиционной механики и технологий будущего. Увлечённый промышленностью, робототехникой и искусственным интеллектом, я постоянно стремлюсь расширять границы инноваций для создания более умных и эффективных решений. Любознательный и приверженный непрерывному обучению, я превращаю каждый новый вызов в возможность для роста. Ниже вы найдёте обзор моих навыков и проектов, отражающих мой путь.",
        skills_title: "Навыки",
        skill_process: "Оптимизация",
        skill_process_desc: "Бережливое производство, 5S, Кайдзен",
        skill_management: "Управление",
        skill_management_desc: "Планирование, Управление проектами",
        projects_title: "Мои проекты",
        proj1_title: "Оптимизация линии",
        proj1_short: "Сокращение времени цикла на 15%.",
        proj2_title: "Промышленное устройство",
        proj2_short: "3D-моделирование и эргономичное прототипирование.",
        read_more: "Читать далее →"
        cat_cao: "3D САПР",
cat_sim: "Моделирование и автоматизация",
cat_robot: "Робототехника и IoT",
cat_data: "ИИ и Данные",
cat_code: "Программирование",
cat_erp: "Управление и ERP",
    }
};

// 3. FONCTION POUR CHANGER LA LANGUE
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    // Met à jour les textes simples
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Met à jour les boutons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    document.documentElement.lang = lang;
}

// 4. FONCTIONS POUR LA FENÊTRE MODALE
function openModal(projectId) {
    const lang = localStorage.getItem('preferredLanguage') || 'fr';
    const project = projectsData[projectId][lang];
    
    // Remplir la modale avec les données
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').textContent = project.desc;
    
    // Pour l'instant, on utilise une image placeholder. Tu pourras la changer dynamiquement plus tard.
    document.getElementById('modal-img').src = "https://via.placeholder.com/700x300"; 
    
    // Générer les tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Afficher la modale
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Fermer la modale si on clique en dehors du contenu
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(savedLang);
});
// --- FONCTIONS POUR LA MODALE DE LA PHOTO ---
function openImageModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImage");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Empêcher la fermeture quand on clique sur la photo elle-même
document.addEventListener('DOMContentLoaded', function() {
    const modalImg = document.getElementById("expandedImage");
    if (modalImg) {
        modalImg.addEventListener('click', function(event) {
            event.stopPropagation(); // Stoppe la propagation du clic
        });
    }
});
