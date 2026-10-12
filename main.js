// ============================================
// Tab 切换逻辑
// ============================================
(function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const panels = document.querySelectorAll('.tab-panel');
  const footerLinks = document.querySelectorAll('.footer-links a[data-tab]');
  const logo = document.querySelector('.logo[data-tab]');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  const tabTitles = {
    home: 'Jinghong Metal — 首页',
    about: 'Jinghong Metal — 关于我们',
    articles: 'Jinghong Metal — 新闻资讯',
    works: 'Jinghong Metal — 产品展示',
  };

  function switchTab(tabName) {
    // 更新导航高亮
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.tab === tabName);
    });

    // 切换面板
    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === tabName);
    });

    // 更新标题
    if (tabTitles[tabName]) {
      document.title = tabTitles[tabName];
    }

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 关闭移动端菜单
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
  }

  // 导航按钮点击
  navLinks.forEach((link) => {
    link.addEventListener('click', () => switchTab(link.dataset.tab));
  });

  // 页脚链接点击
  footerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(link.dataset.tab);
    });
  });

  // Logo 点击回首页
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('home');
    });
  }

  // 移动端菜单切换
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // 移动端菜单展开时汉堡变叉
  const style = document.createElement('style');
  style.textContent = `
    .menu-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .menu-toggle.open span:nth-child(2) { opacity: 0; }
    .menu-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  `;
  document.head.appendChild(style);
})();
