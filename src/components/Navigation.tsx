import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  useTransition,
  type KeyboardEvent,
} from "react";
import { useI18n } from "../i18n/i18n";

const LINKS = [
  { href: "#impact", index: "01", label: "履历", en: "Track Record" },
  { href: "#works", index: "02", label: "产品", en: "Products" },
  { href: "#systems", index: "03", label: "系统", en: "Systems" },
  { href: "#builder", index: "04", label: "方法", en: "Method" },
  { href: "#creative", index: "05", label: "创作", en: "Creative" },
  { href: "#timeline", index: "06", label: "经历", en: "Path" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const [isLanguagePending, startLanguageTransition] = useTransition();
  const { language, setLanguage, t } = useI18n();
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  function containMenuFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls =
      event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  useEffect(() => {
    setScrolled(window.scrollY > 24);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive("#" + entry.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    [
      "top",
      "impact",
      "works",
      "systems",
      "builder",
      "creative",
      "timeline",
      "contact",
    ].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      dialog.current?.close();
      return;
    }
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 861px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
        <div className="nav__bar">
          <a className="nav__logo" href="#top" aria-label={t("回到顶部")}>
            <span className="nav__logo-dot" aria-hidden="true" />
            {language === "en" ? "Zhiyong Chen" : "陈志勇"}
            <span className="nav__studio">/ STUDIO</span>
          </a>
          <nav className="nav__links" aria-label={t("页面导航")}>
            {LINKS.map((link) => (
              <a
                className="nav__link"
                href={link.href}
                key={link.href}
                aria-current={active === link.href ? "location" : undefined}
              >
                <sup>{link.index}</sup>
                {language === "en" ? link.en : link.label}
              </a>
            ))}
          </nav>
          <button
            className="nav__language"
            type="button"
            aria-label={language === "en" ? "Switch to Chinese" : "切换到英文"}
            aria-busy={isLanguagePending}
            onClick={() =>
              startLanguageTransition(() =>
                setLanguage(language === "en" ? "zh" : "en"),
              )
            }
          >
            <span className={language === "en" ? "is-active" : undefined}>
              EN
            </span>
            <i aria-hidden="true">/</i>
            <span className={language === "zh" ? "is-active" : undefined}>
              中
            </span>
          </button>
          <a className="nav__cta" href="mailto:chenzy94@sina.com">
            {t("联系我")} ↗
          </a>
          <button
            className="nav__burger"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t("打开菜单")}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
        <motion.div
          className="nav__progress"
          style={{ scaleX: reduce ? scrollYProgress : smoothProgress }}
          aria-hidden="true"
        />
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="nav__dialog"
        aria-label={t("移动端导航")}
        onKeyDown={containMenuFocus}
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="nav__dialog-head">
          <span>DIGITAL STUDIO / INDEX</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("关闭菜单")}
          >
            ×
          </button>
        </div>
        <nav className="nav__dialog-links">
          {LINKS.map((link) => (
            <a
              className="nav__overlay-link"
              href={link.href}
              key={link.href}
              aria-current={active === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              <small>{link.index}</small>
              {language === "en" ? link.en : link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a
            className="nav__overlay-link"
            href="mailto:chenzy94@sina.com"
            onClick={() => setOpen(false)}
          >
            <small>Mail</small>
            {t("联系我")}
          </a>
        </nav>
      </dialog>
    </>
  );
}
