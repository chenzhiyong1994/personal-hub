export type Project = {
  id: string;
  index: string;
  name: string;
  enName: string;
  status: string;
  category: string;
  statement: string;
  description: string;
  proof: string;
  stack: string[];
  image?: string;
  imageAlt: string;
  gallery?: Array<{
    src: string;
    alt: string;
    fit?: "cover" | "contain";
    caption: string;
    source: "runtime" | "source" | "archive";
  }>;
  challenge?: string;
  decisions?: string[];
  ownership?: {
    human: string;
    ai: string;
  };
  verification?: string[];
  boundary?: string;
  note?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  visualLabel?: string;
  visualCaption?: string;
  tone: "gold" | "red" | "blue" | "amber";
};

export type WorkSystem = {
  id: string;
  index: string;
  name: string;
  enName: string;
  role: string;
  statement: string;
  flow: string[];
  agentDoes: string;
  humanKeeps: string;
  lineage?: string[];
  accent: "blue" | "acid" | "orange" | "red" | "gold";
};

export type Impact = {
  value: string;
  label: string;
  detail: string;
  source: string;
};

export type BuilderMode = {
  id: string;
  order: string;
  label: string;
  english: string;
  headline: string;
  body: string;
  outputs: string[];
};

export type CreativeChannel = {
  index: string;
  icon: "book" | "music" | "writing" | "wechat" | "sticker" | "video";
  type: string;
  title: string;
  metric: string;
  description: string;
  link?: string;
  linkLabel?: string;
  accent: "blue" | "acid" | "orange" | "paper" | "red" | "warm";
};

