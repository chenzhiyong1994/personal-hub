export type Project = {
  id: string;
  index: string;
  name: string;
  enName: string;
  category: string;
  group: "tools" | "play";
  status: string;
  cover: "desktop" | "phone" | "clock" | "art" | "game";
  tone: string;
  statement: string;
  description: string;
  image?: string;
  imageAlt: string;
  gallery?: Array<{
    src: string;
    alt: string;
    caption: string;
    source: "runtime" | "source" | "archive";
  }>;
  features: string[];
  boundary: string;
  links: Array<{ label: string; href: string }>;
};
export type WorkSystem = {
  id: string;
  index: string;
  name: string;
  role: string;
  statement: string;
  input: string;
  output: string;
  flow: string[];
  exampleTitle: string;
  exampleLabel: string;
  example: string[];
  note: string;
  link?: string;
};
export type Impact = {
  value: string;
  label: string;
  detail: string;
  source: string;
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
    name: "北页",
    enName: "BeiyeMD",
    category: "桌面写作工具",
    group: "tools",
    status: "v1.1.3",
    cover: "desktop",
    tone: "paper",
    statement: "打开文档，就能安心写下去。",
    description:
      "我想给 Markdown 留一个清爽的地方。打开本地文件，几份文档来回切换，随时看看排版，再接着写。北页就围绕这些小事慢慢打磨。",
    image: "/projects/beiyemd-clean.webp",
    imageAlt: "北页桌面工作区：文档列表与 Markdown 预览",
    gallery: [
      {
        src: "/projects/beiyemd-clean.webp",
        alt: "本地文档、多文档切换与预览",
        caption: "本地文档、多文档切换与预览",
        source: "runtime",
      },
    ],
    features: [
      "预览与源码随时切换",
      "全文查找、替换与格式检查",
      "五套主题，Windows 与 macOS",
    ],
    boundary: "当前版本 1.1.3。截图使用示例文档，展示工作区布局。",
    links: [
      {
        label: "下载北页",
        href: "https://github.com/chenzhiyong1994/BeiyeMD/releases/latest",
      },
      {
        label: "GitHub",
        href: "https://github.com/chenzhiyong1994/BeiyeMD",
      },
    ],
    index: "01",
  },
  {
    id: "riji",
    name: "日跻",
    enName: "RIJI",
    category: "离线训练记录",
    group: "tools",
    status: "v1.0.6",
    cover: "phone",
    tone: "sage",
    statement: "练完一组，记下一点进步。",
    description:
      "重量、次数、上次练到哪里——训练时真正要记的东西并不多。我把它们放进一个不用注册、打开就能记的小 App，数据留在自己手机里。",
    image: "/projects/riji-training.webp",
    imageAlt: "日跻训练界面，记录卧推重量与次数，使用虚构演示数据",
    gallery: [
      {
        src: "/projects/riji-training.webp",
        alt: "逐组记录 · 虚构演示数据",
        caption: "逐组记录 · 虚构演示数据",
        source: "runtime",
      },
      {
        src: "/projects/riji-history.webp",
        alt: "训练历史 · 虚构演示数据",
        caption: "训练历史 · 虚构演示数据",
        source: "runtime",
      },
      {
        src: "/projects/riji-movements.webp",
        alt: "动作库与筛选",
        caption: "动作库与筛选",
        source: "runtime",
      },
    ],
    features: [
      "逐组记录，进行中的训练自动保存",
      "80 个常用动作与个人模板",
      "完全离线，可导出本地备份",
    ],
    boundary:
      "Android 8.0+。已在 Android 16 模拟器验证，旧版本与更多实机仍待验证；动作动画不作为训练指导。",
    links: [
      {
        label: "查看与下载",
        href: "https://chenzhiyong1994.github.io/riji/",
      },
      {
        label: "GitHub",
        href: "https://github.com/chenzhiyong1994/riji",
      },
    ],
    index: "02",
  },
  {
    id: "hush-wake",
    name: "悄醒",
    enName: "HushWake",
    category: "闹钟与助眠",
    group: "tools",
    status: "v0.4.8 · BETA",
    cover: "clock",
    tone: "peach",
    statement: "让入睡和醒来，都从容一点。",
    description:
      "睡前听一会儿雨声，早上按自己的节奏醒来。做悄醒时，我花了不少心思在声音该从哪里响起：戴着耳机时，连接断了就先停下来。",
    imageAlt: "悄醒闹钟概念插画，非应用截图",
    features: [
      "单次与每周闹钟，支持稍后提醒",
      "八种自然声音，定时结束与淡出",
      "耳机会话核验输出，异常时停止",
    ],
    boundary:
      "Android 12+ Beta。无耳机时可按普通媒体音量外放；耳机会话会核验路由。更多实体耳机兼容性仍在验证中。",
    links: [
      {
        label: "查看与下载",
        href: "https://chenzhiyong1994.github.io/hush-wake/",
      },
      {
        label: "GitHub",
        href: "https://github.com/chenzhiyong1994/hush-wake",
      },
    ],
    index: "03",
  },
  {
    id: "cost-guard",
    name: "Cost Guard",
    enName: "Cost Guard",
    category: "AI 开销工具",
    group: "tools",
    status: "v4.3.1",
    cover: "desktop",
    tone: "lavender",
    statement: "AI 在忙，也想知道花了多少。",
    description:
      "一次长任务跑下来，调用了几个模型、用了多少 token，很容易没个数。我给 DeepSeek Harness 做了一个小插件，把开销估算放在输入框旁边，抬眼就能看到。",
    image: "/projects/cost-guard-settings.webp",
    imageAlt: "Cost Guard 插件的模型价格配置与会话汇总界面",
    gallery: [
      {
        src: "/projects/cost-guard-settings.webp",
        alt: "价格配置与会话汇总 · 示例配置，非当前官方报价",
        caption: "价格配置与会话汇总 · 示例配置，非当前官方报价",
        source: "runtime",
      },
    ],
    features: [
      "读取实际用量，按模型汇总",
      "任务与会话开销一目了然",
      "价格可配置，数据留在本地",
    ],
    boundary:
      "面向 DeepSeek Harness 的本地插件。金额是按配置价格计算的估算值，不是官方账单；已验证兼容 0.1.0-rc6。",
    links: [
      {
        label: "查看插件",
        href: "https://github.com/chenzhiyong1994/dsh-cost-guard",
      },
    ],
    index: "04",
  },
  {
    id: "arcana-mirror",
    name: "心镜拾光",
    enName: "Arcana Mirror",
    category: "卡牌与自我对话",
    group: "play",
    status: "v1.1 · 候选版本",
    cover: "art",
    tone: "night",
    statement: "借一张牌，聊聊心里的事。",
    description:
      "我对卡牌的兴趣在于，它能让一句说不清的话有个开头。心镜拾光把抽牌、记录和回看放在一起，留一点仪式感，也留一点和自己说话的空间。",
    image: "/projects/arcana-ritual.webp",
    imageAlt: "心镜拾光项目的隐士牌与牌背原始素材",
    gallery: [
      {
        src: "/projects/arcana-ritual.webp",
        alt: "隐士牌与牌背设计素材",
        caption: "项目卡牌原始素材，非运行截图",
        source: "source",
      },
    ],
    features: [
      "78 张牌与完整牌组视觉",
      "本地历史与分享海报",
      "围绕感受提问，帮助整理想法",
    ],
    boundary:
      "个人微信小程序实验，当前为候选版本。用于自我反思，不提供命运预测；暂未提供公开体验入口。",
    links: [],
    index: "05",
  },
  {
    id: "unverified-survivors",
    name: "生者未明",
    enName: "Unverified Survivors",
    category: "叙事推理游戏",
    group: "play",
    status: "v0.4 · 可玩原型",
    cover: "game",
    tone: "sand",
    statement: "门外的人，你敢放进来吗？",
    description:
      "雨夜、避难所、一群说法对不上的陌生人。我想做一个靠观察和追问推进的小游戏，让玩家自己决定相信谁。AI 可以参与对话，但改不了已经发生的事。",
    image: "/projects/unverified-start.webp",
    imageAlt: "生者未明游戏开场：雨夜封站",
    gallery: [
      {
        src: "/projects/unverified-start.webp",
        alt: "第一章 · 雨夜封站",
        caption: "第一章 · 雨夜封站",
        source: "runtime",
      },
    ],
    features: [
      "观察、提问、核对证词",
      "NPC 状态与固定事实共同推进",
      "AI 对话可选，基础玩法独立运行",
    ],
    boundary:
      "微信小游戏可玩原型。已有 40 局种子自动化验证，不代表真人玩家测试或正式上线。",
    links: [],
    index: "06",
  },
];

