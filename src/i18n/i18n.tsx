import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { generatedEnglish } from "./translations.generated";

export type Language = "en" | "zh";

const STORAGE_KEY = "digital-studio-language";

const curatedEnglish: Record<string, string> = {
  "北页": "Beiye",
  "别骂了": "Critique Me",
  "胶囊办公室": "Capsule Office",
  "悄醒": "HushWake",
  "心镜拾光": "Arcana Mirror",
  "生者未明": "Unverified Survivors",
  "商情洞察": "Trade Insight",
  "商情洞察 · 2024": "Trade Insight · 2024",
  "产品库": "Product Intelligence",
  "轻析 / QingBI": "QingBI",
  "轻析 / QingBI · 2023": "QingBI · 2023",
  "数据建设": "Data Foundation",
  "数据建设 · 2021—2024": "Data Foundation · 2021—2024",
  "高级产品经理 · 产品线负责人": "Product Manager · Product Line Lead",
  "高级产品经理 · 产品线主管": "Product Manager · Product Line Supervisor",
  "个人项目 / Personal Studio": "Personal Projects / Personal Studio",
  "跨平台桌面产品": "Cross-platform Desktop Product",
  "本地优先 AI 业务工作台": "Local-first AI Operations Workbench",
  "AI 辅助成长产品实验": "AI-assisted Learning Product Experiment",
  "Android 原生产品": "Native Android Product",
  "AI 结构化评审小程序": "AI-structured Review Mini Program",
  "AI × 微信小程序": "AI × WeChat Mini Program",
  "Agent Logic × 微信小游戏": "Agent Logic × WeChat Mini Game",
  "内部数据产品": "Internal Data Product",
  "自研 BI 产品": "In-house BI Product",
  "B2B 商业数据产品": "B2B Commercial Data Product",
  "北页是被我自己的使用习惯逼出来的：项目文档都躺在本地，我不想先导入平台，也不想为了看一眼 README 等半天。功能就这样一项项长出来——多文档、预览与源码切换、跨文件搜索、外部变更同步，最后也有了 Windows 和 macOS 安装包。":
    "Beiye grew out of my own habits. My project documents live locally, and I did not want to import them into a platform or wait just to read a README. The product expanded from that constraint: multiple documents, preview/source switching, cross-file search, external-change sync, and eventually Windows and macOS installers.",
  "我想要的很简单：双击一份 Markdown，马上就能看。":
    "The requirement was simple: double-click a Markdown file and read it immediately.",
  "我想验证一个很具体的问题：AI 进了客户咨询以后，除了回复得像不像人，能不能知道什么时候该停、什么时候把决定交还给人？于是有了这次本地工作台实验。":
    "I wanted to test a specific question: once AI enters customer conversations, can it recognize when to stop and return a decision to a human—not just produce a human-sounding reply? That question became this local workbench experiment.",
  "让 AI 代回消息之前，先给它画几条不能越的线。":
    "Before AI answers for a business, define the lines it must not cross.",
  "收藏夹里的全栈教程越攒越多，我却还是不知道自己究竟会了什么。Stack Trail 是给我自己做的练习工具：不记看完几章，只看选题、方案、Demo 和发布有没有留下东西。":
    "My list of full-stack tutorials kept growing, but I still could not tell what I could actually build. Stack Trail is a practice system for myself: it ignores chapters completed and looks for evidence in topics, plans, demos, and releases.",
  "少收藏一个教程，多把手里的项目往前推一步。":
    "Save one fewer tutorial. Move the project in front of you one step forward.",
  "胶囊办公室是我折腾得最久的个人项目之一。一开始只是想给几个终端套上一间像素办公室，后来几次推翻重做，真的接上了 PTY、会话状态、上下文和成本信息。办公室也跟着换了好几次装修。":
    "Capsule Office is one of my longest-running personal experiments. It began as a pixel office for a few terminals, then went through several rebuilds until it connected real PTY sessions, status, context, and cost signals. The office itself was redesigned just as often.",
  "每天开着好几个 CLI Agent，我干脆给它们排了工位。":
    "I kept several CLI agents open every day, so I gave them desks.",
  "它源于一个很具体的担心：闹钟本来只想在耳机里响，耳机一断，却可能突然外放。为了守住“不吵到别人”这句话，我处理了精确调度、后台唤醒、耳机断连和不同 Android 版本的脾气。":
    "HushWake began with one concrete concern: an alarm intended for headphones could suddenly play through the speaker after a disconnect. To keep the promise of not disturbing others, I worked through exact scheduling, background wake-up, route loss, and Android-version differences.",
  "闹钟可以准时响，但别在外放扬声器里惊醒所有人。":
    "An alarm should be punctual without waking everyone through the speaker.",
  "我不缺那种“整体不错、建议再聚焦”的反馈，缺的是有人指出哪一句有问题、为什么、该怎么改。于是做了四位不同脾气的“暴君”：语气各有风格，交作业的标准却是同一套。":
    "I did not need another vague ‘looks good, be more focused’ review. I needed feedback that identifies the exact line, explains the impact, and proposes a verifiable change. So I built four opinionated reviewers with different voices but one shared quality bar.",
  "毒舌可以是外壳，建议必须真的能改。":
    "The voice can be sharp. The advice still has to be actionable.",
  "心镜拾光是一件不打算商业化的小程序作品。每日一牌、单牌与三牌、78 张完整牌组、分享图和本地历史都做了；最费心的反而是删掉那些像预言一样笃定的话，让解读停在“照见自己”这里。":
    "Arcana Mirror is a non-commercial mini-program experiment. It includes a daily card, one- and three-card readings, a full 78-card deck, share images, and local history. The hardest part was removing language that sounded like prophecy and keeping the experience focused on reflection.",
  "我想保留抽牌的仪式感，但不想让它替人下结论。":
    "I wanted to preserve the ritual without letting it make decisions for people.",
  "我想做一局真的能推理的单机游戏。六名 NPC 各自记着怀疑、信任、压力、恐惧和私人恩怨；轮到他们开口时，拿的是自己知道的事实，不是从台词池里随机抓一句。":
    "I wanted a single-player deduction game that genuinely supports reasoning. Six NPCs track suspicion, trust, pressure, fear, and private grudges; when they speak, they draw from what they know—not a random line pool.",
  "如果 NPC 真的会记仇、害怕和怀疑，争论会不会不一样？":
    "Would an argument feel different if NPCs could hold grudges, fear, and doubt?",
  "商情洞察业务界面截图待补充": "Trade Insight interface image pending",
  "产品库业务界面截图待补充": "Product Intelligence interface image pending",
  "轻析 QingBI 业务界面截图待补充": "QingBI interface image pending",
  "数据建设业务看板截图待补充": "Data Foundation dashboard image pending",
  "待补：市场、客户、竞企、产品四维洞察界面": "Pending: market, customer, competitor, and product insight interface",
  "待补：AI 产品转译、对话式检索与结果分析页": "Pending: AI data translation, conversational search, and analysis interface",
  "待补：自助分析、报表搭建与公开发布现场": "Pending: self-service analysis, report builder, and public release evidence",
  "待补：指标地图、质量监控与实时经营看板": "Pending: metric map, quality monitoring, and real-time operations dashboard",
  "知乎 · 卡北的思想瓜摊": "Zhihu · Kabei's Thought Stand",
  "网易云音乐 · 卡北莫多": "NetEase Cloud Music · Kabemodo",
  "番茄小说 · 雾陨纪年": "Fanqie Novel · Chronicle of the Mistfall",
  "公众号 · 卡北不卡": "WeChat Official Account · Kabei Buka",
  "卡北的思想瓜摊": "Kabei's Thought Stand",
  "卡北莫多": "Kabemodo",
  "卡北不卡": "Kabei Buka",
  "雾陨纪年": "Chronicle of the Mistfall",
  "为什么 Agent 更适合高考志愿填报": "Why Agents Fit College Application Planning",
  "AI 不可怕，可怕的是公司太信任它": "AI Is Not the Scary Part—Blind Corporate Trust Is",
  "用户洞察的框架": "A Framework for User Insight",
  "PaaS、SaaS 产品设计时的思路差异": "How Product Thinking Differs Between PaaS and SaaS",
};