export type Article = {
  title: string;
  source: string;
  tag: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "beiyemd",
    index: "01",
    name: "北页",
    enName: "BEIYEMD",
    status: "V1.1.0 · RELEASED",
    category: "跨平台桌面产品",
    statement: "我想要的很简单：双击一份 Markdown，马上就能看。",
    description:
      "北页是被我自己的使用习惯逼出来的：项目文档都躺在本地，我不想先导入平台，也不想为了看一眼 README 等半天。功能就这样一项项长出来——多文档、预览与源码切换、跨文件搜索、外部变更同步，最后也有了 Windows 和 macOS 安装包。",
    proof: "Windows + macOS 正式包 · GitHub Releases · 直接读写本地文件",
    stack: ["Product", "Electron", "TypeScript", "Milkdown", "Release Engineering"],
    image: "/projects/beiyemd-preview.webp",
    imageAlt: "北页 Markdown 编辑器正在阅读真实的项目文档",
    gallery: [
      {
        src: "/projects/beiyemd-preview.webp",
        alt: "北页在 Electron 桌面端预览 README 文档",
        caption: "阅读模式 · 真实本地文档",
        source: "runtime",
      },
      {
        src: "/projects/beiyemd-multidoc.webp",
        alt: "北页同时打开中英文 README 的多文档工作区",
        caption: "多文档工作区 · 侧栏切换",
        source: "runtime",
      },
      {
        src: "/projects/beiyemd-source.webp",
        alt: "北页切换到 Markdown 源码编辑模式",
        caption: "源码模式 · 本地文件直接编辑",
        source: "runtime",
      },
      {
        src: "/projects/beiyemd-check.webp",
        alt: "北页完成 Markdown 格式检查并显示没有发现问题",
        caption: "格式检查 · 桌面端操作结果",
        source: "runtime",
      },
    ],
    challenge: "功能越加越多，启动和阅读就越容易变重。我要守住的，是双击即看，同时又经得起日常编辑。",
    decisions: [
      "文档留在原处。北页只负责打开和修改，不再造一个库把文件搬进去。",
      "我经常在预览和源码之间来回切，所以两种模式都放在明面上，不多藏一层菜单。",
      "安装包、文件关联、校验和这些琐碎活也得做完，否则“跨平台”只是一句开发机上的话。",
    ],
    ownership: {
      human: "我决定它该保持多轻、哪些功能坚决不做，也拿自己的项目文档一轮轮找别扭。",
      ai: "AI 和我一起写实现、查平台差异、补测试和整理发布材料；涉及产品取舍和是否发布，由我拍板。",
    },
    verification: ["自动化测试与 TypeScript 检查", "Windows / macOS 分架构构建", "GitHub Release 与 SHA-256 校验和"],
    boundary: "它就是一款本地编辑器：没有账号、云同步、多人协作或知识库。macOS 包还没做 Apple 公证，首次打开需要手动允许。",
    links: [
      { label: "GitHub", href: "https://github.com/chenzhiyong1994/BeiyeMD" },
      { label: "下载发布版", href: "https://github.com/chenzhiyong1994/BeiyeMD/releases/latest" },
    ],
    tone: "blue",
  },
  {
    id: "ai-business-twin",
    index: "02",
    name: "AI Business Twin",
    enName: "SOCIAL CONSULTATION DESK",
    status: "V1.0.0",
    category: "本地优先 AI 业务工作台",
    statement: "让 AI 代回消息之前，先给它画几条不能越的线。",
    description:
      "我想验证一个很具体的问题：AI 进了客户咨询以后，除了回复得像不像人，能不能知道什么时候该停、什么时候把决定交还给人？于是有了这次本地工作台实验。",
    proof: "本地演练全流程 · L1/L2/L3 风险分级 · 审批与审计记录",
    stack: ["Product", "Node.js", "SQLite", "Policy Engine", "Audit Design"],
    image: "/projects/ai-business-twin-overview.webp",
    imageAlt: "AI Business Twin 本地业务工作台概览",
    gallery: [
      {
        src: "/projects/ai-business-twin-overview.webp",
        alt: "AI Business Twin 载入本地演练数据后的业务概览",
        caption: "业务概览 · 本地演练数据",
        source: "runtime",
      },
      {
        src: "/projects/ai-business-twin-operations.webp",
        alt: "AI Business Twin 的待审批咨询与风险分级操作页",
        caption: "待审批队列 · 风险分级",
        source: "runtime",
      },
      {
        src: "/projects/ai-business-twin-evidence.webp",
        alt: "AI Business Twin 的原始事件与审计证据页",
        caption: "原始事件 · 审计记录",
        source: "runtime",
      },
    ],
    challenge: "最麻烦的不是生成一句回复，而是别让模型把猜测当事实，也别让一次误认顺着自动化一路传下去。",
    decisions: [
      "每条消息先留下原始记录，再整理成客户、身份、会话和消息，出了问题能回头查。",
      "风险高、资料里没有答案，或者连接器做不到时，AI 别逞强，直接等人处理。",
      "同一个人跨渠道出现，也不能凭“看起来像”就合并；关联要有证据，还得能撤销。",
    ],
    ownership: {
      human: "我写下哪些事可以自动做、哪些必须等人，也负责定义身份关联和对外表述的边界。",
      ai: "AI 参与本地运行时、规则引擎、演练数据、恢复工具和界面实现。",
    },
    verification: ["Fixture 全链路演练", "自动化测试与静态检查", "SQLite 备份完整性验证"],
    boundary: "目前跑通的是本地演练。微信真实收发和抖音 OAuth 还没有接上账号，所以它仍是一张用来验证边界的工作台，不是已经营业的客服系统。",
    tone: "amber",
  },
  {
    id: "stack-trail",
    index: "03",
    name: "Stack Trail",
    enName: "FULL-STACK PRACTICE SYSTEM",
    status: "V0.14.0 · LOCAL",
    category: "AI 辅助成长产品实验",
    statement: "少收藏一个教程，多把手里的项目往前推一步。",
    description:
      "收藏夹里的全栈教程越攒越多，我却还是不知道自己究竟会了什么。Stack Trail 是给我自己做的练习工具：不记看完几章，只看选题、方案、Demo 和发布有没有留下东西。",
    proof: "4 个项目关卡 · 实验记录 · 本地进度与恢复点",
    stack: ["Product System", "React", "TypeScript", "Evidence Model", "AI Coach"],
    image: "/projects/stack-trail-dashboard.webp",
    imageAlt: "Stack Trail 真实运行中的项目实践驾驶舱",
    gallery: [
      {
        src: "/projects/stack-trail-dashboard.webp",
        alt: "Stack Trail 完成能力基线后的项目驾驶舱",
        caption: "项目驾驶舱 · 当前能力基线",
        source: "runtime",
      },
      {
        src: "/projects/stack-trail-warmup.webp",
        alt: "Stack Trail 的热身任务与证据录入界面",
        caption: "热身任务 · 证据录入",
        source: "runtime",
      },
      {
        src: "/projects/stack-trail-ability.webp",
        alt: "Stack Trail 的全栈能力地图",
        caption: "能力地图 · 进展回看",
        source: "runtime",
      },
    ],
    challenge: "怎么判断自己真的进步了？课程进度不算，能展示、能解释、隔一阵还能重新做出来，才比较算数。",
    decisions: [
      "用选题、方案、Demo、发布四道关卡替代“已学完 80%”的进度条。",
      "失败记录也留下来。证据可以支持结论，也可以说明原来的想法不成立。",
      "学习中断很正常，所以进度、恢复点、旧数据迁移和导出都围绕“下次还能接着做”设计。",
    ],
    ownership: {
      human: "我拿自己的学习过程当第一位用户，决定什么才算证据，也不断删掉那些只会让系统显得很全的功能。",
      ai: "AI 参与状态模型、界面、数据迁移和自动化验证，也会追问我这次练习到底证明了什么。",
    },
    verification: ["领域与界面测试", "生产构建与 gzip 包体预算", "固定种子损坏数据修复测试"],
    boundary: "它目前只服务我一个人，外部用户验证还很少。功能做得多，不等于这就是一门成立的生意——这点我刻意留在页面上。",
    tone: "blue",
  },
  {
    id: "capsule-office",
    index: "04",
    name: "胶囊办公室",
    enName: "CAPSULE OFFICE",
    status: "ITERATED PROTOTYPE",
    category: "Agent Desktop",
    statement: "每天开着好几个 CLI Agent，我干脆给它们排了工位。",
    description:
      "胶囊办公室是我折腾得最久的个人项目之一。一开始只是想给几个终端套上一间像素办公室，后来几次推翻重做，真的接上了 PTY、会话状态、上下文和成本信息。办公室也跟着换了好几次装修。",
    proof: "Electron 桌面端 · 真实 PTY · 多主题像素办公室与会话指标",
    stack: ["Product Concept", "Electron", "React", "xterm", "Terminal UX"],
    image: "/projects/capsule-office-wide.webp",
    imageAlt: "胶囊办公室宽屏版本的像素办公室与真实终端控制界面",
    gallery: [
      {
        src: "/projects/capsule-office-wide.webp",
        alt: "胶囊办公室宽屏版本的像素办公室与真实终端控制界面",
        caption: "当前版 · 像素办公室与真实终端",
        source: "runtime",
      },
    ],
    challenge: "终端一多，名字和标签很快就失去意义。我想让人一眼知道谁在工作、卡在哪里，又不把桌面做成另一块企业仪表盘。",
    decisions: [
      "员工坐在哪个工位，比“会话 01、02、03”更容易记住，所以空间不是装饰，而是导航。",
      "浏览器版方便看效果，真正的终端和文件操作留给 Electron；两边各做自己擅长的事。",
      "成本、Token 和上下文数据有多少可信就说多少，估算值和暂无数据都明确标出来。",
    ],
    ownership: {
      human: "办公室长什么样、信息该摆哪儿、什么时候算“正在工作”，我前后改了好几轮。",
      ai: "AI 帮我探索像素资产、写 React/Electron、接终端，也一起排查那些总也对不齐的指标。",
    },
    verification: ["浏览器预览与 Electron 双运行态", "真实 PTY 输入输出", "桌面与窄屏多轮截图回归"],
    boundary: "它是一件认真做过很多轮的本地工具，但没有团队调度和协作能力，我也不打算把它包装成平台。",
    note: "这间办公室开张时，Codex 还没有 Windows 桌面端。后来官方真的来了，我也就很识趣地停手了。",
    tone: "amber",
  },
  {
    id: "hush-wake",
    index: "05",
    name: "悄醒",
    enName: "HUSHWAKE",
    status: "V0.3.2 BETA",
    category: "Android 原生产品",
    statement: "闹钟可以准时响，但别在外放扬声器里惊醒所有人。",
    description:
      "它源于一个很具体的担心：闹钟本来只想在耳机里响，耳机一断，却可能突然外放。为了守住“不吵到别人”这句话，我处理了精确调度、后台唤醒、耳机断连和不同 Android 版本的脾气。",
    proof: "API 31–36 · 精确闹钟与前台服务 · 耳机失败即静音",
    stack: ["Product", "Kotlin", "Jetpack Compose", "Audio Routing", "Reliability"],
    image: "/projects/hush-wake-safety.webp",
    imageAlt: "根据悄醒 Android 实际界面源码整理的安全门禁界面预览",
    gallery: [
      {
        src: "/projects/hush-wake-safety.webp",
        alt: "按悄醒 Jetpack Compose 页面源码整理的完整安全待机界面",
        caption: "安全待机 · 按 Compose 源码还原",
        source: "source",
      },
    ],
    challenge: "准时叫醒和绝不乱响都不能打折。只要系统无法确认声音会去耳机，这次闹钟就宁可安静。",
    decisions: [
      "耳机断连、音频焦点丢失或路由验证失败，任何一项发生都立即停止播放。",
      "Android 12 到 16 各有各的限制，精确闹钟和音频路由按系统能力分别处理。",
      "主页只留闹钟和助眠声。权限与诊断很重要，但不值得每天挡在用户面前。",
    ],
    ownership: {
      human: "我先写下那句不能违背的承诺——不确定就不响，再据此取舍流程和兼容方案。",
      ai: "AI 参与 Kotlin 实现、平台 API 排查、构建脚本和回归测试，帮我追那些只在特定版本出现的问题。",
    },
    verification: ["单元测试、Lint 与 APK 构建", "冷启动和后台拉起模拟器回归", "实体耳机零串音仍作为发布门禁"],
    boundary: "功能已经能完整跑起来，但模拟器证明不了真实耳机一定零串音。实体机这关没过之前，我不会把它叫作稳定版。",
    tone: "gold",
  },
  {
    id: "bie-ma-le",
    index: "06",
    name: "别骂了",
    enName: "BRUTAL REVIEW",
    status: "V1.0.0",
    category: "AI 结构化评审小程序",
    statement: "毒舌可以是外壳，建议必须真的能改。",
    description:
      "我不缺那种“整体不错、建议再聚焦”的反馈，缺的是有人指出哪一句有问题、为什么、该怎么改。于是做了四位不同脾气的“暴君”：语气各有风格，交作业的标准却是同一套。",
    proof: "小程序 + 云函数 + 文件解析 · 隐私链路 · 多角色质量校准",
    stack: ["Product", "Node.js", "Cloud Functions", "Document Parsing", "AI Evals"],
    image: "/projects/bie-ma-le-home.webp",
    imageAlt: "别骂了在微信开发者工具中运行的角色选择首页",
    gallery: [
      {
        src: "/projects/bie-ma-le-home.webp",
        alt: "别骂了小程序的评审角色选择首页",
        caption: "评审入口 · 四种不同脾气的专业角色",
        source: "runtime",
      },
      {
        src: "/projects/bie-ma-le-role.webp",
        alt: "别骂了小程序中简历暴君的角色说明页",
        caption: "角色说明 · 先说清楚会怎样挑刺",
        source: "runtime",
      },
      {
        src: "/projects/bie-ma-le-review.webp",
        alt: "别骂了小程序的简历上传与评审设置页",
        caption: "提交材料 · 上传文件、粘贴文本与目标 JD",
        source: "runtime",
      },
    ],
    challenge: "模型很会说听起来正确的话。难的是逼它回到原文，讲清影响，还要给出改完以后能检查的标准。",
    decisions: [
      "四个角色可以说话不一样，但报告结构和质量底线完全一致。",
      "没有原文位置、影响说明和修改动作的批评，一律不算完成。",
      "文件只走临时链路；模型失败就明说，不能拿一段空泛建议假装评审已经结束。",
    ],
    ownership: {
      human: "角色怎么说话、什么算有用的批评、材料如何处理，以及哪里不能越线，都由我先定规矩。",
      ai: "AI 参与云函数、小程序、文件解析和评测，也作为被测试的对象反复交作业。",
    },
    verification: ["多材料类型评审 Smoke", "Provider 与小程序静态检查", "结构化输出 Evals"],
    boundary: "“暴君”只是让反馈没那么端着，不等于可以羞辱人。冒犯、贴标签和绝对化判断都不算专业。",
    tone: "red",
  },
  {
    id: "arcana-mirror",
    index: "07",
    name: "心镜拾光",
    enName: "ARCANA MIRROR",
    status: "V1.1 RC",
    category: "AI × 微信小程序",
    statement: "我想保留抽牌的仪式感，但不想让它替人下结论。",
    description:
      "心镜拾光是一件不打算商业化的小程序作品。每日一牌、单牌与三牌、78 张完整牌组、分享图和本地历史都做了；最费心的反而是删掉那些像预言一样笃定的话，让解读停在“照见自己”这里。",
    proof: "78 张完整牌组 · CloudBase AI · 安全阻断、事实校验与离线降级",
    stack: ["Product", "TypeScript", "CloudBase AI", "Safety", "Visual System"],
    image: "/projects/arcana-home.webp",
    imageAlt: "心镜拾光在微信开发者工具中运行的黑金首页",
    gallery: [
      {
        src: "/projects/arcana-home.webp",
        alt: "心镜拾光小程序首页与每日一牌入口",
        caption: "首页 · 每日一牌、单牌与三牌入口",
        source: "runtime",
      },
      {
        src: "/projects/arcana-question.webp",
        alt: "心镜拾光的解读方式与牌阵选择页",
        caption: "提问 · 选择生活指引或具体问题",
        source: "runtime",
      },
      {
        src: "/projects/arcana-ritual-live.webp",
        alt: "心镜拾光小程序的抽牌仪式界面",
        caption: "抽牌仪式 · 用节奏建立片刻停顿",
        source: "runtime",
      },
      {
        src: "/projects/arcana-result.webp",
        alt: "心镜拾光生成的单牌 AI 个性化解读页",
        caption: "心镜解读 · 实际生成的牌面结果与行动提示",
        source: "runtime",
      },
    ],
    challenge: "仪式感很容易让一句普通的话显得格外可信。怎样保留这份沉浸，又不让 AI 冒充命运或专业建议，是最难的部分。",
    decisions: [
      "生活指引默认离线可用；只有用户带着具体问题来时，AI 才参与解读。",
      "模型写得再漂亮，只要牌面事实不对、偏离问题或碰到安全红线，就不能展示。",
      "历史留在用户自己的设备上，分享图也不带出原问题，给那些不想被看见的念头留点空间。",
    ],
    ownership: {
      human: "我决定一次抽牌该有多慢、解读能说到哪里，也逐张检查牌组和每条安全边界。",
      ai: "AI 参与牌面视觉、TypeScript、CloudBase 接入和测试；生成的内容仍要接受规则检查。",
    },
    verification: ["领域、安全与解读契约测试", "78 张资产与分包体积门禁", "CloudBase AI 降级链路"],
    boundary: "它不会回答未来一定怎样，也不替代心理、医疗、法律或金融建议。正式发布前仍要人工检查，用户也不该输入能识别自己的隐私。",
    links: [{ label: "GitHub", href: "https://github.com/chenzhiyong1994/arcana-mirror" }],
    tone: "gold",
  },
  {
    id: "unverified-survivors",
    index: "08",
    name: "生者未明",
    enName: "UNVERIFIED SURVIVORS",
    status: "V0.4.0 · PLAYABLE",
    category: "Agent Logic × 微信小游戏",
    statement: "如果 NPC 真的会记仇、害怕和怀疑，争论会不会不一样？",
    description:
      "我想做一局真的能推理的单机游戏。六名 NPC 各自记着怀疑、信任、压力、恐惧和私人恩怨；轮到他们开口时，拿的是自己知道的事实，不是从台词池里随机抓一句。",
    proof: "10 人角色池 · 40 种子自动对局 · 原生 Canvas 与状态机",
    stack: ["Game Design", "JavaScript", "Agent Logic", "State Machine", "AI Relay"],
    image: "/projects/unverified-start.webp",
    imageAlt: "生者未明在微信开发者工具中运行的开场界面",
    gallery: [
      {
        src: "/projects/unverified-start.webp",
        alt: "生者未明在微信开发者工具中的开场页",
        caption: "开场 · 微信开发者工具实机",
        source: "runtime",
      },
      {
        src: "/projects/unverified-role.webp",
        alt: "生者未明在微信开发者工具中的身份确认页",
        caption: "身份确认 · 角色信息",
        source: "runtime",
      },
      {
        src: "/projects/unverified-game.webp",
        alt: "生者未明在微信开发者工具中的停电事件判断页",
        caption: "事件判断 · 第一次停电",
        source: "runtime",
      },
    ],
    challenge: "NPC 可以犯错，也可以偏心，但不能凭空知道自己没见过的事。每次判断都得追得回证词、关系和当时的情绪。",
    decisions: [
      "事实、游戏判定和说话文风分开保存；AI 可以润色语气，不能改姓名、数字或核验结果。",
      "问谁、记什么、怎么看伤势、何时公开核验，都有次数和代价，避免对话变成无限套话。",
      "除了自己试玩，我还让 40 个固定种子自动跑完整局，专门找那些玩到一半才会坏掉的状态。",
    ],
    ownership: {
      human: "世界观、角色之间为什么互相不信任、玩家每一步付出什么代价，以及 AI 能知道多少，都由我来定。",
      ai: "AI 参与 Canvas、NPC 决策代码、素材脚本和自动对局测试，也帮我暴露那些角色不该知道的秘密。",
    },
    verification: ["40 个不同种子的完整自动对局", "身份、问询、伤势与 AI 事实包测试", "可选模型中转失败时保持离线可玩"],
    boundary: "现在能完整玩完，但只有一个场景和一套七人身份配置。想开 AI 文风需要自己部署中转服务；不开也能离线玩。",
    tone: "blue",
  },
];

