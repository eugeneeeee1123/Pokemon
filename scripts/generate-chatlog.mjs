import fs from "node:fs";
import path from "node:path";

const brainDir = "/Users/eugebe/.gemini/antigravity/brain";

const pokemonSessions = [
  { id: "aafd67a1-fd35-4ed3-a18b-cb8f85952b10", title: "Git Pull 与初始仓库同步" },
  { id: "1da4741a-0199-4bcc-97f1-d5a8163fc454", title: "高分辨率图库资源整理 (assets/images/gallery)" },
  { id: "1fb2c653-01bd-4214-b6bc-7325f7fdaf35", title: "图鉴布局、3D 标本台与仓库提交" },
  { id: "a67110fb-6a37-4951-bd3a-1888be12324f", title: "图鉴双视图渲染、胶片排版与深色档案风格" },
  { id: "fbbc6b9d-2090-4e1c-9c6f-775464074b7c", title: "TCG 实体卡包拆包实验室开发与去重算法" },
  { id: "d54e9137-b666-4dd4-a500-db9f789dec4a", title: "Git 代码拉取同步" },
  { id: "7fc45237-ff43-4d38-b892-9b604094c5e3", title: "Git 变更提交与远程推送" },
  { id: "8445cff0-40f4-4a0e-86ab-591c1eb3f2a5", title: "About 页面世界观、时空背景与排版填充" },
  { id: "bfb5e824-bd9b-4105-80e4-a959a7e345f7", title: "世界观文案本地化与自然语言重写" },
  { id: "6bf16f7c-e7af-484d-bc05-58a1f66d3c65", title: "Types 页面优化方案与 Characters 馆主文案" },
  { id: "f293347f-a792-408d-b9bc-8845450ec71f", title: "历代动画与剧场版大纲规划" },
  { id: "da2ee182-f01b-4c0a-a42f-936ce6fa1581", title: "首页视觉丰富化与解决方案探讨" },
  { id: "1919eb30-9847-47fd-bea9-6a0aa8479e76", title: "底部页脚独立与全站 Footer 布局修复" },
  { id: "9cb0db4f-e864-4d52-8251-6ae4ac38f17f", title: "About 页面海报压制（720p WebP）与占位清理" },
  { id: "1fc53583-42cd-4779-beec-9f361537a53d", title: "全代码打包 allinone.md 文档全量更新" },
  { id: "a625d2a7-c7a6-4ee8-af2f-cba478f3dad7", title: "动画电影文案精简与自然语言优化" },
  { id: "ab15aa3f-7543-4f11-9013-dda0e8470add", title: "宝可梦 3D 模型互动与 152-1025 全世代模型接驳" },
  { id: "7235df5f-49db-493a-93a3-61f00916ef31", title: "属性画廊 Image Gallery 方案探讨与规格设计" },
  { id: "74ad8fd4-d923-4097-bea2-9ee97de41129", title: "Games 页面正作介绍与各世代文案补齐" },
  { id: "be0464a1-35f0-4060-bdfe-b4a54d3ed4d2", title: "Games 页面官方海报接入、横向卡片布局与 Git 提交归档" }
];

function cleanUserContent(raw) {
  if (!raw) return "";
  let text = raw.replace(/<ADDITIONAL_METADATA>[\s\S]*$/, "").trim();
  text = text.replace(/<USER_REQUEST>/g, "").replace(/<\/USER_REQUEST>/g, "").trim();
  return text;
}

function formatSession(s, idx) {
  const p = path.join(brainDir, s.id, ".system_generated/logs/transcript_full.jsonl");
  if (!fs.existsSync(p)) return { out: "", turnsCount: 0, dateStr: "未知" };
  const lines = fs.readFileSync(p, "utf8").split("\n").filter(Boolean);
  
  const turns = [];
  let currentTurn = null;

  for (const line of lines) {
    try {
      const item = JSON.parse(line);
      if (item.type === "USER_INPUT") {
        if (currentTurn) turns.push(currentTurn);
        const text = cleanUserContent(item.content);
        currentTurn = {
          userText: text,
          userTime: item.created_at,
          assistantReplies: [],
          toolsUsed: []
        };
      } else if (item.type === "PLANNER_RESPONSE") {
        if (!currentTurn) continue;
        if (item.content && item.content.trim()) {
          currentTurn.assistantReplies.push(item.content.trim());
        }
        if (item.tool_calls && Array.isArray(item.tool_calls)) {
          item.tool_calls.forEach(tc => {
            const sum = tc.args && (tc.args.toolSummary || tc.name);
            if (sum && !currentTurn.toolsUsed.includes(sum)) currentTurn.toolsUsed.push(sum);
          });
        }
      }
    } catch(e) {}
  }
  if (currentTurn) turns.push(currentTurn);

  let firstTime = turns[0] ? turns[0].userTime : "";
  let dateStr = firstTime ? firstTime.slice(0, 10) : "未知日期";

  let out = `### 会话 ${String(idx + 1).padStart(2, "0")}: ${s.title}\n\n`;
  out += `- **会话 ID**: \`${s.id}\`\n`;
  out += `- **记录日期**: ${dateStr}\n`;
  out += `- **交互轮数**: ${turns.length} 轮对话\n\n`;

  turns.forEach((t, tIdx) => {
    out += `#### Turn ${tIdx + 1} (${t.userTime ? t.userTime.slice(11, 19) + " UTC" : ""})\n\n`;
    out += `**User**:\n> ${t.userText.split("\n").join("\n> ")}\n\n`;
    
    if (t.assistantReplies.length > 0) {
      out += `**Assistant**:\n\n${t.assistantReplies.join("\n\n---\n\n")}\n\n`;
    } else {
      let toolsDesc = t.toolsUsed.length > 0 ? ` (执行操作: ${t.toolsUsed.slice(0, 5).join(", ")}${t.toolsUsed.length > 5 ? " 等" : ""})` : "";
      out += `**Assistant**:\n\n*[处理中/执行指令${toolsDesc}]*\n\n`;
    }
  });

  out += "---\n\n";
  return { out, turnsCount: turns.length, dateStr };
}

let allText = "# 151 FILE — 项目完整对话与开发日志 (Chat & Development Logs)\n\n";
allText += "> 本文档汇集记录了 **151 File**（宝可梦纯原生全世代 Web 档案站点）从架构规划、功能演进、页面打磨到资源制作的完整会话记录。\n\n---\n\n## 目录 (Table of Contents)\n\n";
allText += "| 序号 | 日期 | 会话 ID | 主要议题 / 开发模块 | 轮数 |\n| :--- | :--- | :--- | :--- | :---: |\n";

const sessionOutputs = [];
pokemonSessions.forEach((s, idx) => {
  const { out, turnsCount, dateStr } = formatSession(s, idx);
  allText += `| ${idx + 1} | ${dateStr} | \`${s.id.slice(0, 8)}...\` | [${s.title}](#会话-${String(idx + 1).padStart(2, "0")}-${s.title.toLowerCase().replace(/[\s\(\)\/]/g, "-")}) | ${turnsCount} |\n`;
  sessionOutputs.push(out);
});

allText += "\n---\n\n## 详细会话记录 (Session Logs)\n\n";
allText += sessionOutputs.join("");

fs.writeFileSync("CHATLOG.md", allText, "utf8");
console.log("CHATLOG.md written successfully!");
