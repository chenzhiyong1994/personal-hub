import { profile, timeline } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { t } = useI18n();
  const localizedTimeline = useLocalized(timeline);
  const person = useLocalized(profile);

  return (
    <section className="section timeline" id="timeline">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">06</span>
            <h2 className="section-head__title">{t("路径")}</h2>
            <span className="section-head__en">The Path — 2012 to Now</span>
          </header>
        </Reveal>

        {localizedTimeline.map((item, i) => (
          <Reveal key={item.range} delay={i * 0.04}>
            <article className="tl">
              <span className="tl__range">{item.range}</span>
              <div>
                <div className="tl__company">{item.company}</div>
                <div className="tl__role">{item.role}</div>
              </div>
              <p className="tl__detail">{item.detail}</p>
            </article>
          </Reveal>
        ))}
        <Reveal>
          <div className="timeline__education">
            <span>2012—2016</span>
            <p>{person.education}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
