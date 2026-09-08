import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n/i18n";
import { Reveal } from "./Reveal";

export function Hero() {
  const { language } = useI18n();
  const zh = language === "zh";
  return (
    <section className="hero wrap" id="top">
      <Reveal className="hero__copy" y={16}>
        <div className="hello">
          <img
            src="/avatar.jpg"
            alt={zh ? "陈志勇的头像" : "Portrait of Zhiyong Chen"}
            width="42"
            height="42"
          />
          <span>
            {zh ? "你好，我是志勇。" : "Hello, I'm Zhiyong."}
            <small>PRODUCT PERSON & CURIOUS MAKER</small>
          </span>
        </div>
        <h1>
          {zh ? (
            <>
              认真做产品，
              <br />
              也认真<em>玩。</em>
            </>
          ) : (
            <>
              Product mind.
              <br />
              <em>Maker’s hands.</em>
            </>
          )}
        </h1>
        <p className="hero__intro">
          {zh
            ? "在上海做产品，走过了十年。工作里，我和团队一起打磨 SaaS 与数据产品；工作之外，把好奇心做成工具，也写故事、做音乐。这里放着一些我愿意拿出来聊聊的作品。"
            : "Ten years in product, based in Shanghai. At work, I build SaaS and data products with teams. Outside work, I turn curiosity into small tools, stories, and music. Here are a few things I’d love to show you."}
        </p>
        <div className="hero__actions">
          <a className="button" href="#works">
            {zh ? "看看我做的东西" : "Explore my work"}
            <ArrowDown size={17} />
          </a>
          <a className="text-link" href="#impact">
            {zh ? "职业经历" : "My background"}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </Reveal>
      <Reveal className="hero__desk" delay={0.12} y={18}>
        <div className="desk-label">
          <span>{zh ? "最近在做的东西" : "RECENTLY ON MY DESK"}</span>
          <span>01—02</span>
        </div>
        <a
          className="desk-page"
          href="#project-beiyemd"
          aria-label={zh ? "查看北页项目" : "View BeiyeMD"}
        >
          <div className="desk-page__caption">
            <span>
              北页 <i>/ BeiyeMD</i>
            </span>
            <ArrowUpRight size={18} />
          </div>
          <img
            src="/projects/beiyemd-clean.webp"
            alt={
              zh
                ? "北页 Markdown 工作区预览"
                : "BeiyeMD Markdown workspace preview"
            }
            width="1920"
            height="1032"
            fetchPriority="high"
          />
        </a>
        <a
          className="desk-phone"
          href="#project-riji"
          aria-label={zh ? "查看日跻项目" : "View RIJI"}
        >
          <img
            src="/projects/riji-training.webp"
            alt={zh ? "日跻离线训练记录" : "RIJI offline training log"}
            width="780"
            height="1688"
          />
        </a>
        <div className="desk-note">
          <span className="drawn-star" aria-hidden="true">
            ✳
          </span>
          <p>
            {zh ? (
              <>
                有些想法，
                <br />
                做出来才知道。
              </>
            ) : (
              <>
                Some ideas need
                <br />
                to be made.
              </>
            )}
          </p>
        </div>
      </Reveal>
      <div className="hero__bottom">
        <span>SHANGHAI, CN</span>
        <span>
          {zh
            ? "产品 / 工具 / 故事 / 一些好奇心"
            : "PRODUCTS / TOOLS / STORIES / A LITTLE CURIOSITY"}
        </span>
        <a
          href="#works"
          aria-label={zh ? "向下浏览作品" : "Scroll to projects"}
        >
          ↓
        </a>
      </div>
    </section>
  );
}
