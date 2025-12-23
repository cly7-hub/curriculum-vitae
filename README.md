# 个人简历网站

一个现代化、响应式的个人简历网站，使用纯HTML、CSS和JavaScript构建。

## 功能特点

- ✨ 现代化设计，美观大方
- 📱 完全响应式，适配各种设备
- 🎨 渐变色彩和流畅动画
- 📋 完整的简历模块（个人信息、教育背景、工作经验、技能、项目、联系方式）
- 🚀 平滑滚动和交互动画
- 📧 联系表单功能

## 文件结构

```
个人简历网站/
├── index.html      # 主HTML文件
├── styles.css      # 样式文件
├── script.js       # JavaScript交互文件
└── README.md       # 说明文档
```

## 使用方法

1. **直接打开**
   - 下载所有文件到同一文件夹
   - 双击 `index.html` 文件在浏览器中打开

2. **使用本地服务器（推荐）**
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js (需要安装http-server)
   npx http-server
   ```
   然后在浏览器中访问 `http://localhost:8000`

## 自定义内容

### 修改个人信息

编辑 `index.html` 文件，找到以下部分并修改：

- **首页信息**：在 `<section id="home">` 部分
  - 修改姓名、职位、简介等

- **关于我**：在 `<section id="about">` 部分
  - 修改个人介绍和统计数据

- **教育背景**：在 `<section id="education">` 部分
  - 修改学校、专业、时间等信息

- **工作经验**：在 `<section id="experience">` 部分
  - 修改公司、职位、工作内容等

- **技能**：在 `<section id="skills">` 部分
  - 修改技能名称和熟练度（修改 `style="width: XX%"` 中的百分比）

- **项目**：在 `<section id="projects">` 部分
  - 修改项目名称、描述、技术栈等

- **联系方式**：在 `<section id="contact">` 部分
  - 修改邮箱、电话、地址等信息

### 修改颜色主题

编辑 `styles.css` 文件，在文件开头的 `:root` 部分修改CSS变量：

```css
:root {
    --primary-color: #6366f1;      /* 主色调 */
    --secondary-color: #8b5cf6;    /* 次要色调 */
    --accent-color: #ec4899;       /* 强调色 */
    /* ... 其他颜色变量 */
}
```

### 添加头像

1. 将头像图片放在项目文件夹中
2. 在 `index.html` 中找到：
   ```html
   <div class="image-placeholder">
       <i class="fas fa-user"></i>
   </div>
   ```
3. 替换为：
   ```html
   <img src="your-avatar.jpg" alt="头像" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
   ```

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 技术栈

- HTML5
- CSS3 (使用CSS变量、Flexbox、Grid)
- JavaScript (ES6+)
- Font Awesome 图标库

## 注意事项

1. 联系表单目前只是前端展示，需要后端支持才能实际发送邮件
2. 如需部署到服务器，建议使用HTTPS协议
3. 可以添加Google Analytics等分析工具来跟踪访问量

## 许可证

本项目可自由使用和修改。

## 更新日志

### v1.0.0 (2024)
- 初始版本发布
- 包含所有基本功能模块
- 响应式设计
- 平滑滚动和动画效果

---

如有问题或建议，欢迎反馈！

