import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const progress = reduce ? scrollYProgress : smoothProgress;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="nav__bar">
          <a className="nav__logo" href="#top" aria-label="回到顶部">
            <span className="nav__logo-dot" aria-hidden="true" />
            陈志勇
          </a>
          <nav className="nav__links" aria-label="页面导航">
            {LINKS.map((link) => (
              <a className="nav__link" href={link.href} key={link.href}>
                <sup>{link.index}</sup>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="nav__cta" href="mailto:chenzy94@sina.com">
            联系我
          </a>
          <button
            className="nav__burger"
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
        <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__overlay"
            aria-label="移动端导航"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                className="nav__overlay-link"
                href={link.href}
                onClick={() => setOpen(false)}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduce ? { duration: 0 } : { delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <small>{link.en}</small>
                {link.label}
              </motion.a>
            ))}
            <motion.a
              className="nav__overlay-link"
              href="mailto:chenzy94@sina.com"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { delay: 0.32, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <small>Mail</small>
              联系我
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