export const workSystems: WorkSystem[] = [
  {
    id: "content-os",
    index: "01",
    name: "Content OS",
    role: "把一个念头，写成一篇文章。",
    statement:
      "选题往往来得很快，真正费时间的是把话想清楚。我把找资料、整理线索和校稿串在一起，给写作留出更完整的时间。",
    input: "一个选题，或几条零散线索",
    output: "研究笔记、文章草稿、配图建议",
    flow: ["找线索", "核对资料", "写与修改"],
    exampleTitle: "一篇文章的工作目录",
    exampleLabel: "交付结构示意",
    example: [
      "01 选题：为什么值得写",
      "02 资料：来源、事实与疑问",
      "03 草稿：论点、故事与例子",
      "04 校稿：语气、逻辑与出处",
    ],
    note: "资料和初稿可以一起做，观点与最后一遍修改由我来。",
    link: "https://github.com/chenzhiyong1994/content-os",
  },
  {
    id: "drama-skills",
    index: "02",
    name: "短剧创作",
    role: "让一个故事，走到镜头面前。",
    statement:
      "故事写完以后，我还想看看它在画面里是什么样。借着开源 Drama Skills，我继续调整剧本、拆镜头、试关键帧，也把制作时踩过的坑补回本地流程。",
    input: "故事想法、小说片段或剧本",
    output: "剧本、视觉设定、分镜与图像／视频提示词",
    flow: ["写剧本", "定视觉", "拆镜头"],
    exampleTitle: "剧本片段：零号病床",
    exampleLabel: "本地创作 · EP001 / R9",
    example: [
      "黑暗中，病床脚轮滚过金属地面的声音由远及近。",
      "系统广播：初始维生，七十二小时。",
      "周衡：风险呢？",
      "系统广播：无附加说明。",
    ],
    note: "在开源 Drama Skills 基础上做的本地创作与流程调整。这里展示剧本片段，尚未公开成片。",
    link: "https://github.com/zenstory-ai/drama-skills",
  },
  {
    id: "product-manager",
    index: "03",
    name: "Product Manager",
    role: "把需求讲清楚，少一点来回猜。",
    statement:
      "一份 PRD 最有用的部分，常常是那些容易漏掉的细节：谁能操作、失败后怎么办、怎样才算做完。我把这些检查习惯整理成创建和审查两套工具。",
    input: "业务需求，或一份待审查的 PRD",
    output: "范围合适的 PRD、问题清单与验收标准",
    flow: ["理清范围", "补齐规则", "检查验收"],
    exampleTitle: "功能示例：批量导出",
    exampleLabel: "仓库中的虚构需求示例",
    example: [
      "权限：仅采购管理员可见",
      "上限：一次最多选择 500 条",
      "处理：后台导出，完成后通知发起人",
      "异常：失败任务可重试一次",
    ],
    note: "按需求大小决定文档深度；不确定的业务规则保留为待确认。",
    link: "https://github.com/chenzhiyong1994/product-manager",
  },
];

