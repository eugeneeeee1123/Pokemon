import fs from "node:fs";
import path from "node:path";

function makeSlug(sec, path, title) {
  const raw = `${sec} ${path} ${title}`;
  return raw
    .toLowerCase()
    .replace(/[.`&]/g, "")
    .replace(/[/()]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

const groups = [
  {
    num: "1",
    name: "1. HTML 页面结构 (HTML Pages)",
    files: [
      { sec: "1.1", path: "index.html", title: "Home / 青纸首页", lang: "html" },
      { sec: "1.2", path: "pokedex.html", title: "Dex / 双视图全 1025 图鉴", lang: "html" },
      { sec: "1.3", path: "pokemon.html", title: "Detail / 详情与开球展台", lang: "html" },
      { sec: "1.4", path: "regions.html", title: "Regions / 10 官方地区地图", lang: "html" },
      { sec: "1.5", path: "types.html", title: "Types / 18 属性矩阵克制表", lang: "html" },
      { sec: "1.6", path: "moves.html", title: "Moves / 招式数据库与战斗属性", lang: "html" },
      { sec: "1.7", path: "abilities.html", title: "Abilities / 特性效果与宝可梦索引", lang: "html" },
      { sec: "1.8", path: "collection.html", title: "Collection / 全图鉴与地区收集进度", lang: "html" },
      { sec: "1.9", path: "team.html", title: "Belt / 6 槽腰带编成", lang: "html" },
      { sec: "1.10", path: "lineup.html", title: "Lineup / 战力与属性缺口分析", lang: "html" },
      { sec: "1.11", path: "battle-lab.html", title: "Battle Lab / 双宝可梦对战推演", lang: "html" },
      { sec: "1.12", path: "characters.html", title: "Characters / 动画与历代游戏核心人物名录", lang: "html" },
      { sec: "1.13", path: "games.html", title: "Games / 历代正作游戏与各世代版本海报档案", lang: "html" },
      { sec: "1.14", path: "about.html", title: "File / 架构说明与数据源", lang: "html" },
      { sec: "1.15", path: "quiz.html", title: "Booster Pack Lab / 实体卡包拆包实验室", lang: "html" }
    ]
  },
  {
    num: "2",
    name: "2. CSS 样式模块 (CSS Stylesheets)",
    files: [
      { sec: "2.1", path: "css/tokens.css", title: "设计 Token & 变量", lang: "css" },
      { sec: "2.2", path: "css/base.css", title: "全局排版与基础样式", lang: "css" },
      { sec: "2.3", path: "css/buttons.css", title: "按钮与交互控件规范", lang: "css" },
      { sec: "2.4", path: "css/pokeball.css", title: "开闭精灵球组件动画", lang: "css" },
      { sec: "2.5", path: "css/pages.css", title: "各页面专用布局与响应式样式", lang: "css" }
    ]
  },
  {
    num: "3",
    name: "3. JavaScript 核心模块 (JavaScript Modules)",
    files: [
      { sec: "3.1", path: "js/api.js", title: "PokeAPI 异步请求与缓存", lang: "javascript" },
      { sec: "3.2", path: "js/regions-data.js", title: "10 地区编号区间字典", lang: "javascript" },
      { sec: "3.3", path: "js/regions.js", title: "地区实地探索地图与生态点位交互", lang: "javascript" },
      { sec: "3.4", path: "js/types-chart.js", title: "18×18 属性克制常数矩阵", lang: "javascript" },
      { sec: "3.5", path: "js/pokeball.js", title: "精灵球开合音效与转场控制", lang: "javascript" },
      { sec: "3.6", path: "js/pokedex.js", title: "名录+胶片双视图/全1025只图鉴渲染", lang: "javascript" },
      { sec: "3.7", path: "js/pokemon.js", title: "详情页标本台/3D模型/Shiny切换", lang: "javascript" },
      { sec: "3.8", path: "js/types.js", title: "属性色票与矩阵交互", lang: "javascript" },
      { sec: "3.9", path: "js/team.js", title: "腰带存储与拖拽排序", lang: "javascript" },
      { sec: "3.10", path: "js/lineup.js", title: "弱点缺口计算与两只对比", lang: "javascript" },
      { sec: "3.11", path: "js/moves.js", title: "招式库检索与分页渲染", lang: "javascript" },
      { sec: "3.12", path: "js/abilities.js", title: "特性库检索与宝可梦索引", lang: "javascript" },
      { sec: "3.13", path: "js/collection.js", title: "图鉴与地区收集度统计", lang: "javascript" },
      { sec: "3.14", path: "js/battle-lab.js", title: "对战实验室与克制比对", lang: "javascript" },
      { sec: "3.15", path: "js/store.js", title: "本地存储与安全缓存管理", lang: "javascript" },
      { sec: "3.16", path: "js/quiz.js", title: "TCG 卡包实验室/实体开包/去重算法/卡册收藏", lang: "javascript" },
      { sec: "3.17", path: "js/global-search.js", title: "全局命令面板快捷检索", lang: "javascript" }
    ]
  },
  {
    num: "4",
    name: "4. 矢量资源、脚本与配置 (Assets, Scripts & Config)",
    files: [
      { sec: "4.1", path: "scripts/make-thumbs.mjs", title: "缩略图离线生成脚本", lang: "javascript" },
      { sec: "4.2", path: "scripts/make-posters.mjs", title: "海报图离线生成脚本", lang: "javascript" },
      { sec: "4.3", path: "scripts/make-game-posters.mjs", title: "游戏正作海报离线生成脚本", lang: "javascript" },
      { sec: "4.4", path: "scripts/generate-chatlog.mjs", title: "项目对话与开发日志生成脚本", lang: "javascript" },
      { sec: "4.5", path: "assets/favicon.svg", title: "精灵球矢量图标", lang: "xml" },
      { sec: "4.6", path: ".gitignore", title: "版本控制忽略文件", lang: "gitignore" }
    ]
  },
  {
    num: "5",
    name: "5. 附录参考模板 (Appendix & Demos)",
    files: [
      { sec: "5.1", path: "demo-interactive.html", title: "交互组件演示样板", lang: "html" },
      { sec: "5.2", path: "ui-template.html", title: "原始设计参考模板", lang: "html" }
    ]
  },
  {
    num: "6",
    name: "6. 项目规范与产品档案 (Specifications & Guidelines)",
    files: [
      { sec: "6.1", path: "PRODUCT.md", title: "产品愿景与功能架构规范", lang: "markdown" },
      { sec: "6.2", path: "AGENTS.md", title: "Agent 操作红线与工程约束规范", lang: "markdown" }
    ]
  }
];

let allFiles = [];
groups.forEach(g => {
  g.files.forEach(f => {
    if (!fs.existsSync(f.path)) return;
    const raw = fs.readFileSync(f.path, "utf8");
    const lines = raw.split("\n").length;
    const bytes = Buffer.byteLength(raw, "utf8");
    f.lines = lines;
    f.bytes = bytes;
    f.content = raw;
    allFiles.push(f);
  });
});

const totalFiles = allFiles.length;
const totalLines = allFiles.reduce((acc, f) => acc + f.lines, 0);
const totalBytes = allFiles.reduce((acc, f) => acc + f.bytes, 0);

let out = "";
out += "# 151 FILE — All-In-One Codebase\n\n";
out += "> 本文件汇集了 **151 File**（宝可梦纯原生前端 Web 站点）的全部源码。\n";
out += "> 包含 15 个主页面与扩展页面、5 个全局样式表、17 个前端 JS 核心模块、辅助脚本、矢量资源、项目规范以及对话日志索引。\n\n";
out += "---\n\n";
out += "## 目录 (Table of Contents)\n\n";
out += `**汇总统计**: 共打包 **${totalFiles}** 个源码文件 | **${totalLines.toLocaleString("en-US")}** 行代码 | **${totalBytes.toLocaleString("en-US")}** 字节\n\n`;
out += "> 💡 **对话记录提示**: 本项目从立项至全部迭代的历史对话记录已汇编至独立文档 [`CHATLOG.md`](./CHATLOG.md)，共收录 20 个会话周期、189 轮交互记录。\n\n";
out += "---\n\n";

// TOC groups
groups.forEach((g) => {
  out += `### ${g.name}\n\n`;
  g.files.forEach(f => {
    const slug = makeSlug(f.sec, f.path, f.title);
    out += `- [${f.sec} \`${f.path}\` (${f.title})](#${slug})\n`;
  });
  out += "\n";
});

out += "---\n\n";

// Body groups
groups.forEach((g, gIdx) => {
  out += `## ${g.name}\n\n`;
  g.files.forEach((f, fIdx) => {
    out += `### ${f.sec} \`${f.path}\` (${f.title})\n\n`;
    out += `- **文件路径**: \`${f.path}\`  \n`;
    out += `- **代码行数**: ${f.lines.toLocaleString("en-US")} 行  \n`;
    out += `- **文件大小**: ${f.bytes.toLocaleString("en-US")} 字节  \n\n`;
    out += `\`\`\`${f.lang}\n`;
    out += f.content;
    if (!f.content.endsWith("\n")) out += "\n";
    out += "```\n\n";
    if (fIdx < g.files.length - 1) {
      out += "---\n\n";
    }
  });
  if (gIdx < groups.length - 1) {
    out += "---\n\n";
  }
});

fs.writeFileSync("allinone.md", out, "utf8");
console.log("Successfully generated allinone.md!");
console.log(`Generated files count: ${totalFiles}`);
console.log(`Generated lines: ${totalLines.toLocaleString("en-US")}`);
console.log(`Generated size: ${(totalBytes / 1024).toFixed(1)} KB`);
