import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { careerCases, impacts } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

export function Impact() {
  const { t } = useI18n();
  const localizedImpacts = useLocalized(impacts);
  const cases = useLocalized(careerCases);
  const [selected, setSelected] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduce = useReducedMotion();
  const active = cases[selected];
  function handleKeys(event: KeyboardEvent) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? cases.length - 1
          : (selected + (event.key === "ArrowRight" ? 1 : -1) + cases.length) %
            cases.length;
    setSelected(next);
    refs.current[next]?.focus();
  }

  return (
    <section className="section impact" id="impact">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">01</span>
            <h2 className="section-head__title">{t("职业基本盘")}</h2>
            <span className="section-head__en">A DECADE OF PRODUCT WORK</span>
          </header>
        </Reveal>
        <Reveal>
          <div className="impact__intro">
            <h3>
              {t("做过的事，")}
              <br />
              <em>{t("留下的改变。")}</em>
            </h3>
            <p>
              {t(
                "从 B 端经营到 C 端体验，从数据分析到 AI 落地。我关心产品怎样进入真实业务，也对交付之后的结果负责。",
              )}
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="impact__grid">
            {localizedImpacts.map((item) => (
              <div className="impact__cell" key={item.label}>
                <span className="impact__value">{item.value}</span>
                <span className="impact__label">{item.label}</span>
                <span className="impact__detail">{item.detail}</span>
                <span className="impact__source">{item.source}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div
            className="case-tabs"
            role="tablist"
            aria-label={t("职业案例")}
            onKeyDown={handleKeys}
          >
            {cases.map((item, i) => (
              <button
                type="button"
                role="tab"
                id={"case-tab-" + item.id}
                key={item.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                aria-selected={i === selected}
                aria-controls="career-panel"
                tabIndex={i === selected ? 0 : -1}
                onClick={() => setSelected(i)}
              >
                <small>{item.index}</small>
                {item.name}
              </button>
            ))}
          </div>
          <div
            className="business-case"
            role="tabpanel"
            id="career-panel"
            aria-labelledby={"case-tab-" + active.id}
            tabIndex={0}
          >
            <motion.div
              className="business-case__story"
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="business-case__eyebrow">{active.category}</span>
              <h3>{active.statement}</h3>
              <p>{active.description}</p>
              <strong>{active.proof}</strong>
              <small>{active.note}</small>
            </motion.div>
            <div className="business-map">
              <div className="business-map__head">
                <span>{active.enName}</span>
                <span>↗</span>
              </div>
              <div className="business-map__metric">
                <strong>{active.metric}</strong>
                <span>{active.metricLabel}</span>
              </div>
              <ol>
                {active.flow.map((step, i) => (
                  <li key={step}>
                    <span>0{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p>{t("业务路径 · 根据实际项目经历整理")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
