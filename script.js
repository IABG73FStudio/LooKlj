/* =========================================================
   LooKlj — страница загрузки с анимациями и звуками
   ========================================================= */

/* ---------- ЯЗЫКИ (без русского!) ---------- */
const I18N = {
  uk: {
    title: 'Завантаж LooKlj',
    subtitle: 'Спілкуйся, навчайся, працюй — все в одному місці',
    win: 'Windows', win_sub: '.exe — для ПК',
    android: 'Android', android_sub: '.apk — для телефону',
    mac: 'macOS', mac_sub: '.dmg — для Mac',
    linux: 'Linux', linux_sub: '.AppImage — для Linux',
    projects: 'Мої інші проекти',
    projects_title: '🚀 Мої інші проекти',
    projects_sub: 'Скоро тут з\'являться мої проекти',
    proj_drones: 'Гра про дрони',
    proj_drones_desc: 'Швидка аркада про дрони — в розробці',
    proj_more: 'Більше проектів',
    proj_more_desc: 'Тут будуть проекти моїх помічників',
    soon: 'Скоро',
    footer: '© 2025 LooKlj. Всі права захищені.',
    dl_soon: 'Завантаження скоро з\'явиться!',
    langChanged: 'Мову змінено'
  },
  en: {
    title: 'Download LooKlj',
    subtitle: 'Chat, study, work — all in one place',
    win: 'Windows', win_sub: '.exe — for PC',
    android: 'Android', android_sub: '.apk — for phone',
    mac: 'macOS', mac_sub: '.dmg — for Mac',
    linux: 'Linux', linux_sub: '.AppImage — for Linux',
    projects: 'My other projects',
    projects_title: '🚀 My other projects',
    projects_sub: 'My projects will appear here soon',
    proj_drones: 'Drone game',
    proj_drones_desc: 'Fast arcade about drones — in development',
    proj_more: 'More projects',
    proj_more_desc: 'Projects of my assistants will be here',
    soon: 'Soon',
    footer: '© 2025 LooKlj. All rights reserved.',
    dl_soon: 'Download coming soon!',
    langChanged: 'Language changed'
  },
  pl: {
    title: 'Pobierz LooKlj',
    subtitle: 'Rozmawiaj, ucz się, pracuj — wszystko w jednym miejscu',
    win: 'Windows', win_sub: '.exe — dla PC',
    android: 'Android', android_sub: '.apk — dla telefonu',
    mac: 'macOS', mac_sub: '.dmg — dla Mac',
    linux: 'Linux', linux_sub: '.AppImage — dla Linux',
    projects: 'Moje inne projekty',
    projects_title: '🚀 Moje inne projekty',
    projects_sub: 'Moje projekty pojawią się tutaj wkrótce',
    proj_drones: 'Gra o dronach',
    proj_drones_desc: 'Szybka arkada o dronach — w rozwoju',
    proj_more: 'Więcej projektów',
    proj_more_desc: 'Tutaj będą projekty moich asystentów',
    soon: 'Wkrótce',
    footer: '© 2025 LooKlj. Wszelkie prawa zastrzeżone.',
    dl_soon: 'Pobieranie wkrótce!',
    langChanged: 'Zmieniono język'
  },
  de: {
    title: 'LooKlj herunterladen',
    subtitle: 'Chatte, lerne, arbeite — alles an einem Ort',
    win: 'Windows', win_sub: '.exe — für PC',
    android: 'Android', android_sub: '.apk — für Handy',
    mac: 'macOS', mac_sub: '.dmg — für Mac',
    linux: 'Linux', linux_sub: '.AppImage — für Linux',
    projects: 'Meine anderen Projekte',
    projects_title: '🚀 Meine anderen Projekte',
    projects_sub: 'Meine Projekte erscheinen hier bald',
    proj_drones: 'Drohnen-Spiel',
    proj_drones_desc: 'Schnelle Arcade über Drohnen — in Entwicklung',
    proj_more: 'Weitere Projekte',
    proj_more_desc: 'Projekte meiner Assistenten kommen hierhin',
    soon: 'Bald',
    footer: '© 2025 LooKlj. Alle Rechte vorbehalten.',
    dl_soon: 'Download kommt bald!',
    langChanged: 'Sprache geändert'
  },
  fr: {
    title: 'Télécharger LooKlj',
    subtitle: 'Discute, étudie, travaille — tout au même endroit',
    win: 'Windows', win_sub: '.exe — pour PC',
    android: 'Android', android_sub: '.apk — pour téléphone',
    mac: 'macOS', mac_sub: '.dmg — pour Mac',
    linux: 'Linux', linux_sub: '.AppImage — pour Linux',
    projects: 'Mes autres projets',
    projects_title: '🚀 Mes autres projets',
    projects_sub: 'Mes projets apparaîtront ici bientôt',
    proj_drones: 'Jeu de drones',
    proj_drones_desc: 'Arcade rapide sur les drones — en développement',
    proj_more: 'Plus de projets',
    proj_more_desc: 'Les projets de mes assistants seront ici',
    soon: 'Bientôt',
    footer: '© 2025 LooKlj. Tous droits réservés.',
    dl_soon: 'Téléchargement bientôt disponible !',
    langChanged: 'Langue changée'
  },
  es: {
    title: 'Descargar LooKlj',
    subtitle: 'Chatea, estudia, trabaja — todo en un lugar',
    win: 'Windows', win_sub: '.exe — para PC',
    android: 'Android', android_sub: '.apk — para teléfono',
    mac: 'macOS', mac_sub: '.dmg — para Mac',
    linux: 'Linux', linux_sub: '.AppImage — para Linux',
    projects: 'Mis otros proyectos',
    projects_title: '🚀 Mis otros proyectos',
    projects_sub: 'Mis proyectos aparecerán aquí pronto',
    proj_drones: 'Juego de drones',
    proj_drones_desc: 'Arcade rápido sobre drones — en desarrollo',
    proj_more: 'Más proyectos',
    proj_more_desc: 'Los proyectos de mis asistentes estarán aquí',
    soon: 'Pronto',
    footer: '© 2025 LooKlj. Todos los derechos reservados.',
    dl_soon: '¡Descarga próximamente!',
    langChanged: 'Idioma cambiado'
  }
};

