import { Reveal } from "./Reveal";

const SOCIAL = [
  { label: "知乎 · 卡北的思想瓜摊", href: "https://www.zhihu.com/people/chen-zhi-yong-80-97/posts" },
  { label: "网易云音乐 · 卡北莫多", href: "https://music.163.com/#/artist?id=100314875" },
  { label: "番茄小说 · 雾陨纪年", href: "https://fanqienovel.com/page/7488007028825148478?enter_from=search" },
  { label: "公众号 · 卡北不卡", href: "https://mp.weixin.qq.com/s/XYVIB9OT1PPE8GXL_WQS6Q" },
];

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <Reveal>
          <p className="footer__kicker">Contact — 合作、机会、或者只是聊聊</p>
          <h2 className="footer__title">
            一起做点
            <br />
            <em>有意思的</em>
            东西。
          </h2>
          <a className="footer__mail" href="mailto:chenzy94@sina.com">
            chenzy94@sina.com
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="footer__links">
            {SOCIAL.map((s) => (
              <a className="footer__link" href={s.href} target="_blank" rel="noreferrer" key={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="footer__base">
          <span>© 2026 Zhiyong Chen · Digital Studio</span>
          <span>Product judgment by Zhiyong · Built with AI collaboration.</span>
        </div>
      </div>
    </footer>
  );
}
