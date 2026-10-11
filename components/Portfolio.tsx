"use client";

import { useEffect, useState } from "react";
import { jobs, links, projects, roleContent, roleLabel, skills, statList, ui, type Lang, type Role } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);
const GitLabIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="m15.7 6.2-.02-.04-2.2-5.74a.57.57 0 0 0-1.08.05L10.9 5.2H5.1L3.6.47a.57.57 0 0 0-1.08-.05L.32 6.16l-.02.04a4.08 4.08 0 0 0 1.35 4.72l.01.01 3.35 2.5 1.66 1.26 1 .77a.68.68 0 0 0 .82 0l1-.77 1.66-1.26 3.37-2.52a4.08 4.08 0 0 0 1.38-4.7z" />
  </svg>
);
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M0 1.15C0 .52.52 0 1.17 0h13.66C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.17 1.15H1.17C.52 16 0 15.48 0 14.85zM4.94 13.4V6.2H2.55v7.2zM3.75 5.2c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25S2.4 3.24 2.4 3.95c0 .7.52 1.25 1.33 1.25zM13.6 13.4V9.27c0-2.21-1.18-3.24-2.75-3.24-1.27 0-1.84.7-2.16 1.19V6.2H6.3c.03.68 0 7.2 0 7.2h2.39V9.38c0-.21.01-.43.08-.58.17-.43.57-.88 1.23-.88.87 0 1.21.66 1.21 1.63v3.85z" />
  </svg>
);
const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const roles: Role[] = ["qa", "fs"];

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const [role, setRole] = useState<Role>("qa");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const saved = read("lang");
    setLang(saved === "es" || saved === "en" ? saved : navigator.language.startsWith("es") ? "es" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "es" : "en";
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  };

  const t = (k: keyof typeof ui) => ui[k][lang];
  const rc = roleContent[role];
  const cv = `${basePath}/${rc.cv}`;
  const closeMenu = () => setMenu(false);
  const visible = projects.filter((p) => p.roles.includes(role));
  const orderedSkills = [...skills].sort((a, b) => Number(b.focus === role) - Number(a.focus === role));
  const switcher = (
    <div className="switch" data-role={role} role="group" aria-label={t("selectRole")}>
      {roles.map((r) => (
        <button key={r} type="button" aria-pressed={role === r} className={role === r ? "on" : ""} onClick={() => setRole(r)}>
          {roleLabel[r][lang]}
        </button>
      ))}
    </div>
  );
  const info: [string, string][] = [
    [t("infoName"), "Rafael Daniel Farfán"],
    [t("infoRole"), t("infoRoleV")],
    [t("infoLoc"), "Colombia"],
    [t("infoExp"), t("infoExpV")],
    [t("infoLang"), t("infoLangV")],
  ];

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo" aria-label="Home">
          <span>R</span>
          <span>D</span>
        </a>
        <nav id="main-nav" className={menu ? "open" : ""}>
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>{t("navAbout")}</a>
          <a href="#experience" onClick={closeMenu}>{t("navExp")}</a>
          <a href="#projects" onClick={closeMenu}>{t("navProj")}</a>
          <a href="#skills" onClick={closeMenu}>{t("navSkills")}</a>
          <a href="#contact" onClick={closeMenu}>{t("navContact")}</a>
        </nav>
        <div className="tools">
          <button className="lang" onClick={toggleLang} aria-label="Language">{lang === "en" ? "ES" : "EN"}</button>
          <a className="pill contact-pill" href="#contact">{t("navContact")}</a>
          <button
            type="button"
            className={`burger${menu ? " open" : ""}`}
            aria-label="Menu"
            aria-expanded={menu}
            aria-controls="main-nav"
            onClick={() => setMenu((m) => !m)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="vert vert-left">
            <i />
            <span>SDET · Full Stack</span>
            <i />
          </div>

          <div className="portrait">
            <div className="aura" aria-hidden="true" />
            <div className={`vert-title${role === "fs" ? " long" : ""}`} aria-hidden="true">{rc.ghost}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${basePath}/portrait.webp`} alt="Rafael Daniel Farfán" width={900} height={855} />
            <h1>
              <span>Rafael</span>
              <span>Daniel</span>
            </h1>
          </div>

          <div className="hero-copy">
            {switcher}
            <p className="tag">{rc.eyebrow[lang]}</p>
            <p className="lead">{rc.lead[lang]}</p>
            <div className="cta">
              <a className="pill solid" href="#projects">{t("portfolioBtn")}</a>
              <a className="pill" href={cv} download target="_blank" rel="noopener noreferrer">{t("ctaCv")}</a>
            </div>
          </div>

          <ul className="social" aria-label="Social">
            <li><a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a></li>
            <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a></li>
            <li><a href={`mailto:${links.email}`} aria-label="Email"><MailIcon /></a></li>
          </ul>
        </section>

        <section id="about">
          <h2>{t("aboutH")}</h2>
          <div className="about">
            <div>
              <p>{t("aboutP")}</p>
              <dl className="info">
                {info.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="stats">
              {statList[role].map((s) => (
                <div key={s.value}>
                  <b>{s.value}</b>
                  <span>{s.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>{t("expH")}</h2>
          {jobs.map((j) => (
            <article className="job" key={j.title}>
              <div className="when">{j.when[lang]}</div>
              <div>
                <h3>{j.title}</h3>
                <ul>
                  {j.bullets.map((b) => (
                    <li key={b.en}>{b[lang]}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section id="projects">
          <h2>{t("projH")}</h2>
          {switcher}
          <div className="grid">
            {visible.map((p) => {
              const featured = p.featured?.includes(role);
              const main = p.live ?? p.href;
              const gitlab = p.href?.includes("gitlab");
              return (
                <article key={p.name} className={`card${featured ? " featured" : ""}`}>
                  {featured && <span className="badge">{t("featured")}</span>}
                  {p.production && <span className="prod"><i aria-hidden="true" />{t("prod")}</span>}
                  <h3>
                    <a className="stretch" href={main} target="_blank" rel="noopener noreferrer">
                      {p.name}
                      {p.live && <span className="ext"> ↗</span>}
                    </a>
                  </h3>
                  <p>{p.desc[lang]}</p>
                  <ul className="chips">{p.tags.split(" · ").map((c) => <li key={c}>{c}</li>)}</ul>
                  <div className="actions">
                    {p.live && <span className="visit">{t("liveDemo")} ↗</span>}
                    {p.href && (
                      <a className="pill sm repo" href={p.href} target="_blank" rel="noopener noreferrer">
                        {gitlab ? <GitLabIcon /> : <GitHubIcon />}
                        {gitlab ? "GitLab" : "GitHub"}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="more">
            <a href={links.github} target="_blank" rel="noopener noreferrer">{t("more")}</a>
          </p>
        </section>

        <section id="skills">
          <h2>{t("stack")}</h2>
          <div className="skills">
            {orderedSkills.map((s) => (
              <div key={s.title.en}>
                <h3>{s.title[lang]}</h3>
                <ul className="chips">{s.items.split(" · ").map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>{t("contactH")}</h2>
          <p className="big">{t("contactP")}</p>
          <div className="cta">
            <a className="pill solid" href={`mailto:${links.email}`}>{links.email}</a>
            <a className="pill" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="pill" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Rafael Daniel Farfán · Colombia</footer>
    </>
  );
}