let currentLang = localStorage.getItem('looklj_lang') || 'uk';
function t(key) { return I18N[currentLang][key] || I18N.uk[key] || key; }

function applyLang() {
  const L = I18N[currentLang];
  document.getElementById('t_title').textContent = L.title;
  document.getElementById('t_subtitle').textContent = L.subtitle;
  document.getElementById('t_win').textContent = L.win;
  document.getElementById('t_win_sub').textContent = L.win_sub;
  document.getElementById('t_android').textContent = L.android;
  document.getElementById('t_android_sub').textContent = L.android_sub;
  document.getElementById('t_mac').textContent = L.mac;
  document.getElementById('t_mac_sub').textContent = L.mac_sub;
  document.getElementById('t_linux').textContent = L.linux;
  document.getElementById('t_linux_sub').textContent = L.linux_sub;
  document.getElementById('t_projects').textContent = L.projects;
  document.getElementById('t_projects_title').textContent = L.projects_title;
  document.getElementById('t_projects_sub').textContent = L.projects_sub;
  document.getElementById('t_proj_drones').textContent = L.proj_drones;
  document.getElementById('t_proj_drones_desc').textContent = L.proj_drones_desc;
  document.getElementById('t_proj_more').textContent = L.proj_more;
  document.getElementById('t_proj_more_desc').textContent = L.proj_more_desc;
  document.getElementById('t_soon').textContent = L.soon;
  document.getElementById('t_soon2').textContent = L.soon;
  document.getElementById('t_footer').textContent = L.footer;
  document.querySelectorAll('.langs button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
}

/* =========================================================
   ЗВУКИ (Web Audio API — без файлов!)
   ========================================================= */
const Sound = (() => {
  let ctx = null;
  function ensure() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){}
    }
    if (ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone({ freq = 440, dur = 0.15, type = 'sine', vol = 0.1, slideTo = null, delay = 0 }) {
    const c = ensure(); if (!c) return;
    const start = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, start + dur);
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(vol, start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g); g.connect(c.destination);
    o.start(start); o.stop(start + dur + 0.05);
  }

  function noise({ dur = 0.1, vol = 0.05, delay = 0 }) {
    const c = ensure(); if (!c) return;
    const start = c.currentTime + delay;
    const buffer = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buffer;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, start);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    const filter = c.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1000;
    src.connect(filter); filter.connect(g); g.connect(c.destination);
    src.start(start); src.stop(start + dur);
  }

  return {
    hover()   { tone({ freq: 800, dur: 0.06, type: 'sine', vol: 0.03 }); },
    click()   { tone({ freq: 600, dur: 0.08, type: 'triangle', vol: 0.06 });
                setTimeout(() => tone({ freq: 900, dur: 0.06, type: 'sine', vol: 0.04 }), 40); },
    download(){ tone({ freq: 523, dur: 0.1, type: 'sine', vol: 0.08 });
                setTimeout(() => tone({ freq: 659, dur: 0.1 }), 90);
                setTimeout(() => tone({ freq: 784, dur: 0.15 }), 180); },
    open()    { tone({ freq: 400, dur: 0.15, slideTo: 800, type: 'sine', vol: 0.07 });
                noise({ dur: 0.15, vol: 0.04 }); },
    close()   { tone({ freq: 800, dur: 0.15, slideTo: 400, type: 'sine', vol: 0.07 }); },
    error()   { tone({ freq: 220, dur: 0.2, type: 'sawtooth', vol: 0.06 }); },
    success() { tone({ freq: 659, dur: 0.1 }); 
                setTimeout(() => tone({ freq: 784, dur: 0.1 }), 90);
                setTimeout(() => tone({ freq: 1047, dur: 0.2 }), 180); }
  };
})();

