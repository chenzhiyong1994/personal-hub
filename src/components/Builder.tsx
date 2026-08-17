import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { builderModes } from "../data/siteContent";
import { Reveal } from "./Reveal";

export function Builder() {
  const [active, setActive] = useState(builderModes[0].id);
  const reduce = useReducedMotion();
  const current = builderModes.find((m) => m.id === active) ?? builderModes[0];

  return (
    <section className="section builder" id="builder">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">04</span>
            <h2 className="section-head__title">从判断到交付</h2>
            <span className="section-head__en">Human-led, AI-assisted — Frame to Ship</span>
          </header>
        </Reveal>

        <div className="builder__layout">
          <Reveal>
            <div className="builder__tabs" role="tablist" aria-label="构建能力阶段">
              {builderModes.map((mode) => (
                <button
                  key={mode.id}
                  role="tab"
                  id={`tab-${mode.id}`}
                  aria-selected={active === mode.id}
                  aria-controls={`panel-${mode.id}`}
                  className="builder__tab"
                  onClick={() => setActive(mode.id)}
                  onMouseEnter={() => setActive(mode.id)}
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
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
            >
              <AnimatePresence mode="wait">
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
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
