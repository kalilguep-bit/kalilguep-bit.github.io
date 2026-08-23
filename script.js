// 1. DONNÉES DES PROJETS (Pour la fenêtre modale)
const projectsData = {
        proj1: { 
        img: "biodig_3d.jpg",
        tags: ["SolidWorks", "FreeCAD", "FEA Simulation", "CSTR"],
        fr: { 
            title: "Biodigesteur CSTR 1000L", 
            desc: `<p><strong>Contexte :</strong> Projet d'ingénierie à la FST Settat. Rôle : Concepteur Mécanique & Analyste FEA. Collaboration technique pour l'optimisation des plans.</p>
                   <h4>1. Ingénierie Système</h4>
                   <ul>
                       <li><strong>CdCF :</strong> Fonctions principales (maintenir la température, homogénéité, étanchéité au biogaz).</li>
                       <li><strong>CdCT :</strong> Volume utile 1000L, spécification des matériaux et motorisation.</li>
                   </ul>
                   <h4>2. Modélisation 3D (CAO)</h4>
                   <p>Conception paramétrique sur <strong>SOLIDWORKS</strong> et <strong>FreeCAD</strong>. Optimisation itérative de la cuve et du système d'agitation pour maximiser le transfert thermique et éviter la sédimentation.</p>
                   <h4>3. Validation Structurelle (FEA)</h4>
                   <ul>
                       <li><strong>Analyse de Flambement :</strong> Validation de la cuve (GRP) face aux pressions hydrostatiques.</li>
                       <li><strong>Étude de Torsion :</strong> Analyse des contraintes de cisaillement sur l'arbre d'agitateur face à la viscosité du substrat.</li>
                   </ul>
                   <h4>4. Résultats</h4>
                   <p>Coefficients de sécurité conformes aux normes. Dossier technique complet (3D, plans, rapports). Démonstration du cycle de vie complet du produit.</p>` 
        },
        en: { 
            title: "1000L CSTR Biodigester", 
            desc: `<p><strong>Context:</strong> Engineering project at FST Settat. Role: Mechanical Designer & FEA Analyst. Technical collaboration for plan optimization.</p>
                   <h4>1. Systems Engineering</h4>
                   <ul>
                       <li><strong>Functional Specs:</strong> Main functions (temperature control, homogeneity, biogas tightness).</li>
                       <li><strong>Technical Specs:</strong> 1000L useful volume, material and motorization specifications.</li>
                   </ul>
                   <h4>2. 3D Modeling (CAD)</h4>
                   <p>Parametric design using <strong>SOLIDWORKS</strong> and <strong>FreeCAD</strong>. Iterative optimization of the tank and agitation system to maximize heat transfer and prevent sedimentation.</p>
                   <h4>3. Structural Validation (FEA)</h4>
                   <ul>
                       <li><strong>Buckling Analysis:</strong> Validation of the tank (GRP) against hydrostatic pressures.</li>
                       <li><strong>Torsion Study:</strong> Analysis of shear stresses on the agitator shaft against substrate viscosity.</li>
                   </ul>
                   <h4>4. Results</h4>
                   <p>Safety factors compliant with standards. Complete technical dossier (3D, drawings, reports). Demonstration of the full product lifecycle.</p>` 
        },
        ru: { 
            title: "Биореактор CSTR 1000L", 
            desc: `<p><strong>Контекст:</strong> Инженерный проект в FST Settat. Роль: Конструктор-механик и инженер FEA. Техническое сотрудничество для оптимизации планов.</p>
                   <h4>1. Системная инженерия</h4>
                   <ul>
                       <li><strong>Функциональные требования:</strong> Основные функции (контроль температуры, однородность, герметичность биогаза).</li>
                       <li><strong>Технические требования:</strong> Полезный объем 1000 л, спецификация материалов и моторизации.</li>
                   </ul>
                   <h4>2. 3D-моделирование (САПР)</h4>
                   <p>Параметрическое проектирование с использованием <strong>SOLIDWORKS</strong> и <strong>FreeCAD</strong>. Итеративная оптимизация резервуара и системы перемешивания для максимизации теплопередачи.</p>
                   <h4>3. Структурная проверка (FEA)</h4>
                   <ul>
                       <li><strong>Анализ потери устойчивости:</strong> Проверка резервуара (GRP) на гидростатическое давление.</li>
                       <li><strong>Исследование кручения:</strong> Анализ касательных напряжений на валу мешалки с учетом вязкости субстрата.</li>
                   </ul>
                   <h4>4. Результаты</h4>
                   <p>Коэффициенты безопасности соответствуют стандартам. Полный технический пакет (3D, чертежи, отчеты). Демонстрация полного жизненного цикла продукта.</p>` 
        }
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
        read_more: "Lire la suite →",
        cat_cao: "CAO 3D",
        cat_sim: "Simulation & Automatisation",
        cat_robot: "Robotique & IoT",
        cat_data: "IA & Data",
        cat_code: "Programmation",
        cat_erp: "Gestion & ERP",
        download_cv: "Télécharger mon CV",
        exp_title: "Formation & Expérience",
        edu1_date: "Oct. 2024 - Juin 2027 (Prévu)",
        edu1_title: "Cycle d'Ingénieur en Conception et Productique (ICP)",
        edu1_place: "FSTS, Université Hassan 1er, Settat, Maroc",
        edu1_desc: "Admis sur concours. Formation d'excellence axée sur la conception mécanique avancée, l'automatisation industrielle, la robotique et l'optimisation des systèmes de production.",
        edu2_date: "Sept. 2022 - Juin 2024",
        edu2_title: "DEUST en MIPC (Mathématiques, Informatique, Physique, Chimie)",
        edu2_place: "FST Marrakech, Université Cadi Ayyad, Maroc",
        edu2_desc: "Acquisition de bases scientifiques et techniques solides, avec une introduction à la programmation, la modélisation et la résolution de problèmes complexes.",
        edu3_date: "2022",
        edu3_title: "Baccalauréat",
        edu3_place: "Lycée Horizon International Ouagadougou",
        edu3_desc: "Obtention du diplôme avec la mention Bien."
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
        read_more: "Read more →",
        cat_cao: "3D CAD",
        cat_sim: "Simulation & Automation",
        cat_robot: "Robotics & IoT",
        cat_data: "AI & Data",
        cat_code: "Programming",
        cat_erp: "Management & ERP",
        download_cv: "Download my CV",
         exp_title: "Education & Experience",
        edu1_date: "Oct. 2024 - Jun. 2027 (Expected)",
        edu1_title: "Engineering Degree in Design and Manufacturing (ICP)",
        edu1_place: "FSTS, Hassan 1st University, Settat, Morocco",
        edu1_desc: "Admitted via competitive exam. Excellent training focused on advanced mechanical design, industrial automation, robotics, and production system optimization.",
        edu2_date: "Sep. 2022 - Jun. 2024",
        edu2_title: "DEUST in MIPC (Mathematics, Computer Science, Physics, Chemistry)",
        edu2_place: "FST Marrakech, Cadi Ayyad University, Morocco",
        edu2_desc: "Acquisition of strong scientific and technical foundations, with an introduction to programming, modeling, and complex problem-solving.",
        edu3_date: "2022",
        edu3_title: "High School Diploma (Baccalauréat)",
        edu3_place: "High School Horizon International Ouagadougou",
        edu3_desc: "Obtained the diploma with Honors (Mention Bien)."
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
        read_more: "Читать далее →",
        cat_cao: "3D САПР",
        cat_sim: "Моделирование и автоматизация",
        cat_robot: "Робототехника и IoT",
        cat_data: "ИИ и Данные",
        cat_code: "Программирование",
        cat_erp: "Управление и ERP",
        download_cv: "Скачать мое резюме",
        exp_title: "Образование и Опыт",
        edu1_date: "Окт. 2024 - Июн. 2027 (Ожидается)",
        edu1_title: "Диплом инженера по проектированию и производству (ICP)",
        edu1_place: "FSTS, Университет Хассана I, Сеттат, Марокко",
        edu1_desc: "Поступление по результатам конкурсного экзамена. Отличная подготовка, ориентированная на передовое механическое проектирование, промышленную автоматизацию, робототехнику и оптимизацию производственных систем.",
        edu2_date: "Сен. 2022 - Июн. 2024",
        edu2_title: "DEUST по направлению MIPC (Математика, Информатика, Физика, Химия)",
        edu2_place: "FST Марракеш, Университет Кади Айяд, Марокко",
        edu2_desc: "Получение прочных научных и технических основ, включая знакомство с программированием, моделированием и решением сложных задач.",
        edu3_date: "2022",
        edu3_title: "Диплом о среднем образовании (Бакалавриат)",
        edu3_place: "Lycée Horizon International Ouagadougou",
        edu3_desc: "Получение диплома с отличием (Mention Bien)."
    }
};

// 3. FONCTION POUR CHANGER LA LANGUE
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    document.documentElement.lang = lang;
}

// 4. FONCTIONS POUR LA FENÊTRE MODALE DES PROJETS
function openModal(projectId) {
    const lang = localStorage.getItem('preferredLanguage') || 'fr';
    const project = projectsData[projectId][lang];
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').innerHTML = project.desc;
    document.getElementById('modal-img').src = project.img; 
    
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

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

document.addEventListener('DOMContentLoaded', function() {
    const modalImg = document.getElementById("expandedImage");
    if (modalImg) {
        modalImg.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
});
