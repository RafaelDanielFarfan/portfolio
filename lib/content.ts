export type Lang = "en" | "es";
export type L10n = Record<Lang, string>;
export type Role = "qa" | "fs";

export const links = {
  email: "rafaeldanielfarfan@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafael-daniel-farfan-guzman/",
  github: "https://github.com/RafaelDanielFarfan",
};

export const ui = {
  navAbout: { en: "About", es: "Sobre mí" },
  navExp: { en: "Experience", es: "Experiencia" },
  navProj: { en: "Projects", es: "Proyectos" },
  navSkills: { en: "Skills", es: "Habilidades" },
  navContact: { en: "Contact", es: "Contacto" },
  ctaWork: { en: "See my work", es: "Ver mi trabajo" },
  ctaCv: { en: "Download CV", es: "Descargar CV" },
  aboutP: {
    en: "Software engineer with 4 years across QA automation and full-stack development. I design API, UI and regression suites with Playwright, Selenium, Postman and JMeter in CI/CD, and I build web and mobile products with React, Flutter, Java/Spring Boot and NestJS. Coming from 9 years as a Civil Engineer, I bring structured problem solving to software delivery. SMPC-certified Scrum practitioner, daily user of Claude Code.",
    es: "Ingeniero de software con 4 años entre automatización QA y desarrollo full-stack. Diseño suites de API, UI y regresión con Playwright, Selenium, Postman y JMeter en CI/CD, y construyo productos web y móviles con React, Flutter, Java/Spring Boot y NestJS. Vengo de 9 años como Ingeniero Civil, y aplico resolución estructurada de problemas al desarrollo de software. Scrum certificado (SMPC), usuario diario de Claude Code.",
  },
  aboutH: { en: "About", es: "Sobre mí" },
  expH: { en: "Experience", es: "Experiencia" },
  present: { en: "Present", es: "Actualidad" },
  projH: { en: "Projects", es: "Proyectos" },
  featured: { en: "Featured", es: "Destacado" },
  prod: { en: "Live in production", es: "En producción" },
  liveDemo: { en: "Live demo", es: "Ver sitio" },
  code: { en: "Code", es: "Código" },
  more: { en: "More on GitHub →", es: "Más en GitHub →" },
  skillsH: { en: "Skills", es: "Habilidades" },
  infoName: { en: "Name", es: "Nombre" },
  infoLoc: { en: "Location", es: "Ubicación" },
  infoExp: { en: "Experience", es: "Experiencia" },
  infoRole: { en: "Role", es: "Rol" },
  infoLang: { en: "Languages", es: "Idiomas" },
  infoLangV: { en: "Spanish (native) / English (B2)", es: "Español (nativo) / Inglés (B2)" },
  infoExpV: { en: "4+ years", es: "4+ años" },
  portfolioBtn: { en: "Portfolio", es: "Portafolio" },
  contactBtn: { en: "Get in touch", es: "Contáctame" },
  stack: { en: "Tech Stack", es: "Tech Stack" },
  contactH: { en: "Contact", es: "Contacto" },
  contactP: {
    en: "Open to SDET, QE Automation and Full Stack roles. Let's talk.",
    es: "Abierto a roles SDET, QE Automation y Full Stack. Hablemos.",
  },
  infoRoleV: { en: "QA Automation Engineer · Full Stack Developer", es: "QA Automation Engineer · Desarrollador Full Stack" },
  selectRole: { en: "View profile", es: "Ver perfil" },
  projFilterNote: { en: "Showing projects for", es: "Mostrando proyectos de" },
} satisfies Record<string, L10n>;


export const roleLabel: Record<Role, L10n> = {
  qa: { en: "QA Automation Engineer", es: "QA Automation Engineer" },
  fs: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
};