export const archivedProjects = [
  {
    name: "AI Business Twin",
    description: "把咨询、审批和运营动作串起来的本地实验。",
  },
  {
    name: "Stack Trail",
    description: "记录练习过程，也给学习留下可回看的证据。",
  },
  {
    name: "胶囊办公室",
    description: "把终端与 Agent 状态装进一个像素办公室。",
  },
  {
    name: "别骂了",
    description: "把一句“再改改”，拆成有根据的修改建议。",
  },
];

export const profile = {
  name: "陈志勇",
  role: "高级产品经理 · B 端 / SaaS / AI / 数据",
  intro:
    "10 年产品经验，把复杂业务变成好用的产品。从 SaaS 商业化、数据体系，到业务中的 AI；也亲手构建桌面工具、小程序和 Agent 工作流。",
  location: "上海，中国",
  facts: [
    {
      value: "10",
      label: "年产品经验",
    },
    {
      value: "17",
      label: "人团队管理",
    },
    {
      value: "B × C",
      label: "双端产品视角",
    },
  ],
  education: "安徽农业大学 · 计算机科学与技术 · 本科",
};

export const careerCases = [
  {
    id: "youjia",
    index: "01",
    name: "优家 · 智能填报",
    enName: "AI IN THE REAL WORLD",
    category: "亿阁科技 · 2025.05—至今",
    statement: "把复杂的升学规则，变成可执行的决策。",
    description:
      "负责核心填报业务与优家 B 端产品，覆盖 SaaS、客户端、移动端、小程序。开创艺术类与征集志愿场景，上线 AI 志愿表分析、AI 专业组分析，并孵化 Agent + 智能硬件驱动的「优伴」。",
    proof:
      "日常 DAU 5 万+ · 高考季峰值 100 万+ · B 端高峰期从 6–7 月延长至 6–8 月",
    metric: "1,072",
    metricLabel: "B 端月活跃机构",
    flow: [
      "获客转化",
      "客单创建",
      "智能推荐",
      "志愿表生成",
      "方案校验",
      "报告交付",
    ],
    note: "优伴处于业务孵化阶段；AI 分析已融入核心填报场景。",
  },
  {
    id: "trade-insight",
    index: "02",
    name: "商情洞察",
    enName: "DATA TO BUSINESS",
    category: "腾道信息 · 2024.08—2025.03",
    statement: "让贸易数据，从可以查询走向支撑经营。",
    description:
      "统筹商情洞察与产品库两条产品线，管理 17 人团队，对营收负责。围绕趋势、竞对、画像、选品与报告迭代分析场景，以对话式 AI 降低操作门槛，并参与一线售前。",
    proof:
      "Q4 业绩环比增长 50%+（227 万+ → 340 万+）· 续约率 44.3% → 50.95%（+6.65 个百分点）",
    metric: "1,290 万",
    metricLabel: "年度产品线业绩（元）",
    flow: [
      "海关数据",
      "质量治理",
      "场景分析",
      "对话式交互",
      "行动建议",
      "业务跟进",
    ],
    note: "2 周解决积压半年的数据治理问题。年度业绩为产品线结果，由团队共同交付。",
  },
  {
    id: "product-library",
    index: "03",
    name: "产品库",
    enName: "A NEW DATA DIMENSION",
    category: "腾道信息 · 2024.08—2025.03",
    statement: "用 AI 转译原始数据，打开新的分析维度。",
    description:
      "从 0 到 1 上线产品库，以大模型转译海关数据，新增「产品名称」字段。将复杂分析封装成对话式交互，让客户用业务语言完成检索、分析与操作。",
    proof: "上线 3 个月 · 付费用户 750+ · 周活跃率约 80% · 周留存率 51%",
    metric: "750+",
    metricLabel: "上线三个月付费用户",
    flow: [
      "原始记录",
      "AI 转译",
      "产品名称",
      "新分析维度",
      "对话检索",
      "分析与操作",
    ],
    note: "周活跃率描述使用频率，不等同于留存率。",
  },
  {
    id: "qing-bi",
    index: "04",
    name: "轻析 / QingBI",
    enName: "ZERO TO COMMERCIAL",
    category: "易校科技 · 2020.10—2024.08",
    statement: "从第一批种子用户，走到独立商业化。",
    description:
      "负责报表引擎、门户引擎、数据建设三条产品线，管理 15 人团队。主导自研 BI 全生命周期，培养 30 家种子用户，推进内测、公测与商业化，并通过跨业务组合销售提升客单价。",
    proof: "2023 年独立业绩 220 万元 · SMB 客单价 +47% · KA 客单价 +150%",
    metric: "220 万",
    metricLabel: "2023 年独立业绩（元）",
    flow: [
      "需求验证",
      "30 家种子用户",
      "产品内测",
      "开放公测",
      "商业化",
      "组合销售",
    ],
    note: "SMB 客单价 1.5 → 2.2 万元；KA 客单价 4 → 10 万元。",
  },
  {
    id: "data-foundation",
    index: "05",
    name: "数据建设",
    enName: "A SHARED SOURCE OF TRUTH",
    category: "易校科技 · 2020.10—2024.08",
    statement: "先统一口径，再让数据进入日常决策。",
    description:
      "从 0 构建覆盖 5 条产品线的数据体系，串起埋点需求、口径定义、采集、审查与监控。沉淀 20+ 规范文档与 100+ 活跃看板，让多业务线拥有共同的经营语言。",
    proof: "5 条产品线 · 50+ 埋点事件 · 200+ 指标 · 埋点数据年上报 10 亿次",
    metric: "200+",
    metricLabel: "统一业务指标",
    flow: [
      "埋点需求",
      "口径定义",
      "数据采集",
      "数据审查",
      "数据监控",
      "经营决策",
    ],
    note: "10 亿次为埋点数据年上报量。",
  },
];

