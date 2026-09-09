const languageButton = document.querySelector(".language");
const translatedNodes = [...document.querySelectorAll("[data-en]")];
const translatedImages = [...document.querySelectorAll("[data-en-alt]")];
const chineseText = new Map(
  translatedNodes.map((node) => [node, node.textContent]),
);
const chineseAlt = new Map(translatedImages.map((node) => [node, node.alt]));
const copyStatus = document.querySelector("#copy-status");
let language = "zh";

function setLanguage(next) {
  language = next;
  const english = next === "en";
  document.documentElement.lang = english ? "en" : "zh-CN";
  for (const node of translatedNodes)
    node.textContent = english ? node.dataset.en : chineseText.get(node);
  for (const node of translatedImages)
    node.alt = english ? node.dataset.enAlt : chineseAlt.get(node);
  languageButton.innerHTML = english
    ? '中 <span aria-hidden="true">/ EN</span>'
    : 'EN <span aria-hidden="true">/ 中</span>';
  languageButton.setAttribute(
    "aria-label",
    english ? "切换到中文" : "Switch to English",
  );
  document.title = english
    ? "Personal Hub · A home for what you make"
    : "Personal Hub · 让作品有个自己的地方";
  document.querySelector('meta[name="description"]').content = english
    ? "An open-source personal website built around real work. Explore the design, try the interactions, and make it your own."
    : "Personal Hub：一个以真实作品为中心的开源个人主页。浏览设计、体验交互，了解如何改成自己的版本。";
  copyStatus.textContent = "";
  try {
    localStorage.setItem("personal-hub-project-language", next);
  } catch {
    /* The page also works without storage. */
  }
}
try {
  if (localStorage.getItem("personal-hub-project-language") === "en")
    setLanguage("en");
} catch {
  /* Keep Chinese as the default. */
}
languageButton.addEventListener("click", () =>
  setLanguage(language === "zh" ? "en" : "zh"),
);

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute("aria-controls")).hidden =
      !selected;
  }
}
for (const tab of tabs) {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const index = tabs.indexOf(tab);
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? tabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
            tabs.length;
    selectTab(tabs[next]);
    tabs[next].focus();
  });
}
document.querySelector("#copy-command").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(
      document.querySelector("#install-command").textContent,
    );
    copyStatus.textContent =
      language === "en"
        ? "Copied. Paste these commands into your terminal."
        : "已复制，可以粘贴到终端运行。";
  } catch {
    copyStatus.textContent =
      language === "en"
        ? "Copy unavailable here. Select the commands above to copy them manually."
        : "当前无法自动复制，请选中上方命令手动复制。";
  }
});
