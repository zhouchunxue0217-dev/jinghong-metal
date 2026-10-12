# Jinghong Metal — 佛山市荆鸿金属制品有限公司

企业官网，含首页、关于我们、新闻资讯、产品展示四个页面。

## 技术栈

- 纯静态网站（HTML + CSS + JavaScript）
- 无需后端、无需构建工具

## 本地预览

```bash
python -m http.server 8765
```

浏览器访问 `http://127.0.0.1:8765/`

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库（如 `jinghong-metal`）
2. 将本目录所有文件推送到 `main` 分支：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/jinghong-metal.git
git push -u origin main
```

3. 进入仓库 Settings → Pages → Source，选择 **GitHub Actions**
4. 推送后 workflow 自动触发，约1-2分钟部署完成
5. 访问 `https://你的用户名.github.io/jinghong-metal/`

## 目录结构

```
├── index.html        # 主页面
├── styles.css        # 样式
├── main.js           # Tab 切换逻辑
├── hero-banner.png   # 首页横幅图
├── advantage.png     # 产品优势图
├── products/         # 产品图片（6张）
├── .nojekyll         # 禁用 Jekyll
└── .github/workflows/deploy.yml  # GitHub Pages 自动部署
```

## 联系方式

- 电话：18250814913
- 邮箱：zhouchunxue0217@gmail.com
- 地址：佛山市南海区狮山镇松岗塘联管理区