export const roleContent: Record<Role, { eyebrow: L10n; lead: L10n; ghost: string; cv: string }> = {
  qa: {
    eyebrow: { en: "SDET / QE Automation Engineer", es: "SDET / Ingeniero de Automatización QE" },
    lead: {
      en: "I build reliable test automation and backend systems. 4 years across Java/Spring Boot, Python, React and Playwright, with CI/CD and AI-assisted workflows.",
      es: "Construyo automatización de pruebas y sistemas backend confiables. 4 años con Java/Spring Boot, Python, React y Playwright, con CI/CD y flujos asistidos por IA.",
    },
    ghost: "SDET",
    cv: "Rafael_Daniel_Farfan_SDET.pdf",
  },
  fs: {
    eyebrow: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    lead: {
      en: "I build full-stack products end to end: React and Flutter front ends, NestJS and Java/Spring Boot back ends, deployed on AWS. 4 years shipping production apps and microservices.",
      es: "Construyo productos full-stack de punta a punta: front ends en React y Flutter, back ends en NestJS y Java/Spring Boot, desplegados en AWS. 4 años entregando apps y microservicios en producción.",
    },
    ghost: "FULL STACK",
    cv: "Rafael_Daniel_Farfan_FullStack.pdf",
  },
};

export const statList: Record<Role, { value: string; label: L10n }[]> = {
  qa: [
    { value: "85%", label: { en: "less manual testing", es: "menos pruebas manuales" } },
    { value: "30%", label: { en: "shorter release cycle", es: "ciclo de release más corto" } },
  ],
  fs: [
    { value: "25%", label: { en: "less front-end time with reusable React components", es: "menos tiempo de front-end con componentes React reutilizables" } },
    { value: "4", label: { en: "decoupled Spring Boot microservices", es: "microservicios Spring Boot desacoplados" } },
    { value: "3", label: { en: "platforms from one Flutter codebase (Android, iOS, Web)", es: "plataformas desde un código Flutter (Android, iOS, Web)" } },
  ],
};

export const jobs: { when: L10n; title: string; bullets: L10n[] }[] = [
  {
    when: { en: "Oct 2025 – Present", es: "Oct 2025 – Actualidad" },
    title: "QE Automation Engineer · FLYR",
    bullets: [
      {
        en: "Leading an AI-driven Selenium-to-Playwright migration using parallel Claude Code agents and Playwright MCP.",
        es: "Lidero una migración de Selenium a Playwright asistida por IA con agentes paralelos de Claude Code y Playwright MCP.",
      },
      {
        en: "Automated API testing with Postman and JMeter in GitHub Actions on every pull request.",
        es: "Pruebas automatizadas de API con Postman y JMeter en GitHub Actions en cada pull request.",
      },
      {
        en: "Built Selenium/Python regression suites in CI/CD, cutting manual testing time by 85%.",
        es: "Suites de regresión Selenium/Python en CI/CD, reduciendo 85% el tiempo de pruebas manuales.",
      },
    ],
  },
  {
    when: { en: "Nov 2022 – Oct 2025", es: "Nov 2022 – Oct 2025" },
    title: "Full Stack Developer · Quality Vision Technologies",
    bullets: [
      {
        en: "Reusable React component libraries: front-end time down 25% across 3 projects.",
        es: "Librerías de componentes React reutilizables: 25% menos tiempo de front-end en 3 proyectos.",
      },
      {
        en: "Cross-platform Flutter apps (Android, iOS, Web) optimized for low- and mid-end devices.",
        es: "Apps Flutter multiplataforma (Android, iOS, Web) optimizadas para dispositivos de gama baja y media.",
      },
      {
        en: "Python modules on Odoo ERP for accounting and HR processing.",
        es: "Módulos Python en Odoo ERP para procesos contables y de RRHH.",
      },
      {
        en: "Selenium, Playwright and Postman suites: release cycle down 30%.",
        es: "Suites con Selenium, Playwright y Postman: ciclo de release 30% más corto.",
      },
    ],
  },
];

export interface Project {
  name: string;
  href?: string;
  desc: L10n;
  live?: string;
  tags: string;
  roles: Role[];
  featured?: Role[];
  production?: boolean;
}