export const workSystems: WorkSystem[] = [
  {
    id: "content-os",
    index: "S1",
    name: "内容生产系统",
    enName: "CONTENT OS",
    role: "一组每天在用的内容 Agent",
    statement: "我把选题、资料整理和平台改写交给 Agent 先跑一遍，自己把住事实、观点和最后的发布。",
    flow: ["选题信号", "研究与事实", "公众号长文", "草稿校准", "小红书改编", "视觉生成"],
    agentDoes: "扫描信号、整理研究材料、生成长文初稿、按平台重写，并把不确定内容单独标出。",
    humanKeeps: "决定写什么、核对事实、调整作者声音；任何对外发布都由我确认。",
    lineage: ["TopicScout · 选题研究前身", "fresh-thing · 早期热点实验"],
    accent: "acid",
  },
  {
    id: "aigc",
    index: "S2",
    name: "AIGC 创作能力库",
    enName: "AIGC LIBRARY",
    role: "图片、视频和音乐 Agent 工作台",
    statement: "比起反复碰运气抽卡，我更愿意把参考图、审查标准和修改意见整理成一条能重复使用的流程。",
    flow: ["加载约束", "形成初稿", "结构审查", "一次优化", "聚焦验收", "真人反馈"],
    agentDoes: "按媒介加载不同的生成与审查规则，先出稿，再针对画面、镜头或听感做聚焦修改。",
    humanKeeps: "选方向、判断是否好看或好听，并把真实反馈写回下一轮规则。",
    accent: "orange",
  },
  {
    id: "career-os",
    index: "S3",
    name: "求职操作系统",
    enName: "CAREER OS",
    role: "围绕同一份履历事实协作的求职 Agent",
    statement: "简历、作品集和面试准备不再各写各的；Agent 先把 JD 拆开，再从同一份经历里找对应证据。",
    flow: ["候选人事实", "JD 拆解", "证据匹配", "简历变体", "A4 交付", "作品集回链"],
    agentDoes: "拆解岗位要求、匹配经历证据、生成有边界的材料变体，并完成版式检查。",
    humanKeeps: "确认每句话是否真实，决定怎样表达转向 AI 的意愿，不虚构项目和结果。",
    accent: "blue",
  },
  {
    id: "novelist",
    index: "S4",
    name: "长篇小说工作流",
    enName: "NOVELIST WORKFLOW",
    role: "陪我写长篇、也替我记住细节的小说 Agent",
    statement: "写到几十万字以后，真正难的不是下一句，而是谁知道了什么、哪条伏笔还没还。Agent 负责记账，我负责写人。",
    flow: ["世界与角色", "章线规划", "章节工作包", "正文写作", "状态增量", "连续性检查"],
    agentDoes: "整理章节工作包、更新人物状态和时间线，提醒前后矛盾与尚未收束的伏笔。",
    humanKeeps: "人物动机、叙事节奏和最终文字；Agent 的建议不能替代作者判断。",
    accent: "gold",
  },
  {
    id: "product-manager",
    index: "S5",
    name: "产品工作空间",
    enName: "PRODUCT MANAGER",
    role: "从问题定义一路协作到开发交接的产品 Agent",
    statement: "我会让 Agent 帮忙整理 PRD、做原型和找漏洞，但产品为什么做、做到哪里停，仍然由我来定。",
    flow: ["问题定义", "产品框架", "PRD", "原型", "对抗审查", "开发交接"],
    agentDoes: "把讨论整理成可执行材料，生成原型，做对抗式审查，并同步实现中暴露的新事实。",
    humanKeeps: "问题选择、优先级、范围取舍和上线判断；不把 Agent 的完整回答直接当需求。",
    accent: "red",
  },
];