export const impacts: Impact[] = [
  {
    value: "1,072",
    label: "B 端月活跃机构",
    detail: "核心填报业务，连接机构服务与考生决策。",
    source: "优家 · 智能填报",
  },
  {
    value: "1,290 万",
    label: "年度产品线业绩（元）",
    detail: "Q4 业绩环比增长 50%+，续约率提升 6.65 个百分点。",
    source: "商情洞察",
  },
  {
    value: "220 万",
    label: "2023 年独立业绩（元）",
    detail: "自研 BI 从 0 到 1，再到商业化。",
    source: "轻析 / QingBI",
  },
  {
    value: "200+",
    label: "统一业务指标",
    detail: "覆盖 5 条产品线的统一数据体系。",
    source: "数据建设",
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
    range: "2025.05—NOW",
    company: "上海亿阁科技有限公司",
    role: "高级产品经理",
    detail:
      "负责核心填报与优家 B 端业务，推进四端协同、艺术类与征集志愿场景、AI 分析及优伴孵化。",
  },
  {
    range: "2024.08—2025.03",
    company: "上海腾道信息技术有限公司",
    role: "高级产品经理 · 产品线主管",
    detail:
      "统筹商情洞察与产品库两条产品线，管理 17 人团队，对产品规划、营收与商业结果负责。",
  },
  {
    range: "2020.10—2024.08",
    company: "上海易校信息科技有限公司",
    role: "高级产品经理 · 产品线负责人",
    detail:
      "负责报表引擎、门户引擎与数据建设，管理 15 人团队；推动 QingBI 商业化，建立跨产品线数据体系。",
  },
  {
    range: "2018.04—2020.10",
    company: "上海时代光华教育发展有限公司",
    role: "产品经理",
    detail:
      "负责企业学习平台运营与激励体系。个人门户首月覆盖 700+ 企业客户，运营工具支持 5 分钟创建 H5 活动。",
  },
  {
    range: "2016.07—2018.04",
    company: "点点客",
    role: "产品助理",
    detail:
      "参与「到店」SaaS 产品 10+ 次迭代，负责用户调研、PRD 与上线跟进，优化预约和核销流程。",
  },
];
