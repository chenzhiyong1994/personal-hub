import { motion, useReducedMotion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { builderModes } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

export function Builder() {
  const [active, setActive] = useState(builderModes[0].id);
  const reduce = useReducedMotion();
  const { t } = useI18n();
  const modes = useLocalized(builderModes);
  const current = modes.find((m) => m.id === active) ?? modes[0];
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const handleKeys = (event: KeyboardEvent) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const index = modes.findIndex((mode) => mode.id === active);
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? modes.length - 1
          : (index + (event.key === "ArrowDown" ? 1 : -1) + modes.length) %
            modes.length;
    setActive(modes[next].id);
    refs.current[next]?.focus();
  };

  return (
    <section className="section builder" id="builder">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">04</span>
            <h2 className="section-head__title">{t("从判断到交付")}</h2>
            <span className="section-head__en">
              Human-led, AI-assisted — Frame to Ship
            </span>
          </header>
        </Reveal>

        <div className="builder__layout">
          <Reveal>
            <div
              className="builder__tabs"
              role="tablist"
              aria-orientation="vertical"
              aria-label={t("构建能力阶段")}
              onKeyDown={handleKeys}
            >
              {modes.map((mode, index) => (
                <button
                  key={mode.id}
                  role="tab"
                  type="button"
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  tabIndex={active === mode.id ? 0 : -1}
                  id={`tab-${mode.id}`}
                  aria-selected={active === mode.id}
                  aria-controls="builder-panel"
                  className="builder__tab"
                  onClick={() => setActive(mode.id)}
                >
                  <span className="builder__tab-order">{mode.order}</span>
                  <span className="builder__tab-label">{mode.label}</span>
                  <span className="builder__tab-en">{mode.english}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="builder__panel"
              role="tabpanel"
              id="builder-panel"
              tabIndex={0}
              aria-labelledby={`tab-${current.id}`}
            >
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="builder__panel-en">{current.english}</div>
                <h3 className="builder__panel-headline">{current.headline}</h3>
                <p className="builder__panel-body">{current.body}</p>
                <div className="builder__outputs">
                  {current.outputs.map((o) => (
                    <span key={o}>{o}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
