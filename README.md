<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<!--
🚨 重要同步规则（不可违反）：

1. 本项目使用 Vite + React + GitHub Pages + 自定义域名。
2. 禁止删除或重写 index.html 中以下结构：
   - <div id="root"></div>
   - <script type="module" src="/index.tsx"></script>
3. vite.config.ts 中必须保留：
   - base: '/'
4. .github/workflows/deploy.yml 为部署关键文件，禁止删除或替换。
5. 本次修改仅允许影响：
   - 页面内容
   - UI / 文案 / 组件（components/, pages/）
6. 如检测到上述关键文件将被破坏，请停止同步并提示用户。
-->

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1awWv3wNBvopO56AoDBROeZj6ZojAEbrJ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
