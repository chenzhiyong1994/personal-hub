import { ArrowUpRight, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { archivedProjects, projects, type Project } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

function ClockCover() {
  return (
    <div className="clock-art" aria-hidden="true">
      <span className="clock-art__brand">HUSHWAKE</span>
      <div className="clock-face">
        <span className="clock-face__top">12</span>
        <span className="clock-face__right">3</span>
        <span className="clock-face__bottom">6</span>
        <span className="clock-face__left">9</span>
        <i />
        <b />
        <span className="clock-face__pin" />
      </div>
      <span className="clock-art__time">a softer morning.</span>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { language } = useI18n();
  const zh = language === "zh";
  const dialog = useRef<HTMLDialogElement>(null);
  const [slide, setSlide] = useState(0);
  const images = project.gallery ?? [];
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
    };
  }, []);
  function handleKey(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]"),
    );
    const first = controls[0],
      last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onKeyDown={handleKey}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="project-dialog__inner">
        <header className="project-dialog__head">
          <span>
            {project.category} / {project.status}
          </span>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label={zh ? "关闭项目" : "Close project"}
            autoFocus
          >
            <X size={22} />
          </button>
        </header>
        <div className="project-dialog__layout">
          <div className={"project-dialog__visual tone-" + project.tone}>
            {images.length > 0 ? (
              <img src={images[slide].src} alt={images[slide].alt} />
            ) : (
              <ClockCover />
            )}
            <div className="gallery-caption">
              <p>
                {images[slide]?.caption ??
                  (zh
                    ? "闹钟概念插画，非应用截图"
                    : "Alarm illustration, not an app screenshot")}
              </p>
              {images.length > 1 && (
                <div className="gallery-controls">
                  <button
                    className="icon-button"
                    aria-label={zh ? "上一张图片" : "Previous image"}
                    onClick={() =>
                      setSlide((slide - 1 + images.length) % images.length)
                    }
                  >
                    <ChevronLeft size={19} />
                  </button>
                  <span aria-live="polite">
                    {slide + 1} / {images.length}
                  </span>
                  <button
                    className="icon-button"
                    aria-label={zh ? "下一张图片" : "Next image"}
                    onClick={() => setSlide((slide + 1) % images.length)}
                  >
                    <ChevronRight size={19} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="project-dialog__story">
            <span className="eyebrow">{project.enName}</span>
            <h2 id="project-dialog-title">{project.name}</h2>
            <h3>{project.statement}</h3>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="project-boundary">
              <span>{zh ? "现在做到这里" : "Where it is today"}</span>
              <p>{project.boundary}</p>
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  className="text-link"
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function Works() {
  const { language } = useI18n();
  const zh = language === "zh";
  const items = useLocalized(projects),
    archive = useLocalized(archivedProjects);
  const [filter, setFilter] = useState<"all" | "tools" | "play">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    function revealLinkedProject() {
      const id = window.location.hash.slice(1);
      if (!projects.some((project) => id === `project-${project.id}`)) return;
      setFilter("all");
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView(),
      );
    }
    window.addEventListener("hashchange", revealLinkedProject);
    return () => window.removeEventListener("hashchange", revealLinkedProject);
  }, []);
  const opener = useRef<HTMLButtonElement | null>(null);
  function openProject(id: string, button: HTMLButtonElement) {
    opener.current = button;
    setSelectedId(id);
  }
  function closeProject() {
    setSelectedId(null);
    requestAnimationFrame(() => opener.current?.focus({ preventScroll: true }));
  }
  const selected = items.find((p) => p.id === selectedId);
  const visible = items.filter((p) => filter === "all" || p.group === filter);
  return (
    <section className="section works" id="works">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">
            <span>01 / SELECTED WORK</span>
            <span>2026</span>
          </div>
          <div className="section-intro">
            <h2>
              {zh ? (
                <>
                  从“要不试试”，
                  <br />到<em>真的能用。</em>
                </>
              ) : (
                <>
                  From “what if”
                  <br />
                  to <em>here it is.</em>
                </>
              )}
            </h2>
            <p>
              {zh
                ? "一个写东西的地方，一个记训练的小工具，也有纯粹想试着做的游戏。大多从一个很小的念头开始，边用边改，慢慢长成现在的样子。"
                : "A place to write, a little training log, a game I simply wanted to make. Most began with a small thought, then grew through using them and making them better."}
            </p>
          </div>
        </Reveal>
        <div
          className="work-filters"
          role="group"
          aria-label={zh ? "筛选作品" : "Filter projects"}
        >
          {(
            [
              { id: "all", zh: "全部作品", en: "All work" },
              { id: "tools", zh: "日常工具", en: "Everyday tools" },
              { id: "play", zh: "好玩的实验", en: "Playful experiments" },
            ] as const
          ).map((item) => (
            <button
              type="button"
              key={item.id}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {zh ? item.zh : item.en}
              <sup>
                {item.id === "all"
                  ? items.length
                  : items.filter((p) => p.group === item.id).length}
              </sup>
            </button>
          ))}
          <span className="work-count" role="status">
            {String(visible.length).padStart(2, "0")}{" "}
            {zh ? "件作品" : "PROJECTS"}
          </span>
        </div>
        <div
          className={
            "project-grid" + (filter !== "all" ? " project-grid--filtered" : "")
          }
        >
          {visible.map((project) => (
            <article
              className={"project-card project-card--" + project.cover}
              id={"project-" + project.id}
              key={project.id}
            >
              <button
                type="button"
                className={"project-cover tone-" + project.tone}
                onClick={(event) =>
                  openProject(project.id, event.currentTarget)
                }
                aria-label={
                  (zh ? "打开项目：" : "Open project: ") + project.name
                }
              >
                <span className="project-cover__top">
                  <span>{project.enName}</span>
                  <span>{project.status}</span>
                </span>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <ClockCover />
                )}
                <span className="project-cover__open">
                  <Plus size={19} />
                  <span>{zh ? "看看里面" : "Take a closer look"}</span>
                </span>
              </button>
              <div className="project-card__title">
                <h3>
                  <button
                    onClick={(event) =>
                      openProject(project.id, event.currentTarget)
                    }
                  >
                    {project.name}
                    <ArrowUpRight size={21} />
                  </button>
                </h3>
                <span>{project.category}</span>
              </div>
              <p>{project.statement}</p>
            </article>
          ))}
        </div>
        <details className="archive">
          <summary>
            <span>
              {zh ? "早一些的小实验" : "Earlier experiments"}
              <small>
                {zh
                  ? "还有四个念头，留下了一些东西。"
                  : "Four more ideas that left something behind."}
              </small>
            </span>
            <Plus size={20} />
          </summary>
          <div className="archive__list">
            {archive.map((project) => (
              <div key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
      {selected && (
        <ProjectDialog
          key={selected.id}
          project={selected}
          onClose={closeProject}
        />
      )}
    </section>
  );
}
