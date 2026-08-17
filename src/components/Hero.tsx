import { motion, useReducedMotion } from "motion/react";

const LINES = [
  { text: "有了想法，" },
  { text: "我总想亲手试试。", before: "我总想", accent: "亲手", after: "试试。" },
];

function HeroTitle() {
  const reduce = useReducedMotion();
  return (
    <h1 className="hero__title">
      {LINES.map((line, i) => (
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
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
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
              做产品九年，我见过旧系统留下的麻烦，也经历过一张白纸慢慢变成有人付费的产品。
              工作之外，我还是闲不住：做桌面工具、小程序，也给自己搭 Agent 工作流。
              <strong>我不打算把每样技术都学成专家，只想亲手确认——这个想法到底行不行。</strong>
            </p>
            <div className="hero__tags">
              {["B2B SaaS", "数据产品", "产品线经营", "Agent 工作流", "产品原型与代码", "团队管理"].map((t) => (
                <span className="hero__tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside className="status" aria-label="当前状态" {...fade(0.7)}>
            <div className="status__head">
              <i />
              <i />
              <i />
              <span style={{ marginLeft: "auto" }}>status.log</span>
            </div>
            <div className="status__body">
              <img className="status__avatar" src="/avatar.jpg" alt="陈志勇的头像" width={72} height={72} />
              <div>
                <div className="status__name">陈志勇 Zhiyong</div>
                <div className="status__role">
                  资深产品经理 · 产品线负责人经历
                  <br />
                  上海 · 远程友好
                </div>
              </div>
            </div>
            <div className="status__rows">
              <div className="status__row">
                <span>proven_ground</span>
                <b>B2B SaaS · 数据与商业化</b>
              </div>
              <div className="status__row">
                <span>next_direction</span>
                <b>把 AI 放进真实业务</b>
              </div>
              <div className="status__row">
                <span>creative_signal</span>
                <b className="ok">持续构建中</b>
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
