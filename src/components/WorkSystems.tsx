import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Film,
  PenLine,
  Plus,
} from "lucide-react";
import { workSystems } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

const icons = [PenLine, Film, FileText];
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
                ? "有些东西没有 App 图标，却会在做事时反复用到。我把写文章、做短剧、写需求里那些重复的步骤整理下来，让 AI 帮忙，也让自己少从头来过。"
                : "Some of my most useful tools don’t have an app icon. These workflows gather the recurring steps in writing, short dramas, and product specs, with AI helping me start a little further along each time."}
            </p>
          </div>
        </Reveal>
        <div className="system-list">
          {systems.map((system, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={system.id}>
                <article className="system-row">
                  <div className="system-row__identity">
                    <span className={"system-icon system-icon--" + i}>
                      <Icon size={26} strokeWidth={1.4} />
                    </span>
                    <span className="eyebrow">
                      {system.index} / {system.name}
                    </span>
                  </div>
                  <div className="system-row__story">
                    <h3>{system.role}</h3>
                    <p>{system.statement}</p>
                    <div className="system-flow">
                      {system.flow.map((step, index) => (
                        <span key={step}>
                          {step}
                          {index < system.flow.length - 1 && (
                            <ArrowRight size={13} />
                          )}
                        </span>
                      ))}
                    </div>
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
                    <details>
                      <summary>
                        {zh ? "翻一页看看" : "Look inside"}
                        <Plus size={17} />
                      </summary>
                      <div className="system-example">
                        <span>{system.exampleLabel}</span>
                        <h4>{system.exampleTitle}</h4>
                        <ol>
                          {system.example.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ol>
                        <p>{system.note}</p>
                        {system.link && (
                          <a
                            className="text-link"
                            href={system.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {zh ? "查看相关项目" : "Explore the project"}
                            <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                    </details>
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