export const projects: Project[] = [
  {
    name: "QA Automation Lab",
    roles: ["qa","fs"],
    featured: ["qa","fs"],
    href: "https://github.com/RafaelDanielFarfan/qe-automation-lab",
    live: "https://rafaeldanielfarfan.github.io/qe-automation-lab/",
    desc: {
      en: "Bilingual (ES/EN) self-hosted study platform for Senior Test Automation interviews: 9-phase path, 29 in-browser coding exercises (JS, TS, Python via Pyodide), 45 interview questions, mock interview and an AI tutor. Tested end to end with Playwright + TypeScript (Page Object Model, custom fixtures, hermetic network, desktop and mobile projects).",
      es: "Plataforma de estudio bilingüe (ES/EN) para entrevistas de Senior Test Automation: ruta de 9 fases, 29 ejercicios de código en el navegador (JS, TS, Python con Pyodide), 45 preguntas de entrevista, simulacro y tutor con IA. Probada end to end con Playwright + TypeScript (Page Object Model, fixtures, red hermética, proyectos desktop y móvil).",
    },
    tags: "Playwright · TypeScript · Pyodide · Web Workers · GitHub",
  },
  {
    name: "Flight Booking Test Automation",
    roles: ["qa"],
    featured: ["qa"],
    href: "https://github.com/RafaelDanielFarfan/automation-test",
    desc: {
      en: "End-to-end test suite for a flight booking web app with Python, Pytest and Selenium. Page Object Model, Allure reporting, SQLite storage of test results, cross-browser (Chrome, Edge) and a scalable base for new suites.",
      es: "Suite de pruebas end to end para una app web de reserva de vuelos con Python, Pytest y Selenium. Page Object Model, reportes con Allure, resultados guardados en SQLite, multi-navegador (Chrome, Edge) y base escalable para nuevas suites.",
    },
    tags: "Python · Pytest · Selenium · Allure · POM · GitHub",
  },
  {
    name: "Food Court Microservices",
    roles: ["fs"],
    href: "https://gitlab.com/rafael-daniel-farfan/microservice-trazabilidad",
    desc: {
      en: "4 decoupled Java/Spring Boot microservices, Hexagonal Architecture and TDD. MySQL, MongoDB, RabbitMQ, Twilio.",
      es: "4 microservicios desacoplados en Java/Spring Boot, Arquitectura Hexagonal y TDD. MySQL, MongoDB, RabbitMQ, Twilio.",
    },
    tags: "Java · Spring Boot · GitLab",
  },
  {
    name: "Brothers Rent a Car",
    roles: ["fs"],
    production: true,
    featured: ["fs"],
    live: "https://www.brothersrentacar.online/",
    desc: {
      en: "Full-stack car rental booking platform in production. React, REST APIs, AWS.",
      es: "Plataforma full-stack de reservas de alquiler de autos en producción. React, REST APIs, AWS.",
    },
    tags: "React · AWS",
  },
  {
    name: "Pontalida",
    roles: ["fs"],
    production: true,
    live: "https://www.pontalida.com/",
    desc: {
      en: "Community marketplace connecting local businesses in Rubio, Táchira, Venezuela.",
      es: "Marketplace comunitario que conecta negocios locales en Rubio, Táchira, Venezuela.",
    },
    tags: "React · NestJS · PostgreSQL",
  },
  {
    name: "selenium-java-framework",
    roles: ["qa"],
    href: "https://github.com/RafaelDanielFarfan/selenium-java-framework",
    desc: { en: "Selenium test framework in Java.", es: "Framework de pruebas Selenium en Java." },
    tags: "Java · Selenium · GitHub",
  },
  {
    name: "User-Jwt",
    roles: ["fs"],
    href: "https://github.com/RafaelDanielFarfan/User-Jwt",
    desc: {
      en: "Microservices backend with Spring Boot and OAuth2: JWT login and registration.",
      es: "Backend de microservicios con Spring Boot y OAuth2: login y registro con JWT.",
    },
    tags: "Java · Spring Boot · OAuth2 · GitHub",
  },
];

export const skills: { title: L10n; items: string; focus: Role }[] = [
  { title: { en: "Testing & QA", es: "Pruebas y QA" }, items: "Playwright · Selenium · Postman · JMeter · JUnit · pytest · BDD/Cucumber", focus: "qa" },
  { title: { en: "Languages", es: "Lenguajes" }, items: "Java · Python · JavaScript · TypeScript · Dart · SQL", focus: "qa" },
  { title: { en: "Backend", es: "Backend" }, items: "Spring Boot · Node.js · NestJS · Django · Odoo · Microservices", focus: "fs" },
  { title: { en: "Frontend & Mobile", es: "Frontend y Móvil" }, items: "React · Angular · Flutter · HTML5 · CSS3", focus: "fs" },
  { title: { en: "DevOps & Cloud", es: "DevOps y Nube" }, items: "GitHub Actions · Jenkins · Docker · AWS · GitLab", focus: "qa" },
  { title: { en: "AI-assisted", es: "Asistido por IA" }, items: "Claude Code · Playwright MCP · LLM coding assistants", focus: "qa" },
];
