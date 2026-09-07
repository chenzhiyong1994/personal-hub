import { workSystems, type WorkSystem } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";
import { useState } from "react";

const ACCENTS: Record<WorkSystem["accent"], string> = {
  blue: "var(--blue-soft)",
  acid: "var(--acid)",
  orange: "var(--orange)",
  red: "var(--red)",
  gold: "var(--gold)",
};

export function WorkSystems() {
  const { language, t } = useI18n();
  const systems = useLocalized(workSystems);
  const [expanded, setExpanded] = useState<string | null>(workSystems[0].id);

  return (
    <section className="section systems" id="systems">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">03</span>
            <h2 className="section-head__title">{t("工作系统")}</h2>
            <span className="section-head__en">
              My Daily Systems — Built on AI Agents
            </span>
          </header>
        </Reveal>

        <Reveal>
          <div className="systems__intro">
            <p>
              {t(
                "还有一些东西，没必要包装成 App。它们更像我每天使用的一套幕后班底：Agent 先查资料、整理草稿、盯住前后矛盾，我来决定写什么、信什么、最后交出什么。用久了，就慢慢长成了这五套工作流。",
              )}
            </p>
            <span>5 AGENT WORKFLOWS / USED IN REAL WORK</span>
          </div>
        </Reveal>

        <div className="system-list">
          {systems.map((system, systemIndex) => (
            <Reveal key={system.id} delay={systemIndex * 0.04}>
              <article
                className="system-card"
                style={{
                  ["--system-accent" as string]: ACCENTS[system.accent],
                }}
              >
                <header className="system-card__head">
                  <span className="system-card__index">{system.index}</span>
                  <div>
                    <span className="system-card__role">{system.role}</span>
                    <h3>
                      {system.name}
                      <small>{system.enName}</small>
                    </h3>
                  </div>
                  <p>{system.statement}</p>
                </header>

                <button
                  className="system-card__toggle"
                  type="button"
                  aria-expanded={expanded === system.id}
                  aria-controls={`system-details-${system.id}`}
                  onClick={() =>
                    setExpanded(expanded === system.id ? null : system.id)
                  }
                >
                  <span>
                    {t(expanded === system.id ? "收起工作流" : "展开工作流")}
                  </span>
                  <span aria-hidden="true">
                    {expanded === system.id ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="system-card__details"
                  id={`system-details-${system.id}`}
                  hidden={expanded !== system.id}
                >
                  <div
                    className="system-flow"
                    aria-label={
                      language === "en"
                        ? `${system.name} workflow`
                        : `${system.name}流程`
                    }
                  >
                    {system.flow.map((step, index) => (
                      <div className="system-flow__step" key={step}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <b>{step}</b>
                        {index < system.flow.length - 1 && (
                          <i aria-hidden="true">→</i>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="system-card__handoff">
                    <div>
                      <span>{t("AGENT 先做")}</span>
                      <p>{system.agentDoes}</p>
                    </div>
                    <div>
                      <span>{t("我来把关")}</span>
                      <p>{system.humanKeeps}</p>
                    </div>
                  </div>

                  {system.lineage && (
                    <footer className="system-card__lineage">
                      <span>{t("从这些早期实验长出来")}</span>
                      <div>
                        {system.lineage.map((item) => (
                          <b key={item}>{item}</b>
                        ))}
                      </div>
                    </footer>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
