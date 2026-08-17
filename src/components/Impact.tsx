import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { careerCases, impacts } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const target = parseFloat(match[1].replace(/,/g, ""));
    const suffix = match[2];
    const decimals = match[1].includes(".") ? 1 : 0;
    const useComma = match[1].includes(",");
    const format = (n: number) =>
      (useComma
        ? n.toLocaleString("en-US", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })
        : n.toFixed(decimals)) + suffix;

    if (reduce) {
      el.textContent = format(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{value}</span>;
}

export function Impact() {
  const { t } = useI18n();
  const localizedImpacts = useLocalized(impacts);
  const localizedCases = useLocalized(careerCases);

  return (
    <section className="section impact" id="impact">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">01</span>
            <h2 className="section-head__title">{t("职业基本盘")}</h2>
            <span className="section-head__en">Track Record — B2B SaaS &amp; Data Products</span>
          </header>
        </Reveal>

        <Reveal>
          <p className="impact__lead">
            {t("这些数字都不是凭空长出来的。有的是接手一条问题不少的产品线，先把数据和节奏理顺；有的是从一张白纸开始，直到第一批客户愿意付费。挑四件我负责过的事，展开讲讲。")}
          </p>
        </Reveal>

        <Reveal>
          <div className="impact__grid">
            {localizedImpacts.map((item, index) => (
              <div className="impact__cell" key={impacts[index].label}>
                <span className="impact__value">
                  <CountUp value={item.value} />
                </span>
                <span className="impact__label">{item.label}</span>
                <span className="impact__detail">{item.detail}</span>
                <span className="impact__source">{item.source}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h3 className="cases__title">{t("代表案例 / Business Cases · 真实业务界面待补")}</h3>
        </Reveal>
        {localizedCases.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.04}>
            <article className="career-case">
              <div className="career-case__copy">
                <span className="case__index">{c.index}</span>
                <div>
                  <div className="case__meta">{c.category} · {c.status}</div>
                  <h4 className="case__name">{c.name}</h4>
                  <p className="case__statement">{c.statement}</p>
                  <p className="career-case__description">{c.description}</p>
                  <p className="case__proof">{c.proof}</p>
                  <div className="career-case__tags">
                    {c.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </div>
              <div className="career-case__visual" role="img" aria-label={c.imageAlt}>
                <span>{c.visualLabel}</span>
                <strong>IMAGE<br />PENDING</strong>
                <p>{c.visualCaption}</p>
                <i aria-hidden="true">{c.index}</i>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
