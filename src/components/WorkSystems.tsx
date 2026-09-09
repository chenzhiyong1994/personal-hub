import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Film,
  Palette,
  PenLine,
} from "lucide-react";
import { workSystems } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

const icons: Record<string, typeof PenLine> = {
  "content-os": PenLine,
  "drama-skills": Film,
  "product-manager": FileText,
  aigc: Palette,
  "career-os": BriefcaseBusiness,
};

export function WorkSystems() {
  const { language } = useI18n();
  const zh = language === "zh";
  const systems = useLocalized(workSystems);
  return (
    <section className="section systems" id="systems">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">
            <span>02 / BEHIND THE WORK</span>
            <span>{zh ? "我的工作方式" : "HOW I WORK"}</span>
          </div>
          <div className="section-intro">
            <h2>
              {zh ? (
                <>
                  好用的流程，
                  <br />给<em>想法腾点地方。</em>
                </>
              ) : (
                <>
                  Less busywork.
                  <br />
                  <em>More room to think.</em>
                </>
              )}
            </h2>
            <p>
              {zh
                ? "有些东西没有 App 图标，却会在做事时反复用到。从写作、创作到产品工作和找机会，我把常走的几条路整理下来，让 AI 帮忙，也让自己少从头来过。"
                : "Some of my most useful tools don’t have an app icon. From writing and creative work to product specs and job searches, these are the paths I return to, with AI helping me start a little further along each time."}
            </p>
          </div>
        </Reveal>
        <div className="system-list">
          {systems.map((system, i) => {
            const Icon = icons[system.id] ?? FileText;
            return (
              <Reveal key={system.id}>
                <article
                  className="system-row"
                  aria-labelledby={`system-${system.id}`}
                >
                  <div className="system-row__identity">
                    <span className={"system-icon system-icon--" + i}>
                      <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <span className="eyebrow">
                      {system.index} / {system.name}
                    </span>
                  </div>
                  <div className="system-row__story">
                    <h3 id={`system-${system.id}`}>{system.role}</h3>
                    <p>{system.statement}</p>
                  </div>
                  <div className="system-delivery">
                    <div>
                      <span>{zh ? "从这里开始" : "START WITH"}</span>
                      <p>{system.input}</p>
                    </div>
                    <div>
                      <span>{zh ? "最后拿到" : "TAKE AWAY"}</span>
                      <p>{system.output}</p>
                    </div>
                    {system.link && (
                      <a
                        className="text-link"
                        href={system.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {zh ? "查看相关项目" : "Explore the project"}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <div className="system-process">
                    <ol
                      className="system-flow"
                      aria-label={`${system.name} · ${zh ? "工作流程" : "Workflow"}`}
                    >
                      {system.flow.map((step, index) => (
                        <li key={step}>
                          <span
                            className="system-flow__number"
                            aria-hidden="true"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{step}</span>
                          {index < system.flow.length - 1 && (
                            <ArrowRight
                              className="system-flow__arrow"
                              size={18}
                              aria-hidden="true"
                            />
                          )}
                        </li>
                      ))}
                    </ol>
                    <p className="system-note">{system.note}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
