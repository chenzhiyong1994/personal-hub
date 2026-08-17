export function Marquee() {
  const items = [
    "产品判断",
    "从判断到交付",
    "AI 工作流",
    "复杂系统",
    "数据产品",
    "深度写作",
    "音乐创作",
    "HUMAN × AI",
    "0 → 1",
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