const uiEnglish: Record<string, string> = {
  "跳到主要内容": "Skip to main content",
  "回到顶部": "Back to top",
  "页面导航": "Page navigation",
  "移动端导航": "Mobile navigation",
  "关闭菜单": "Close menu",
  "打开菜单": "Open menu",
  "联系我": "Contact",
  "履历": "Track Record",
  "产品": "Products",
  "系统": "Systems",
  "方法": "Method",
  "创作": "Creative",
  "经历": "Path",
  "当前状态": "Current status",
  "陈志勇的头像": "Portrait of Zhiyong Chen",
  "陈志勇 Zhiyong": "Zhiyong Chen",
  "高级产品经理 · 产品线负责人经历": "Product Manager · Product Line Leadership Experience",
  "上海 · 远程友好": "Shanghai · Remote-friendly",
  "B2B SaaS · 数据与商业化": "B2B SaaS · Data & Commercialization",
  "把 AI 放进真实业务": "Bringing AI into real operations",
  "持续构建中": "Always building",
  "数据产品": "Data Products",
  "产品线经营": "Product Line Operations",
  "Agent 工作流": "Agent Workflows",
  "产品原型与代码": "Product Prototypes & Code",
  "团队管理": "Team Leadership",
  "职业基本盘": "Track Record",
  "产品实践": "Product Practice",
  "工作系统": "Working Systems",
  "从判断到交付": "From Judgment to Delivery",
  "创作矩阵": "Creative Practice",
  "路径": "Path",
  "这些数字都不是凭空长出来的。有的是接手一条问题不少的产品线，先把数据和节奏理顺；有的是从一张白纸开始，直到第一批客户愿意付费。挑四件我负责过的事，展开讲讲。":
    "These results came from real constraints: stabilizing an inherited product line, building from a blank page, and staying with the work until customers were willing to pay. Here are four cases I was responsible for.",
  "代表案例 / Business Cases · 真实业务界面待补": "Business Cases · Interface Evidence Pending",
  "最初想解决什么": "The problem I started with",
  "做过的关键选择": "Key decisions",
  "我和 AI 怎么分工": "How AI and I split the work",
  "我负责": "I own",
  "AI 参与": "AI contributes",
  "我怎么确认它真的能用": "How I verified it",
  "现在做到哪里": "Current boundary",
  "项目列表": "Project list",
  "上一张界面截图": "Previous interface image",
  "下一张界面截图": "Next interface image",
  "选择界面截图": "Choose an interface image",
  "收起项目细节": "Close project dossier",
  "继续看我怎么做的": "Open project dossier",
  "工作项目有人定目标、有人排期。这里的八个项目，大多只是我某天冒出的一个念头：要不做个东西试试？没人催，我就自己把界面、代码和那些意外报错一点点补齐。做成什么样、为什么停在这里，也都如实放着。":
    "Work projects come with goals and schedules. Most of these eight personal projects began with a simpler thought: what if I build it and see? With no one pushing, I worked through the interface, code, and unexpected failures—and left their current limits visible.",
  "还有一些东西，没必要包装成 App。它们更像我每天使用的一套幕后班底：Agent 先查资料、整理草稿、盯住前后矛盾，我来决定写什么、信什么、最后交出什么。用久了，就慢慢长成了这五套工作流。":
    "Some tools do not need to become apps. They are more like a backstage team I use every day: agents research, structure drafts, and flag contradictions; I decide what to write, trust, and ship. Over time, they became these five workflows.",
  "AGENT 先做": "AGENT STARTS",
  "我来把关": "I DECIDE",
  "从这些早期实验长出来": "Evolved from earlier experiments",
  "构建能力阶段": "Delivery stages",
  "待发布": "Coming soon",
  "查看作品": "View work",
  "精选文章 / Selected Writing": "Selected Writing",
  "Contact — 合作、机会、或者只是聊聊": "Contact — Work, opportunities, or a good conversation",
  "产品判断": "Product Judgment",
  "复杂系统": "Complex Systems",
  "深度写作": "Long-form Writing",
  "音乐创作": "Music Making",
};