export const profile = {
  "name": "陈志勇",
  "role": "高级产品经理 · B 端 / SaaS / AI / 数据",
  "intro": "10 年产品经验，把复杂业务变成好用的产品。从 SaaS 商业化、数据体系，到业务中的 AI；也亲手构建桌面工具、小程序和 Agent 工作流。",
  "location": "上海，中国",
  "facts": [
    {
      "value": "10",
      "label": "年产品经验"
    },
    {
      "value": "17",
      "label": "人团队管理"
    },
    {
      "value": "B × C",
      "label": "双端产品视角"
    }
  ],
  "education": "安徽农业大学 · 计算机科学与技术 · 本科"
};

export const careerCases = [
  {
    "id": "youjia",
    "index": "01",
    "name": "优家 · 智能填报",
    "enName": "AI IN THE REAL WORLD",
    "category": "亿阁科技 · 2025.05—至今",
    "statement": "把复杂的升学规则，变成可执行的决策。",
    "description": "负责核心填报业务与优家 B 端产品，覆盖 SaaS、客户端、移动端、小程序。开创艺术类与征集志愿场景，上线 AI 志愿表分析、AI 专业组分析，并孵化 Agent + 智能硬件驱动的「优伴」。",
    "proof": "日常 DAU 5 万+ · 高考季峰值 100 万+ · B 端高峰期从 6–7 月延长至 6–8 月",
    "metric": "1,072",
    "metricLabel": "B 端月活跃机构",
    "flow": [
      "获客转化",
      "客单创建",
      "智能推荐",
      "志愿表生成",
      "方案校验",
      "报告交付"
    ],
    "note": "优伴处于业务孵化阶段；AI 分析已融入核心填报场景。"
  },
  {
    "id": "trade-insight",
    "index": "02",
    "name": "商情洞察",
    "enName": "DATA TO BUSINESS",
    "category": "腾道信息 · 2024.08—2025.03",
    "statement": "让贸易数据，从可以查询走向支撑经营。",
    "description": "统筹商情洞察与产品库两条产品线，管理 17 人团队，对营收负责。围绕趋势、竞对、画像、选品与报告迭代分析场景，以对话式 AI 降低操作门槛，并参与一线售前。",
    "proof": "Q4 业绩环比增长 50%+（227 万+ → 340 万+）· 续约率 44.3% → 50.95%（+6.65 个百分点）",
    "metric": "1,290 万",
    "metricLabel": "年度产品线业绩（元）",
    "flow": [
      "海关数据",
      "质量治理",
      "场景分析",
      "对话式交互",
      "行动建议",
      "业务跟进"
    ],
    "note": "2 周解决积压半年的数据治理问题。年度业绩为产品线结果，由团队共同交付。"
  },
  {
    "id": "product-library",
    "index": "03",
    "name": "产品库",
    "enName": "A NEW DATA DIMENSION",
    "category": "腾道信息 · 2024.08—2025.03",
    "statement": "用 AI 转译原始数据，打开新的分析维度。",
    "description": "从 0 到 1 上线产品库，以大模型转译海关数据，新增「产品名称」字段。将复杂分析封装成对话式交互，让客户用业务语言完成检索、分析与操作。",
    "proof": "上线 3 个月 · 付费用户 750+ · 周活跃率约 80% · 周留存率 51%",
    "metric": "750+",
    "metricLabel": "上线三个月付费用户",
    "flow": [
      "原始记录",
      "AI 转译",
      "产品名称",
      "新分析维度",
      "对话检索",
      "分析与操作"
    ],
    "note": "周活跃率描述使用频率，不等同于留存率。"
  },
  {
    "id": "qing-bi",
    "index": "04",
    "name": "轻析 / QingBI",
    "enName": "ZERO TO COMMERCIAL",
    "category": "易校科技 · 2020.10—2024.08",
    "statement": "从第一批种子用户，走到独立商业化。",
    "description": "负责报表引擎、门户引擎、数据建设三条产品线，管理 15 人团队。主导自研 BI 全生命周期，培养 30 家种子用户，推进内测、公测与商业化，并通过跨业务组合销售提升客单价。",
    "proof": "2023 年独立业绩 220 万元 · SMB 客单价 +47% · KA 客单价 +150%",
    "metric": "220 万",
    "metricLabel": "2023 年独立业绩（元）",
    "flow": [
      "需求验证",
      "30 家种子用户",
      "产品内测",
      "开放公测",
      "商业化",
      "组合销售"
    ],
    "note": "SMB 客单价 1.5 → 2.2 万元；KA 客单价 4 → 10 万元。"
  },
  {
    "id": "data-foundation",
    "index": "05",
    "name": "数据建设",
    "enName": "A SHARED SOURCE OF TRUTH",
    "category": "易校科技 · 2020.10—2024.08",
    "statement": "先统一口径，再让数据进入日常决策。",
    "description": "从 0 构建覆盖 5 条产品线的数据体系，串起埋点需求、口径定义、采集、审查与监控。沉淀 20+ 规范文档与 100+ 活跃看板，让多业务线拥有共同的经营语言。",
    "proof": "5 条产品线 · 50+ 埋点事件 · 200+ 指标 · 埋点数据年上报 10 亿次",
    "metric": "200+",
    "metricLabel": "统一业务指标",
    "flow": [
      "埋点需求",
      "口径定义",
      "数据采集",
      "数据审查",
      "数据监控",
      "经营决策"
    ],
    "note": "10 亿次为埋点数据年上报量。"
  }
];

