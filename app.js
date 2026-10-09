const ES = {
  nav_about: "Sobre mí", nav_exp: "Experiencia", nav_proj: "Proyectos", nav_skills: "Habilidades", nav_contact: "Contacto",
  hero_eyebrow: "SDET / Ingeniero de Automatización QE",
  hero_lead: "Construyo automatización de pruebas y sistemas backend confiables. 4 años con Java/Spring Boot, Python, React y Playwright, con CI/CD y flujos asistidos por IA.",
  cta_work: "Ver mi trabajo", cta_cv: "Descargar CV",
  about_h: "Sobre mí",
  about_p: "Ingeniero de automatización QA con base full-stack. Diseño suites de API, UI y regresión con Playwright, Selenium, Postman y JMeter, integradas en GitHub Actions y Jenkins. Vengo de 9 años como Ingeniero Civil, y aplico resolución estructurada de problemas al desarrollo de software. Scrum certificado (SMPC), usuario diario de Claude Code.",
  stat1: "menos tiempo en scripts de regresión", stat2: "ciclo de release más corto", stat3: "procesamiento contable/RRHH más rápido",
  exp_h: "Experiencia", present: "Actualidad",
  flyr1: "Lidero una migración de Selenium a Playwright asistida por IA con agentes paralelos de Claude Code y Playwright MCP.",
  flyr2: "Pruebas automatizadas de API con Postman y JMeter en GitHub Actions en cada pull request.",
  flyr3: "Suites de regresión Selenium/Python en CI/CD, reduciendo 80% el tiempo de pruebas manuales.",
  qv1: "Librerías de componentes React reutilizables: 25% menos tiempo de front-end en 3 proyectos.",
  qv2: "Apps Flutter multiplataforma (Android, iOS, Web) optimizadas para dispositivos de gama baja y media.",
  qv3: "Módulos Python en Odoo ERP: procesamiento contable y de RRHH 35% más rápido.",
  qv4: "Suites con Selenium, Playwright y Postman: ciclo de release 30% más corto.",
  proj_h: "Proyectos",
  p1: "4 microservicios desacoplados en Java/Spring Boot, Arquitectura Hexagonal y TDD. MySQL, MongoDB, RabbitMQ, Twilio.",
  p2: "Plataforma full-stack de reservas de alquiler de autos en producción. React, REST APIs, AWS.",
  p3: "Marketplace comunitario que conecta negocios locales en Rubio, Táchira, Venezuela.",
  p4: "Plataforma de estudio bilingüe (ES/EN) para entrevistas de Senior Test Automation: ruta de 9 fases, 29 ejercicios de código en el navegador (JS, TS, Python con Pyodide), 45 preguntas de entrevista, simulacro y tutor con IA. Probada end to end con Playwright + TypeScript (Page Object Model, fixtures, red hermética, proyectos desktop y móvil).",
  featured: "Destacado",
  p5: "Framework de pruebas Selenium en Java.",
  p6: "Pruebas de automatización en Python.",
  p7: "Backend de microservicios con Spring Boot y OAuth2: login y registro con JWT.",
  more: "Más en GitHub →",
  skills_h: "Habilidades", s_qa: "Pruebas y QA", s_lang: "Lenguajes", s_be: "Backend", s_fe: "Frontend y Móvil", s_dev: "DevOps y Nube", s_ai: "Asistido por IA",
  contact_h: "Contacto", contact_p: "Abierto a roles SDET y QE Automation. Hablemos."
};
const $ = (s) => document.querySelectorAll(s);
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };

$("[data-i18n]").forEach((el) => (el.dataset.en = el.textContent));
$("[data-href-es]").forEach((el) => (el.dataset.hrefEn = el.getAttribute("href")));

function setLang(l) {
  document.documentElement.lang = l;
  $("[data-i18n]").forEach((el) => {
    el.textContent = l === "es" ? ES[el.dataset.i18n] ?? el.dataset.en : el.dataset.en;
  });
  $("[data-href-es]").forEach((el) => el.setAttribute("href", l === "es" ? el.dataset.hrefEs : el.dataset.hrefEn));
  document.getElementById("lang").textContent = l === "es" ? "EN" : "ES";
  store.set("lang", l);
}
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  document.getElementById("theme").textContent = t === "dark" ? "☀" : "☾";
  store.set("theme", t);
}

document.getElementById("lang").onclick = () => setLang(document.documentElement.lang === "es" ? "en" : "es");
document.getElementById("theme").onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
document.getElementById("y").textContent = new Date().getFullYear();

setTheme(store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
setLang(store.get("lang") || (navigator.language.startsWith("es") ? "es" : "en"));
