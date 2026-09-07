import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { projects, type Project } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

const TONE_VAR: Record<Project["tone"], string> = {
  gold: "var(--gold)",
  red: "var(--red)",
  blue: "var(--blue-soft)",
  amber: "var(--orange)",
};

const SOURCE_LABEL = {
  runtime: "LIVE RUNTIME",
  source: "SOURCE-FAITHFUL UI",
  archive: "ARCHIVE ITERATION",
} as const;

const COLLECTIONS = [
  {
    id: "all",
    label: "全部作品",
    projects: projects.map((project) => project.id),
  },
  {
    id: "desktop",
    label: "桌面与工具",
    projects: ["beiyemd", "capsule-office", "hush-wake"],
  },
  {
    id: "ai",
    label: "AI 与工作流",
    projects: ["ai-business-twin", "stack-trail", "bie-ma-le"],
  },
  {
    id: "play",
    label: "互动实验",
    projects: ["arcana-mirror", "unverified-survivors"],
  },
];

function ProjectDossier({ project }: { project: Project }) {
  const { t } = useI18n();

  return (
    <article
      className="dossier"
      id={`dossier-${project.id}`}
      aria-labelledby={`project-tab-${project.id}`}
      style={{ ["--project-accent" as string]: TONE_VAR[project.tone] }}
    >
      <header className="dossier__head">
        <div>
          <span className="dossier__eyebrow">
            PROJECT DOSSIER / {project.index}
          </span>
          <h3>{project.name}</h3>
        </div>
        <p>{project.description}</p>
      </header>

      <div className="dossier__grid">
        <section className="dossier__challenge">
          <span>{t("最初想解决什么")}</span>
          <h4>{project.challenge}</h4>
        </section>

        <section>
          <span>{t("做过的关键选择")}</span>
          <ol className="dossier__decisions">
            {project.decisions?.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ol>
        </section>

        <section>
          <span>{t("我和 AI 怎么分工")}</span>
          <div className="ownership">
            <div>
              <b>{t("我负责")}</b>
              <p>{project.ownership?.human}</p>
            </div>
            <div>
              <b>{t("AI 参与")}</b>
              <p>{project.ownership?.ai}</p>
            </div>
          </div>
        </section>

        <section>
          <span>{t("我怎么确认它真的能用")}</span>
          <ul className="dossier__checks">
            {project.verification?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="dossier__foot">
        <div>
          <span>{t("现在做到哪里")}</span>
          <p>{project.boundary}</p>
          {project.note && <p className="dossier__note">P.S. {project.note}</p>}
        </div>
        {project.links && (
          <div className="dossier__links">
            {project.links.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.href}
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </footer>
    </article>
  );
}

export function Works() {
  const [collection, setCollection] = useState(COLLECTIONS[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const { language, t } = useI18n();
  const localizedProjects = useLocalized(projects);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const visibleProjects = localizedProjects.filter((project) =>
    collection.projects.includes(project.id),
  );
  const active = visibleProjects[activeIndex];
  const gallery = active.gallery ?? [];
  const resolvedSlideIndex = Math.min(
    slideIndex,
    Math.max(gallery.length - 1, 0),
  );
  const slide = gallery[resolvedSlideIndex];

  const showSlide = (index: number) => {
    if (gallery.length === 0) return;
    setSlideIndex((index + gallery.length) % gallery.length);
  };

  const selectProject = (index: number) => {
    if (index === activeIndex) return;
    setSlideIndex(0);
    setExpanded(false);
    setActiveIndex(index);
  };

  const handleTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let next = activeIndex;
    if (event.key === "ArrowDown")
      next = (activeIndex + 1) % visibleProjects.length;
    if (event.key === "ArrowUp")
      next =
        (activeIndex - 1 + visibleProjects.length) % visibleProjects.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = visibleProjects.length - 1;
    selectProject(next);
    tabRefs.current[next]?.focus();
  };

  const handleGalleryKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (
      gallery.length < 2 ||
      !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
    )
      return;
    event.preventDefault();
    if (event.key === "ArrowLeft") showSlide(resolvedSlideIndex - 1);
    if (event.key === "ArrowRight") showSlide(resolvedSlideIndex + 1);
    if (event.key === "Home") showSlide(0);
    if (event.key === "End") showSlide(gallery.length - 1);
  };

  return (
    <section className="section project-lab" id="works">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">02</span>
            <h2 className="section-head__title">{t("产品实践")}</h2>
            <span className="section-head__en">
              Selected Work — Ideas Taken Far Enough to Test
            </span>
          </header>
        </Reveal>

        <Reveal>
          <div className="project-lab__intro">
            <p>
              {t(
                "工作项目有人定目标、有人排期。这里的八个项目，大多只是我某天冒出的一个念头：要不做个东西试试？没人催，我就自己把界面、代码和那些意外报错一点点补齐。做成什么样、为什么停在这里，也都如实放着。",
              )}
            </p>
            <span>8 PROJECTS / REAL SCREENS INSIDE</span>
          </div>
        </Reveal>

        <div
          className="project-filters"
          role="group"
          aria-label={t("筛选作品")}
        >
          {COLLECTIONS.map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={collection.id === item.id}
              onClick={() => {
                setCollection(item);
                setActiveIndex(0);
                setSlideIndex(0);
                setExpanded(false);
              }}
            >
              {t(item.label)}
            </button>
          ))}
          <span aria-live="polite">
            {visibleProjects.length} / {projects.length} {t("件作品")}
          </span>
        </div>
        <div className="project-browser">
          <Reveal>
            <div
              className="project-index"
              role="tablist"
              aria-label={t("项目列表")}
              aria-orientation="vertical"
              onKeyDown={handleTabsKeyDown}
            >
              {visibleProjects.map((project, index) => (
                <button
                  className="project-index__item"
                  id={`project-tab-${project.id}`}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls="project-stage"
                  tabIndex={index === activeIndex ? 0 : -1}
                  key={project.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  onClick={() => selectProject(index)}
                  onFocus={() => selectProject(index)}
                >
                  <span className="project-index__number">{project.index}</span>
                  <span className="project-index__name">
                    {project.name}
                    <small>{project.enName}</small>
                  </span>
                  <span className="project-index__type">
                    {project.category}
                  </span>
                  <span className="project-index__arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="project-stage"
              id="project-stage"
              role="tabpanel"
              aria-labelledby={`project-tab-${active.id}`}
              style={{ ["--project-accent" as string]: TONE_VAR[active.tone] }}
            >
              <motion.div
                className="project-stage__scene"
                key={active.id}
                initial={reduce ? false : { opacity: 0, scale: 0.985, x: 18 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 1.01, x: -14 }}
                transition={{
                  duration: reduce ? 0 : 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {slide && (
                  <figure
                    className="project-gallery"
                    tabIndex={0}
                    onKeyDown={handleGalleryKeyDown}
                    aria-label={
                      language === "en"
                        ? `${active.name} interface gallery, image ${resolvedSlideIndex + 1} of ${gallery.length}`
                        : `${active.name}界面图集，第 ${resolvedSlideIndex + 1} 张，共 ${gallery.length} 张`
                    }
                  >
                    <div className="project-gallery__viewport">
                      <motion.img
                        key={slide.src}
                        src={slide.src}
                        alt={slide.alt}
                        initial={
                          reduce ? false : { opacity: 0, x: 22, scale: 0.985 }
                        }
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={
                          reduce
                            ? undefined
                            : { opacity: 0, x: -18, scale: 1.01 }
                        }
                        transition={{
                          duration: reduce ? 0 : 0.38,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                      <div
                        className="project-gallery__stamp"
                        aria-hidden="true"
                      >
                        <span>{SOURCE_LABEL[slide.source]}</span>
                        <b>{String(resolvedSlideIndex + 1).padStart(2, "0")}</b>
                      </div>
                      {gallery.length > 1 && (
                        <div className="project-gallery__arrows">
                          <button
                            type="button"
                            onClick={() => showSlide(resolvedSlideIndex - 1)}
                            aria-label={t("上一张界面截图")}
                          >
                            ←
                          </button>
                          <button
                            type="button"
                            onClick={() => showSlide(resolvedSlideIndex + 1)}
                            aria-label={t("下一张界面截图")}
                          >
                            →
                          </button>
                        </div>
                      )}
                    </div>
                    <figcaption>
                      <span>{slide.caption}</span>
                      <span>
                        {String(resolvedSlideIndex + 1).padStart(2, "0")} /{" "}
                        {String(gallery.length).padStart(2, "0")}
                      </span>
                    </figcaption>
                    {gallery.length > 1 && (
                      <div
                        className="project-gallery__rail"
                        aria-label={t("选择界面截图")}
                      >
                        {gallery.map((image, index) => (
                          <button
                            type="button"
                            key={image.src}
                            aria-label={
                              language === "en"
                                ? `View image ${index + 1}: ${image.caption}`
                                : `查看第 ${index + 1} 张：${image.caption}`
                            }
                            aria-current={
                              index === resolvedSlideIndex ? "true" : undefined
                            }
                            onClick={() => showSlide(index)}
                          >
                            <i />
                            <span>{String(index + 1).padStart(2, "0")}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </figure>
                )}

                <div className="project-stage__copy">
                  <div className="project-stage__meta">
                    <span>{active.status}</span>
                    <span>{active.category}</span>
                  </div>
                  <h3>{active.statement}</h3>
                  <p>{active.description}</p>
                  <div className="project-stage__proof">{active.proof}</div>
                  <div className="project-stage__stack">
                    {active.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <button
                className="project-stage__open"
                aria-expanded={expanded}
                aria-controls={`dossier-${active.id}`}
                onClick={() => setExpanded((value) => !value)}
              >
                <span>
                  {expanded ? t("收起项目细节") : t("继续看我怎么做的")}
                </span>
                <i aria-hidden="true">{expanded ? "−" : "+"}</i>
              </button>
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          {expanded && (
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -18 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectDossier project={active} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