export const impacts: Impact[] = [
  {
    "value": "1,072",
    "label": "B 端月活跃机构",
    "detail": "核心填报业务，连接机构服务与考生决策。",
    "source": "优家 · 智能填报"
  },
  {
    "value": "1,290 万",
    "label": "年度产品线业绩（元）",
    "detail": "Q4 业绩环比增长 50%+，续约率提升 6.65 个百分点。",
    "source": "商情洞察"
  },
  {
    "value": "220 万",
    "label": "2023 年独立业绩（元）",
    "detail": "自研 BI 从 0 到 1，再到商业化。",
    "source": "轻析 / QingBI"
  },
  {
    "value": "200+",
    "label": "统一业务指标",
    "detail": "覆盖 5 条产品线的统一数据体系。",
    "source": "数据建设"
  }
];

export const builderModes: BuilderMode[] = [
  {
    id: "frame",
    order: "01",
    label: "定义问题",
    english: "FRAME",
    headline: "先别急着列功能，看看问题到底值不值得做。",
    body: "我会先对齐业务结果、用户处境和现实限制，再决定该做什么、暂时不做什么。很多项目真正省下的成本，都发生在这一步。",
    outputs: ["用户洞察", "机会判断", "产品边界"],
  },
  {
    id: "design",
    order: "02",
    label: "设计系统",
    english: "DESIGN",
    headline: "把顺利路径和会出错的地方，放在同一张图里想。",
    body: "信息怎么组织、用户下一步做什么、数据怎么算、失败时怎么退回来，这些需要一起设计。好看的演示只是起点。",
    outputs: ["产品架构", "交互原型", "数据与安全规则"],
  },
  {
    id: "build",
    order: "03",
    label: "动手构建",
    english: "BUILD",
    headline: "能自己做出来，很多判断就不用停在会议室里。",
    body: "计算机背景让我能借助 AI 深入 TypeScript、React、Node.js 和云函数，把关键流程做成高保真原型或可运行的 MVP，再用真实反馈修正想法。",
    outputs: ["前端实现", "AI 工作流", "服务端链路"],
  },
  {
    id: "verify",
    order: "04",
    label: "验证质量",
    english: "VERIFY",
    headline: "跑通一次不难，难的是出错时也别骗用户。",
    body: "我会把效果评测、异常降级、隐私和状态测试提前考虑。尤其是 AI 产品，什么时候该停下来交给人，比多生成一个答案更重要。",
    outputs: ["AI Evals", "自动化测试", "上线检查"],
  },
  {
    id: "ship",
    order: "05",
    label: "推动落地",
    english: "SHIP",
    headline: "方案写完以后，真正麻烦的工作才刚开始。",
    body: "我习惯用路线图和阶段目标把事情推到上线，再拿真实反馈决定下一轮。结果可能是增长，也可能是及时停掉一个并不成立的方向。",
    outputs: ["Roadmap", "团队协作", "商业结果"],
  },
];

