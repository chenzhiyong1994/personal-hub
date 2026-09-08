import { Reveal } from "./Reveal";
import { useI18n, useLocalized } from "../i18n/i18n";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const SOCIAL = [
  {
    label: "知乎 · 卡北的思想瓜摊",
    href: "https://www.zhihu.com/people/chen-zhi-yong-80-97/posts",
  },
  {
    label: "网易云音乐 · 卡北莫多",
    href: "https://music.163.com/#/artist?id=100314875",
  },
  {
    label: "番茄小说 · 雾陨纪年",
    href: "https://fanqienovel.com/page/7488007028825148478?enter_from=search",
  },
  {
    label: "公众号 · 卡北不卡",
    href: "https://mp.weixin.qq.com/s/XYVIB9OT1PPE8GXL_WQS6Q",
  },
];

export function Footer() {
  const { language, t } = useI18n();
  const social = useLocalized(SOCIAL);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("chenzy94@sina.com");
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <Reveal>
          <p className="footer__kicker">
            {t("Contact — 合作、机会、或者只是聊聊")}
          </p>
          <h2 className="footer__title">
            {language === "en" ? (
              <>
                Let's make
                <br />
                <em>something good.</em>
              </>
            ) : (
              <>
                一起做点
                <br />
                <em>有意思的</em>东西。
              </>
            )}
          </h2>
          <div className="footer__contact-actions">
            <a className="footer__mail" href="mailto:chenzy94@sina.com">
              chenzy94@sina.com
              <span aria-hidden="true">→</span>
            </a>
            <button className="footer__copy" type="button" onClick={copyEmail}>
              {copyState === "copied" ? (
                <Check size={15} aria-hidden="true" />
              ) : (
                <Copy size={15} aria-hidden="true" />
              )}
              {t(copyState === "copied" ? "已复制" : "复制邮箱")}
            </button>
          </div>
          <p className="footer__copy-status" role="status">
            {copyState === "failed"
              ? t("复制未成功，可选择上方邮箱手动复制，或点击发送邮件。")
              : copyState === "copied"
                ? t("邮箱已复制，期待你的来信。")
                : ""}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="footer__links">
            {social.map((s) => (
              <a
                className="footer__link"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                key={s.href}
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="footer__base">
          <span>© 2026 Zhiyong Chen · Digital Studio</span>
          <span>Made with curiosity, care & AI collaboration.</span>
          <a className="footer__back" href="#top">
            {t("回到顶部")} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
