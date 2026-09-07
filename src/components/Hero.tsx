import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, projects } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";

const featured = [projects[0], projects[3], projects[6]];

export function Hero() {
  const reduce = useReducedMotion();
  const { language, t } = useI18n();
  const person = useLocalized(profile);
  const work = useLocalized(featured);
  const [selected, setSelected] = useState(0);
  const active = work[selected];
  const fade = (delay: number) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
      </div>
      <div className="hero__inner">
        <motion.div className="hero__masthead" {...fade(0)}>
          <span>
            DIGITAL STUDIO <i>/</i> ZHIYONG CHEN
          </span>
          <span>
            {person.location}{" "}
            <span className="hero__signal" aria-hidden="true" />
          </span>
        </motion.div>
        <div className="hero__composition">
          <div className="hero__copy">
            <motion.p className="hero__eyebrow" {...fade(0.08)}>
              {person.role}
            </motion.p>
            <motion.h1 className="hero__title" {...fade(0.16)}>
              {language === "en" ? (
                <>
                  Make complex
                  <br />
                  things <em>work.</em>
                </>
              ) : (
                <>
                  把复杂的事，
                  <br />
                  做成好用的
                  <br />
                  <em>产品。</em>
                </>
              )}
            </motion.h1>
            <motion.p className="hero__intro" {...fade(0.24)}>
              {person.intro}
            </motion.p>
            <motion.div className="hero__actions" {...fade(0.32)}>
              <a className="studio-button" href="#works">
                {t("探索我的作品")}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="hero__secondary" href="#impact">
                {t("看看职业经历")}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
          <motion.aside
            className="workbench"
            aria-label={t("工作台上的作品")}
            {...fade(0.35)}
          >
            <div className="workbench__top">
              <span>
                <i />
                ON MY WORKBENCH
              </span>
              <span>0{selected + 1} / 03</span>
            </div>
            <div className="workbench__frame" data-project={active.id}>
              <div className="workbench__ruler" aria-hidden="true">
                <span>IDEA → INTERFACE → REALITY</span>
                <ArrowUpRight size={28} />
              </div>
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.imageAlt}
                width={800}
                height={520}
                initial={reduce ? false : { opacity: 0, y: 14, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
              <div className="workbench__caption" aria-live="polite">
                <span>{active.category}</span>
                <strong>{active.name}</strong>
              </div>
            </div>
            <div
              className="workbench__selector"
              role="group"
              aria-label={t("选择预览作品")}
            >
              {work.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={i === selected}
                  onClick={() => setSelected(i)}
                >
                  <span>0{i + 1}</span>
                  {item.name}
                </button>
              ))}
            </div>
            <div className="workbench__signature">
              <img
                src="/avatar.jpg"
                alt={t("陈志勇的头像")}
                width={40}
                height={40}
              />
              <p>
                {t("产品判断，也亲手构建。")}
                <span>HUMAN-LED. AI-ASSISTED.</span>
              </p>
              <span className="workbench__asterisk" aria-hidden="true">
                ✳
              </span>
            </div>
          </motion.aside>
        </div>
        <motion.div className="hero__foot" {...fade(0.45)}>
          <div className="hero__facts">
            {person.facts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          <a href="#impact" className="hero__scroll-link">
            {t("向下探索")}
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
