import { timeline } from "../data/siteContent";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <section className="section timeline" id="timeline">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">06</span>
            <h2 className="section-head__title">路径</h2>
            <span className="section-head__en">The Path — 2012 to Now</span>
          </header>
        </Reveal>

        {timeline.map((t, i) => (
          <Reveal key={t.range} delay={i * 0.04}>
            <article className="tl">
              <span className="tl__range">{t.range}</span>
              <div>
                <div className="tl__company">{t.company}</div>
                <div className="tl__role">{t.role}</div>
              </div>
              <p className="tl__detail">{t.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
