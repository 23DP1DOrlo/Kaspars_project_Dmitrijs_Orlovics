// DOM elements
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
const themeToggle = document.getElementById('themeToggle');
const mobileDropBtn = document.querySelector('.mobile-dropbtn');
const mobilePanel = document.querySelector('.mobile-panel');
const desktopDropBtn = document.querySelector('.dropbtn');
const desktopPanel = document.querySelector('.dropdown-panel');

// Burger toggle
burger && burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.contains('show');

  if(isOpen){
    mobileNav.classList.remove('show');
    burger.textContent = '☰';
    document.body.classList.remove('no-scroll'); // разрешаем скролл
  } else {
    mobileNav.classList.add('show');
    burger.textContent = '✕';
    document.body.classList.add('no-scroll');    // блокируем скролл
  }
});

// Закрытие при клике на любую ссылку
document.querySelectorAll('#mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    burger.textContent = '☰';
    document.body.classList.remove('no-scroll');
  });
});
// Mobile dropdown
if (mobileDropBtn && mobilePanel) {
  mobileDropBtn.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.contains('show');
    mobilePanel.classList.toggle('show', !isOpen);
    mobileDropBtn.classList.toggle('active', !isOpen);
  });
}

// Theme toggle (simple)
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) document.documentElement.setAttribute('data-theme','dark');

themeToggle && themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// Apply dark variables when theme=dark
const applyThemeStyles = () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.style.setProperty('--bg', 'linear-gradient(180deg,#071028,#071028)');
    document.documentElement.style.setProperty('--card', 'rgba(17,24,39,0.98)');
    document.documentElement.style.setProperty('--accent', '#1f2937');
    document.documentElement.style.setProperty('--muted', '#9aa4b2');
    document.documentElement.style.setProperty('--text', '#e6eef6');
  } else {
    document.documentElement.style.setProperty('--bg', '#e5e1e1');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--accent', '#2b1b1a');
    document.documentElement.style.setProperty('--muted', '#6b6b6b');
    document.documentElement.style.setProperty('--text', '#111');
  }
};
applyThemeStyles();
new MutationObserver(applyThemeStyles).observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});

// accessibility: close mobile menu on nav click
document.querySelectorAll('#mobile-nav a').forEach(a => a.addEventListener('click', () => {
  mobileNav.setAttribute('hidden','');
  burger.textContent = '☰';
}));

  const nav = document.querySelector('nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('active');
  });