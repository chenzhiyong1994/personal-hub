import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "../i18n/i18n";

const ZH_LINES = [
  { text: "有了想法，" },
  { text: "我总想亲手试试。", before: "我总想", accent: "亲手", after: "试试。" },
];

const EN_LINES = [
  { text: "Ideas deserve" },
  { text: "a real test.", before: "a ", accent: "real", after: " test." },
];

function HeroTitle() {
  const reduce = useReducedMotion();
  const { language } = useI18n();
  const lines = language === "en" ? EN_LINES : ZH_LINES;

  return (
    <h1 className="hero__title">
      {lines.map((line, i) => (
        <span className="hero__line" key={line.text}>
          <motion.span
            initial={reduce ? false : { y: "112%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            {line.before ?? ""}
            {line.accent ? <em>{line.accent}</em> : line.text}
            {line.after ?? ""}
          </motion.span>
          {language === "en" && i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { language, t } = useI18n();
  const fade = (delay: number) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
      </div>

      <div className="hero__inner">
        <motion.p className="hero__eyebrow" {...fade(0)}>
          Zhiyong Chen · Digital Studio — B2B SaaS / DATA PRODUCTS / AI-ASSISTED BUILDING
        </motion.p>

        <HeroTitle />

        <div className="hero__lower">
          <motion.div {...fade(0.55)}>
            <p className="hero__intro">
              {language === "en" ? (
                <>
                  Over nine years in product work, I have inherited messy systems and helped turn blank pages into products people paid for.{" "}
                  Outside work, I keep building desktop tools, mini programs, and Agent workflows for myself.{" "}
                  <strong>I do not need to become an expert in every technology. I want enough hands-on depth to test whether an idea actually works.</strong>
                </>
              ) : (
                <>
                  做产品九年，我见过旧系统留下的麻烦，也经历过一张白纸慢慢变成有人付费的产品。
                  工作之外，我还是闲不住：做桌面工具、小程序，也给自己搭 Agent 工作流。
                  <strong>我不打算把每样技术都学成专家，只想亲手确认——这个想法到底行不行。</strong>
                </>
              )}
            </p>
            <div className="hero__tags">
              {["B2B SaaS", "数据产品", "产品线经营", "Agent 工作流", "产品原型与代码", "团队管理"].map((tag) => (
                <span className="hero__tag" key={tag}>
                  {t(tag)}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside className="status" aria-label={t("当前状态")} {...fade(0.7)}>
            <div className="status__head">
              <i />
              <i />
              <i />
              <span style={{ marginLeft: "auto" }}>status.log</span>
            </div>
            <div className="status__body">
              <img className="status__avatar" src="/avatar.jpg" alt={t("陈志勇的头像")} width={72} height={72} />
              <div>
                <div className="status__name">{t("陈志勇 Zhiyong")}</div>
                <div className="status__role">
                  {t("高级产品经理 · 产品线负责人经历")}
                  <br />
                  {language === "en" ? " " : null}
                  {t("上海 · 远程友好")}
                </div>
              </div>
            </div>
            <div className="status__rows">
              <div className="status__row">
                <span>proven_ground</span>
                <b>{t("B2B SaaS · 数据与商业化")}</b>
              </div>
              <div className="status__row">
                <span>next_direction</span>
                <b>{t("把 AI 放进真实业务")}</b>
              </div>
              <div className="status__row">
                <span>creative_signal</span>
                <b className="ok">{t("持续构建中")}</b>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div className="hero__scroll" {...fade(1)}>
        <span>Scroll</span>
        <span className="hero__scroll-arrow">↓</span>
      </motion.div>
    </section>
  );
}