const english = { ...generatedEnglish, ...curatedEnglish, ...uiEnglish } as Record<string, string>;

function translateDeep<T>(value: T): T {
  if (typeof value === "string") return (english[value] ?? value) as T;
  if (Array.isArray(value)) return value.map((item) => translateDeep(item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, translateDeep(item)]),
    ) as T;
  }
  return value;
}

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function initialLanguage(): Language {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = useCallback(
    (value: string) => (language === "en" ? english[value] ?? value : value),
    [language],
  );

  useEffect(() => {
    const isEnglish = language === "en";
    const description = isEnglish
      ? "Zhiyong Chen · Digital Studio — Product manager focused on B2B SaaS, data products, and AI-assisted building."
      : "Zhiyong Chen · Digital Studio — 高级产品经理，专注 B2B SaaS、数据产品与 AI 辅助构建。";
    const ogDescription = isEnglish
      ? "Turning complex business problems into products that can be tested."
      : "把复杂业务，做成可验证的产品。";

    document.documentElement.lang = isEnglish ? "en" : "zh-CN";
    document.title = "Zhiyong Chen · Digital Studio";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", ogDescription);
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // The language still works when storage is unavailable.
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

export function useLocalized<T>(value: T): T {
  const { language } = useI18n();
  return useMemo(() => (language === "en" ? translateDeep(value) : value), [language, value]);
}
