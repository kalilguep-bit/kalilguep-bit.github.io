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
        img: "scara_robot.jpg",
        tags: ["SolidWorks", "MATLAB", "Simulink", "Simscape Multibody", "Robotique"],
        fr: { 
            title: "Robot SCARA - Contrôle Cinématique", 
            desc: `<p><strong>Contexte :</strong> Projet de robotique avancé combinant conception mécanique, simulation physique et contrôle de trajectoire.</p>
                   <h4>1. Conception Mécanique (CAO)</h4>
                   <p>Modélisation 3D complète d'un robot SCARA sur <strong>SOLIDWORKS</strong>. Dimensionnement précis des corps rigides (Base, C1, C2, C3) et définition des paramètres cinématiques.</p>
                   <h4>2. Simulation Multibody (Simscape)</h4>
                   <p>Export CAD-vers-MATLAB via <strong>Simscape Multibody Link</strong>. Génération automatique du modèle physique avec les corps rigides, les liaisons et configuration des repères de référence.</p>
                   <h4>3. Programmation et Contrôle (Simulink)</h4>
                   <ul>
                       <li><strong>Cinématique Directe (FK) :</strong> Calcul de la position de l'effecteur à partir des angles des joints.</li>
                       <li><strong>Cinématique Inverse (IK) :</strong> Calcul des angles nécessaires pour atteindre une position cible.</li>
                       <li><strong>Trajectoires :</strong> Création de mouvements complexes via Signal Editor et analyse avec Scope.</li>
                   </ul>
                   <h4>4. Résultats</h4>
                   <p>Validation du modèle par simulation de mouvements précis. Démonstration de la maîtrise du cycle complet : CAO → Simulation → Contrôle.</p>` 
        },
        en: { 
            title: "SCARA Robot - Kinematic Control", 
            desc: `<p><strong>Context:</strong> Advanced robotics project combining mechanical design, physical simulation, and trajectory control.</p>
                   <h4>1. Mechanical Design (CAD)</h4>
                   <p>Complete 3D modeling of a SCARA robot in <strong>SOLIDWORKS</strong>. Precise dimensioning of rigid bodies (Base, C1, C2, C3) and definition of kinematic parameters.</p>
                   <h4>2. Multibody Simulation (Simscape)</h4>
                   <p>CAD-to-MATLAB export via <strong>Simscape Multibody Link</strong>. Automatic generation of the physical model with rigid bodies, joints, and configuration of reference frames.</p>
                   <h4>3. Programming and Control (Simulink)</h4>
                   <ul>
                       <li><strong>Forward Kinematics (FK):</strong> Calculating end-effector position from joint angles.</li>
                       <li><strong>Inverse Kinematics (IK):</strong> Calculating required joint angles to reach a target position.</li>
                       <li><strong>Trajectories:</strong> Creating complex movements via Signal Editor and analysis with Scope.</li>
                   </ul>
                   <h4>4. Results</h4>
                   <p>Model validation through precise movement simulation. Demonstration of full lifecycle mastery: CAD → Simulation → Control.</p>` 
        },
        ru: { 
            title: "Робот SCARA - Кинематическое управление", 
            desc: `<p><strong>Контекст:</strong> Продвинутый проект по робототехнике, сочетающий механическое проектирование, физическое моделирование и управление траекторией.</p>
                   <h4>1. Механическое проектирование (САПР)</h4>
                   <p>Полное 3D-моделирование робота SCARA в <strong>SOLIDWORKS</strong>. Точное определение размеров твердых тел (Base, C1, C2, C3) и кинематических параметров.</p>
                   <h4>2. Мультителевая симуляция (Simscape)</h4>
                   <p>Экспорт из САПР в MATLAB через <strong>Simscape Multibody Link</strong>. Автоматическая генерация физической модели с твердыми телами, сочленениями и настройкой опорных систем координат.</p>
                   <h4>3. Программирование и управление (Simulink)</h4>
                   <ul>
                       <li><strong>Прямая кинематика (PK):</strong> Вычисление положения схвата по углам сочленений.</li>
                       <li><strong>Обратная кинематика (OK):</strong> Вычисление необходимых углов для достижения целевой позиции.</li>
                       <li><strong>Траектории:</strong> Создание сложных движений через Signal Editor и анализ с помощью Scope.</li>
                   </ul>
                   <h4>4. Результаты</h4>
                   <p>Валидация модели посредством симуляции точных движений. Демонстрация полного цикла: САПР → Симуляция → Управление.</p>` 
        }
    },
    proj3: {
        img: "iot_powerbi.jpg",
        tags: ["IoT Industriel", "ESP32", "Raspberry Pi", "MQTT", "Node-RED", "PostgreSQL", "Power BI", "Maintenance Prédictive"],
        fr: { 
            title: "Maintenance Prédictive IoT & IA - Surveillance Vibratoire", 
            desc: `<p><strong>Contexte :</strong> Architecture IoT industrielle complète pour la maintenance prédictive d'équipements rotatifs. Interception des défaillances mécaniques avant panne via l'analyse des signatures vibratoires.</p>
                   <h4>1. Architecture Hardware & IoT Edge</h4>
                   <ul>
                       <li><strong>Nœuds ESP32 + MPU6050 :</strong> Accéléromètres tri-axiaux capturant les vibrations X, Y, Z en temps réel via bus I2C.</li>
                       <li><strong>Passerelle Raspberry Pi :</strong> Hub d'agrégation exécutant le middleware Node-RED et le broker MQTT Mosquitto.</li>
                   </ul>
                   <h4>2. Pipeline de Données (MQTT → Node-RED → PostgreSQL)</h4>
                   <ul>
                       <li><strong>Protocole MQTT :</strong> Transmission ultra-légère des séries temporelles depuis les capteurs.</li>
                       <li><strong>Orchestration Node-RED :</strong> Filtrage, routage et dashboard temps réel des amplitudes vibratoires.</li>
                       <li><strong>Double persistance :</strong> Archivage CSV haute vitesse + Base PostgreSQL pour requêtes complexes.</li>
                   </ul>
                   <h4>3. Business Intelligence (Power BI)</h4>
                   <p>Connexion directe Power BI → PostgreSQL avec requêtes SQL d'agrégation (moyennes glissantes). Tableaux de bord dynamiques affichant les spectres d'accélération, alertes de seuil et tendances d'usure.</p>
                   <h4>4. Diagnostic Technique</h4>
                   <ul>
                       <li><strong>Axe X ≈ 3g :</strong> Vibrations horizontales (balourd potentiel)</li>
                       <li><strong>Axe Y ≈ -0.87g :</strong> Inclinaison statique du capteur</li>
                       <li><strong>Axe Z ≈ 9.5g :</strong> Gravité + vibrations verticales</li>
                   </ul>
                   <h4>5. Impact Industriel</h4>
                   <p>Passage de la maintenance préventive à la maintenance conditionnelle. Réduction des arrêts de production et solution extensible (ajout capteurs température, courant). Données structurées pour futurs modèles ML/IA.</p>` 
        },
        en: { 
            title: "IoT & AI Predictive Maintenance - Vibration Monitoring", 
            desc: `<p><strong>Context:</strong> Complete industrial IoT architecture for predictive maintenance of rotating equipment. Intercepting mechanical failures before breakdown through vibration signature analysis.</p>
                   <h4>1. Hardware Architecture & IoT Edge</h4>
                   <ul>
                       <li><strong>ESP32 Nodes + MPU6050:</strong> Tri-axial accelerometers capturing X, Y, Z vibrations in real-time via I2C bus.</li>
                       <li><strong>Raspberry Pi Gateway:</strong> Aggregation hub running Node-RED middleware and MQTT Mosquitto broker.</li>
                   </ul>
                   <h4>2. Data Pipeline (MQTT → Node-RED → PostgreSQL)</h4>
                   <ul>
                       <li><strong>MQTT Protocol:</strong> Ultra-lightweight transmission of time series from sensors.</li>
                       <li><strong>Node-RED Orchestration:</strong> Filtering, routing and real-time dashboard of vibration amplitudes.</li>
                       <li><strong>Dual persistence:</strong> High-speed CSV archiving + PostgreSQL database for complex queries.</li>
                   </ul>
                   <h4>3. Business Intelligence (Power BI)</h4>
                   <p>Direct Power BI → PostgreSQL connection with SQL aggregation queries (moving averages). Dynamic dashboards displaying acceleration spectra, threshold alerts and wear trends.</p>
                   <h4>4. Technical Diagnosis</h4>
                   <ul>
                       <li><strong>X Axis ≈ 3g:</strong> Horizontal vibrations (potential unbalance)</li>
                       <li><strong>Y Axis ≈ -0.87g:</strong> Static sensor inclination</li>
                       <li><strong>Z Axis ≈ 9.5g:</strong> Gravity + vertical vibrations</li>
                   </ul>
                   <h4>5. Industrial Impact</h4>
                   <p>Transition from preventive to condition-based maintenance. Reduced production downtime and scalable solution (adding temperature, current sensors). Structured data for future ML/AI models.</p>` 
        },
        ru: { 
            title: "Предиктивное обслуживание IoT и ИИ - Вибромониторинг", 
            desc: `<p><strong>Контекст:</strong> Полная промышленная IoT-архитектура для предиктивного обслуживания вращающегося оборудования. Предотвращение механических поломок посредством анализа вибрационных сигнатур.</p>
                   <h4>1. Аппаратная архитектура и IoT Edge</h4>
                   <ul>
                       <li><strong>Узлы ESP32 + MPU6050:</strong> Трехосевые акселерометры, фиксирующие вибрации X, Y, Z в реальном времени через шину I2C.</li>
                       <li><strong>Шлюз Raspberry Pi:</strong> Хаб агрегации, запускающий middleware Node-RED и брокер MQTT Mosquitto.</li>
                   </ul>
                   <h4>2. Конвейер данных (MQTT → Node-RED → PostgreSQL)</h4>
                   <ul>
                       <li><strong>Протокол MQTT:</strong> Сверхлегкая передача временных рядов с датчиков.</li>
                       <li><strong>Оркестрация Node-RED:</strong> Фильтрация, маршрутизация и панель мониторинга амплитуд вибрации в реальном времени.</li>
                       <li><strong>Двойное сохранение:</strong> Высокоскоростное архивирование CSV + база данных PostgreSQL для сложных запросов.</li>
                   </ul>
                   <h4>3. Бизнес-аналитика (Power BI)</h4>
                   <p>Прямое подключение Power BI → PostgreSQL с SQL-запросами агрегации (скользящие средние). Динамические панели отображения спектров ускорения, предупреждений о порогах и тенденций износа.</p>
                   <h4>4. Техническая диагностика</h4>
                   <ul>
                       <li><strong>Ось X ≈ 3g:</strong> Горизонтальные вибрации (возможный дисбаланс)</li>
                       <li><strong>Ось Y ≈ -0.87g:</strong> Статический наклон датчика</li>
                       <li><strong>Ось Z ≈ 9.5g:</strong> Гравитация + вертикальные вибрации</li>
                   </ul>
                   <h4>5. Промышленное воздействие</h4>
                   <p>Переход от профилактического обслуживания к обслуживанию по состоянию. Сокращение простоев производства и масштабируемое решение (добавление датчиков температуры, тока). Структурированные данные для будущих моделей ML/ИИ.</p>` 
        }
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
        proj1_title: "Biodigesteur CSTR 1000L",
        proj1_short: "Conception CAO et Simulation FEA.",
        proj2_title: "Robot SCARA - Contrôle Cinématique",
        proj2_short: "Modélisation CAD, Simscape et contrôle de trajectoire.",
        proj3_title: "Maintenance Prédictive IoT & IA",
        proj3_short: "Surveillance vibratoire industrielle (ESP32, MQTT, Power BI).",
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
        proj1_title: "1000L CSTR Biodigester",
        proj1_short: "CAD Design and FEA Simulation.",
        proj2_title: "SCARA Robot - Kinematic Control",
        proj2_short: "CAD modeling, Simscape and trajectory control.",
        proj3_title: "IoT & AI Predictive Maintenance",
        proj3_short: "Industrial vibration monitoring (ESP32, MQTT, Power BI).",
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
        proj1_title: "Биореактор CSTR 1000L",
        proj1_short: "3D-проектирование и FEA-моделирование.",
        proj2_title: "Робот SCARA - Кинематическое управление",
        proj2_short: "3D-моделирование и эргономичное прототипирование.",
        proj3_title: "Предиктивное обслуживание IoT и ИИ",
        proj3_short: "Промышленный вибромониторинг (ESP32, MQTT, Power BI).",
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
    
    // On récupère d'abord l'objet complet du projet
    const projectData = projectsData[projectId];
    // Ensuite on récupère la partie correspondant à la langue choisie
    const project = projectData[lang];
    
    // On affiche le titre et la description (qui sont dans la partie langue)
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').innerHTML = project.desc;
    
    // On affiche l'image et les tags (qui sont à la racine du projet, pas dans la langue)
    document.getElementById('modal-img').src = projectData.img; 
    
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    projectData.tags.forEach(tag => {
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