export const creativeChannels: CreativeChannel[] = [
  {
    index: "A",
    icon: "book",
    type: "长篇小说",
    title: "雾陨纪年",
    metric: "36.1 万字 · 100 章",
    description:
      "一部长篇科幻末世连载：外星文明的筛选程序，与人类保留缺陷基因的选择相撞。",
    link: "https://fanqienovel.com/page/7488007028825148478?enter_from=search",
    linkLabel: "去番茄小说阅读",
    accent: "blue",
  },
  {
    index: "B",
    icon: "music",
    type: "AI 音乐",
    title: "卡北莫多",
    metric: "50+ 首公开作品",
    description:
      "从国风、电子到都市叙事，我先写下想表达的画面和情绪，再和生成工具来回打磨成歌。",
    link: "https://music.163.com/#/artist?id=100314875",
    linkLabel: "去网易云音乐",
    accent: "orange",
  },
  {
    index: "C",
    icon: "writing",
    type: "深度写作",
    title: "卡北的思想瓜摊",
    metric: "39 篇文章 · 16,582 次赞同",
    description:
      "写 AI 产品、数据产品、职场和业务判断。很多文章都来自一次真实项目之后，我想把当时为什么那样选讲清楚。",
    link: "https://www.zhihu.com/people/chen-zhi-yong-80-97/posts",
    linkLabel: "去知乎阅读",
    accent: "acid",
  },
  {
    index: "D",
    icon: "wechat",
    type: "微信公众号",
    title: "卡北不卡",
    metric: "29 篇原创文章",
    description:
      "围绕 AI 产品、商业判断与社会观察写作。比起给结论，我更愿意把自己是怎么走到这个结论的摊开来讲。",
    link: "https://mp.weixin.qq.com/s/XYVIB9OT1PPE8GXL_WQS6Q",
    linkLabel: "读一篇公众号代表作",
    accent: "red",
  },
  {
    index: "E",
    icon: "sticker",
    type: "微信表情",
    title: "微信表情作品集",
    metric: "多套作品 · 订阅破万",
    description:
      "把角色设定、情绪洞察与传播语境压进一张小图里。多套微信表情获得上万订阅，真实进入用户的日常聊天。",
    linkLabel: "作品截图与商店链接待补",
    accent: "warm",
  },
  {
    index: "F",
    icon: "video",
    type: "影像实验",
    title: "Motion Notes",
    metric: "持续更新中",
    description:
      "围绕 AI 视觉、短片与叙事视频的创作实验。公开作品页将在下一阶段接入。",
    accent: "paper",
  },
];

