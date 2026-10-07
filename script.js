/* =========================================================
   LooKlj — главная страница
   ========================================================= */

/* ---------- ЯЗЫКИ (без русского!) ---------- */
const I18N = {
  uk: {
    title: 'Вітаємо в LooKlj',
    subtitle: 'Обери режим, щоб почати',
    school: 'Шкільний', work: 'Робочий', personal: 'Особистий',
    child: 'Для дитини', incognito: 'Інкогніто', guest: 'Гість (3 дні)',
    install: 'Встановити LooKlj', projects: 'Мої інші проекти',
    footer: '© 2025 LooKlj. Всі права захищені.',
    soon: 'Скоро!', onlyGithub: 'Сайт працює на GitHub Pages. Далі — сервер.'
  },
  en: {
    title: 'Welcome to LooKlj',
    subtitle: 'Choose a mode to start',
    school: 'School', work: 'Work', personal: 'Personal',
    child: 'For child', incognito: 'Incognito', guest: 'Guest (3 days)',
    install: 'Install LooKlj', projects: 'My other projects',
    footer: '© 2025 LooKlj. All rights reserved.',
    soon: 'Coming soon!', onlyGithub: 'Site is on GitHub Pages. Server comes next.'
  },
  pl: {
    title: 'Witamy w LooKlj', subtitle: 'Wybierz tryb, aby rozpocząć',
    school: 'Szkolny', work: 'Praca', personal: 'Osobisty',
    child: 'Dla dziecka', incognito: 'Incognito', guest: 'Gość (3 dni)',
    install: 'Zainstaluj LooKlj', projects: 'Moje inne projekty',
    footer: '© 2025 LooKlj. Wszelkie prawa zastrzeżone.',
    soon: 'Wkrótce!', onlyGithub: 'Strona na GitHub Pages. Serwer wkrótce.'
  },
  de: {
    title: 'Willkommen bei LooKlj', subtitle: 'Wähle einen Modus',
    school: 'Schule', work: 'Arbeit', personal: 'Persönlich',
    child: 'Für Kind', incognito: 'Inkognito', guest: 'Gast (3 Tage)',
    install: 'LooKlj installieren', projects: 'Meine anderen Projekte',
    footer: '© 2025 LooKlj. Alle Rechte vorbehalten.',
    soon: 'Bald!', onlyGithub: 'Website auf GitHub Pages. Server folgt.'
  },
  fr: {
    title: 'Bienvenue sur LooKlj', subtitle: 'Choisis un mode',
    school: 'École', work: 'Travail', personal: 'Personnel',
    child: 'Pour enfant', incognito: 'Incognito', guest: 'Invité (3 jours)',
    install: 'Installer LooKlj', projects: 'Mes autres projets',
    footer: '© 2025 LooKlj. Tous droits réservés.',
    soon: 'Bientôt !', onlyGithub: 'Site sur GitHub Pages. Serveur bientôt.'
  },
  es: {
    title: 'Bienvenido a LooKlj', subtitle: 'Elige un modo para empezar',
    school: 'Escuela', work: 'Trabajo', personal: 'Personal',
    child: 'Para niño', incognito: 'Incógnito', guest: 'Invitado (3 días)',
    install: 'Instalar LooKlj', projects: 'Mis otros proyectos',
    footer: '© 2025 LooKlj. Todos los derechos reservados.',
    soon: '¡Pronto!', onlyGithub: 'Sitio en GitHub Pages. Servidor pronto.'
  }
};

let currentLang = localStorage.getItem('looklj_lang') || 'uk';
function t(key) { return I18N[currentLang][key] || I18N.uk[key] || key; }

function applyLang() {
  const L = I18N[currentLang];
  document.getElementById('t_title').textContent = L.title;
  document.getElementById('t_subtitle').textContent = L.subtitle;
  document.getElementById('t_school').textContent = L.school;
  document.getElementById('t_work').textContent = L.work;
  document.getElementById('t_personal').textContent = L.personal;
  document.getElementById('t_child').textContent = L.child;
  document.getElementById('t_incognito').textContent = L.incognito;
  document.getElementById('t_guest').textContent = L.guest;
  document.getElementById('t_install').textContent = L.install;
  document.getElementById('t_projects').textContent = L.projects;
  document.getElementById('t_footer').textContent = L.footer;
  document.querySelectorAll('.langs button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
}

document.querySelectorAll('.langs button').forEach(b => {
  b.onclick = () => {
    currentLang = b.dataset.lang;
    localStorage.setItem('looklj_lang', currentLang);
    applyLang();
    toast(currentLang === 'uk' ? 'Мову змінено' :
          currentLang === 'en' ? 'Language changed' :
          currentLang === 'pl' ? 'Zmieniono język' :
          currentLang === 'de' ? 'Sprache geändert' :
          currentLang === 'fr' ? 'Langue changée' :
          'Idioma cambiado');
  };
});

/* ---------- TOAST ---------- */
function toast(text) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- КНОПКИ ---------- */
function pickMode(mode) {
  toast(t('soon') + ' (' + mode + ')');
}
function installApp() {
  toast(t('onlyGithub'));
}
function openProjects() {
  toast(t('soon'));
}

/* ---------- БЛОКИРОВКА РФ (комментарий — включи когда нужен) ---------- */
/*
(async function blockRU() {
  try {
    const r = await fetch('https://ipapi.co/json/');
    const d = await r.json();
    if (d.country_code === 'RU' || d.country_code === 'BY') {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0F0F1E;color:#E8E8F0;font-family:system-ui;text-align:center;padding:20px;"><div><h1 style="font-size:48px;margin-bottom:16px;">⛔</h1><h2>Доступ заборонено</h2><p style="color:#8B8BA8;">Сайт LooKlj недоступний для користувачів з РФ та Білорусі.</p></div></div>';
    }
  } catch (e) { console.warn('Geo check failed:', e); }
})();
*/

/* ---------- СТАРТ ---------- */
applyLang();
