import { articles, creativeChannels, type CreativeChannel } from "../data/siteContent";
import { useI18n, useLocalized } from "../i18n/i18n";
import { Reveal } from "./Reveal";

const ACCENT_VAR: Record<CreativeChannel["accent"], string> = {
  blue: "var(--blue-soft)",
  acid: "var(--acid)",
  orange: "var(--orange)",
  paper: "var(--paper)",
  red: "var(--red)",
  warm: "var(--gold)",
};

function ChannelRow({ channel }: { channel: CreativeChannel }) {
  const { language, t } = useI18n();
  const inner = (
    <>
      <span className="channel__index" aria-hidden="true">
        {channel.index}
      </span>
      <div>
        <div className="channel__type">{channel.type}</div>
        <h3 className="channel__title">{channel.title}</h3>
      </div>
      <div className="channel__desc-col">
        <p className="channel__desc">{channel.description}</p>
        <div className="channel__metric">{channel.metric}</div>
      </div>
      {channel.link ? (
        <span className="channel__arrow" aria-hidden="true">
          ↗
        </span>
      ) : (
        <span className="channel__soon">{t("待发布")}</span>
      )}
    </>
  );

  const style = { ["--channel-accent" as string]: ACCENT_VAR[channel.accent] };

  return channel.link ? (
    <a
      className="channel"
      href={channel.link}
      target="_blank"
      rel="noreferrer"
      style={style}
      aria-label={language === "en"
        ? `${channel.title} — ${channel.linkLabel ?? t("查看作品")}, opens in a new window`
        : `${channel.title}（${channel.linkLabel ?? "查看作品"}，新窗口打开）`}
    >
      {inner}
    </a>
  ) : (
    <div className="channel" style={style}>
      {inner}
    </div>
  );
}

export function Creative() {
  const { t } = useI18n();
  const channels = useLocalized(creativeChannels);
  const localizedArticles = useLocalized(articles);

  return (
    <section className="section" id="creative">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <span className="section-head__index">04</span>
            <h2 className="section-head__title">{t("工作之外")}</h2>
            <span className="section-head__en">STORIES, MUSIC & SIDE NOTES</span>
          </header>
        </Reveal>

        {channels.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.03}>
            <ChannelRow channel={c} />
          </Reveal>
        ))}

        <Reveal>
          <div className="articles">
            <h3 className="articles__title">{t("精选文章 / Selected Writing")}</h3>
            {localizedArticles.map((a) => (
              <a className="article" href={a.href} target="_blank" rel="noreferrer" key={a.href}>
                <span className="article__tag">{a.tag}</span>
                <span className="article__name">{a.title}</span>
                <span className="article__source">{a.source}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