/* =========================================================
   ЧАСТИЦЫ НА ФОНЕ
   ========================================================= */
(function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = window.innerWidth < 600 ? 30 : 60;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      color: Math.random() > 0.5 ? '124,92,255' : '94,200,200',
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // линии между близкими частицами
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(124,92,255,${0.15 * (1 - dist/120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // сами частицы
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

/* =========================================================
   TOAST
   ========================================================= */
function toast(text) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2500);
}

/* =========================================================
   КНОПКИ
   ========================================================= */
function download(os) {
  Sound.download();
  toast(t('dl_soon') + ' (' + os + ')');
}

function openProjects() {
  Sound.open();
  document.getElementById('projectsModal').classList.add('open');
}

function closeProjects() {
  Sound.close();
  document.getElementById('projectsModal').classList.remove('open');
}

/* =========================================================
   ЗВУКИ НА HOVER / CLICK
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  // hover на кнопках
  document.querySelectorAll('.dl-btn, .extra-btn, .langs button, .modal-close, .project-item')
    .forEach(el => {
      el.addEventListener('mouseenter', () => Sound.hover());
    });

  // клики
  document.querySelectorAll('.dl-btn, .extra-btn').forEach(el => {
    el.addEventListener('click', () => Sound.click());
  });

  // языки
  document.querySelectorAll('.langs button').forEach(b => {
    b.addEventListener('click', () => {
      currentLang = b.dataset.lang;
      localStorage.setItem('looklj_lang', currentLang);
      applyLang();
      Sound.success();
      toast(t('langChanged'));
    });
  });

  // логотип — показываем имя автора
  const logo = document.getElementById('logo');
  let timeout;
  logo.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      toast('👋 Привіт, я Денис — автор LooKlj');
      Sound.success();
    }, 400);
  });
  logo.addEventListener('mouseleave', () => clearTimeout(timeout));

  // Escape закрывает модалку
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjects();
  });
});

/* =========================================================
   СТАРТ
   ========================================================= */
applyLang();

// разблокировка AudioContext при первом клике
document.addEventListener('click', function unlock() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    if (c.state === 'suspended') c.resume();
    c.close();
  } catch(e){}
  document.removeEventListener('click', unlock);
}, { once: true });