export const articles: Article[] = [
  {
    title: "为什么 Agent 更适合高考志愿填报",
    source: "公众号 · 卡北不卡",
    tag: "AI PRODUCT",
    href: "https://mp.weixin.qq.com/s/XYVIB9OT1PPE8GXL_WQS6Q",
  },
  {
    title: "AI 不可怕，可怕的是公司太信任它",
    source: "公众号 · 卡北不卡",
    tag: "AI & BUSINESS",
    href: "https://mp.weixin.qq.com/s/1-w1yvTLoDhjlu8kVM5OxA",
  },
  {
    title: "用户洞察的框架",
    source: "知乎 · 卡北的思想瓜摊",
    tag: "METHOD",
    href: "https://zhuanlan.zhihu.com/p/696540991",
  },
  {
    title: "PaaS、SaaS 产品设计时的思路差异",
    source: "知乎 · 卡北的思想瓜摊",
    tag: "PRODUCT",
    href: "https://zhuanlan.zhihu.com/p/695514681",
  },
];

export const timeline = [
  {
    "range": "2025.05—NOW",
    "company": "上海亿阁科技有限公司",
    "role": "高级产品经理",
    "detail": "负责核心填报与优家 B 端业务，推进四端协同、艺术类与征集志愿场景、AI 分析及优伴孵化。"
  },
  {
    "range": "2024.08—2025.03",
    "company": "上海腾道信息技术有限公司",
    "role": "高级产品经理 · 产品线主管",
    "detail": "统筹商情洞察与产品库两条产品线，管理 17 人团队，对产品规划、营收与商业结果负责。"
  },
  {
    "range": "2020.10—2024.08",
    "company": "上海易校信息科技有限公司",
    "role": "高级产品经理 · 产品线负责人",
    "detail": "负责报表引擎、门户引擎与数据建设，管理 15 人团队；推动 QingBI 商业化，建立跨产品线数据体系。"
  },
  {
    "range": "2018.04—2020.10",
    "company": "上海时代光华教育发展有限公司",
    "role": "产品经理",
    "detail": "负责企业学习平台运营与激励体系。个人门户首月覆盖 700+ 企业客户，运营工具支持 5 分钟创建 H5 活动。"
  },
  {
    "range": "2016.07—2018.04",
    "company": "点点客",
    "role": "产品助理",
    "detail": "参与「到店」SaaS 产品 10+ 次迭代，负责用户调研、PRD 与上线跟进，优化预约和核销流程。"
  }
];
