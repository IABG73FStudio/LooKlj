/* =========================================================
   LooKlj — загрузка с анимациями и звуками
   14 языков (без русского!)
   ========================================================= */

const I18N = {
  uk: { title:'Завантаж LooKlj', subtitle:'Спілкуйся, навчайся, працюй — все в одному місці',
    win:'Windows', win_sub:'.exe — для ПК', android:'Android', android_sub:'.apk — для телефону',
    mac:'macOS', mac_sub:'.dmg — для Mac', linux:'Linux', linux_sub:'.AppImage — для Linux',
    projects:'Мої інші проекти', projects_title:'🚀 Мої інші проекти', projects_sub:"Скоро тут з'являться мої проекти",
    proj_drones:'Гра про дрони', proj_drones_desc:'Швидка аркада про дрони — в розробці',
    proj_more:'Більше проектів', proj_more_desc:'Тут будуть проекти моїх помічників',
    soon:'Скоро', footer:'© 2025 LooKlj. Всі права захищені.',
    dl_soon:"Завантаження скоро з'явиться!", langChanged:'Мову змінено', hi:'👋 Привіт, я Денис — автор LooKlj',
    dl_started:'Завантаження почалося...', dl_error:'Помилка завантаження' },

  en: { title:'Download LooKlj', subtitle:'Chat, study, work — all in one place',
    win:'Windows', win_sub:'.exe — for PC', android:'Android', android_sub:'.apk — for phone',
    mac:'macOS', mac_sub:'.dmg — for Mac', linux:'Linux', linux_sub:'.AppImage — for Linux',
    projects:'My other projects', projects_title:'🚀 My other projects', projects_sub:'My projects will appear here soon',
    proj_drones:'Drone game', proj_drones_desc:'Fast arcade about drones — in development',
    proj_more:'More projects', proj_more_desc:'Projects of my assistants will be here',
    soon:'Soon', footer:'© 2025 LooKlj. All rights reserved.',
    dl_soon:'Download coming soon!', langChanged:'Language changed', hi:"👋 Hi, I'm Denis — LooKlj author",
    dl_started:'Download started...', dl_error:'Download error' },

  pl: { title:'Pobierz LooKlj', subtitle:'Rozmawiaj, ucz się, pracuj — wszystko w jednym miejscu',
    win:'Windows', win_sub:'.exe — dla PC', android:'Android', android_sub:'.apk — dla telefonu',
    mac:'macOS', mac_sub:'.dmg — dla Mac', linux:'Linux', linux_sub:'.AppImage — dla Linux',
    projects:'Moje inne projekty', projects_title:'🚀 Moje inne projekty', projects_sub:'Moje projekty pojawią się tutaj wkrótce',
    proj_drones:'Gra o dronach', proj_drones_desc:'Szybka arkada o dronach — w rozwoju',
    proj_more:'Więcej projektów', proj_more_desc:'Tutaj będą projekty moich asystentów',
    soon:'Wkrótce', footer:'© 2025 LooKlj. Wszelkie prawa zastrzeżone.',
    dl_soon:'Pobieranie wkrótce!', langChanged:'Zmieniono język', hi:'👋 Cześć, jestem Denis — autor LooKlj',
    dl_started:'Pobieranie rozpoczęte...', dl_error:'Błąd pobierania' },

  de: { title:'LooKlj herunterladen', subtitle:'Chatte, lerne, arbeite — alles an einem Ort',
    win:'Windows', win_sub:'.exe — für PC', android:'Android', android_sub:'.apk — für Handy',
    mac:'macOS', mac_sub:'.dmg — für Mac', linux:'Linux', linux_sub:'.AppImage — für Linux',
    projects:'Meine anderen Projekte', projects_title:'🚀 Meine anderen Projekte', projects_sub:'Meine Projekte erscheinen hier bald',
    proj_drones:'Drohnen-Spiel', proj_drones_desc:'Schnelle Arcade über Drohnen — in Entwicklung',
    proj_more:'Weitere Projekte', proj_more_desc:'Projekte meiner Assistenten kommen hierhin',
    soon:'Bald', footer:'© 2025 LooKlj. Alle Rechte vorbehalten.',
    dl_soon:'Download kommt bald!', langChanged:'Sprache geändert', hi:'👋 Hallo, ich bin Denis — LooKlj Autor',
    dl_started:'Download gestartet...', dl_error:'Download-Fehler' },

  fr: { title:'Télécharger LooKlj', subtitle:'Discute, étudie, travaille — tout au même endroit',
    win:'Windows', win_sub:'.exe — pour PC', android:'Android', android_sub:'.apk — pour téléphone',
    mac:'macOS', mac_sub:'.dmg — pour Mac', linux:'Linux', linux_sub:'.AppImage — pour Linux',
    projects:'Mes autres projets', projects_title:'🚀 Mes autres projets', projects_sub:'Mes projets apparaîtront ici bientôt',
    proj_drones:'Jeu de drones', proj_drones_desc:'Arcade rapide sur les drones — en développement',
    proj_more:'Plus de projets', proj_more_desc:'Les projets de mes assistants seront ici',
    soon:'Bientôt', footer:'© 2025 LooKlj. Tous droits réservés.',
    dl_soon:'Téléchargement bientôt disponible !', langChanged:'Langue changée', hi:"👋 Salut, je suis Denis — auteur de LooKlj",
    dl_started:'Téléchargement démarré...', dl_error:'Erreur de téléchargement' },

  es: { title:'Descargar LooKlj', subtitle:'Chatea, estudia, trabaja — todo en un lugar',
    win:'Windows', win_sub:'.exe — para PC', android:'Android', android_sub:'.apk — para teléfono',
    mac:'macOS', mac_sub:'.dmg — para Mac', linux:'Linux', linux_sub:'.AppImage — para Linux',
    projects:'Mis otros proyectos', projects_title:'🚀 Mis otros proyectos', projects_sub:'Mis proyectos aparecerán aquí pronto',
    proj_drones:'Juego de drones', proj_drones_desc:'Arcade rápido sobre drones — en desarrollo',
    proj_more:'Más proyectos', proj_more_desc:'Los proyectos de mis asistentes estarán aquí',
    soon:'Pronto', footer:'© 2025 LooKlj. Todos los derechos reservados.',
    dl_soon:'¡Descarga próximamente!', langChanged:'Idioma cambiado', hi:'👋 Hola, soy Denis — autor de LooKlj',
    dl_started:'Descarga iniciada...', dl_error:'Error de descarga' },

  it: { title:'Scarica LooKlj', subtitle:'Chatta, studia, lavora — tutto in un posto',
    win:'Windows', win_sub:'.exe — per PC', android:'Android', android_sub:'.apk — per telefono',
    mac:'macOS', mac_sub:'.dmg — per Mac', linux:'Linux', linux_sub:'.AppImage — per Linux',
    projects:'I miei altri progetti', projects_title:'🚀 I miei altri progetti', projects_sub:'I miei progetti appariranno qui presto',
    proj_drones:'Gioco dei droni', proj_drones_desc:'Arcade veloce sui droni — in sviluppo',
    proj_more:'Altri progetti', proj_more_desc:'I progetti dei miei assistenti saranno qui',
    soon:'Presto', footer:'© 2025 LooKlj. Tutti i diritti riservati.',
    dl_soon:'Download in arrivo!', langChanged:'Lingua cambiata', hi:'👋 Ciao, sono Denis — autore di LooKlj',
    dl_started:'Download avviato...', dl_error:'Errore di download' },

  pt: { title:'Baixar LooKlj', subtitle:'Converse, estude, trabalhe — tudo em um só lugar',
    win:'Windows', win_sub:'.exe — para PC', android:'Android', android_sub:'.apk — para celular',
    mac:'macOS', mac_sub:'.dmg — para Mac', linux:'Linux', linux_sub:'.AppImage — para Linux',
    projects:'Meus outros projetos', projects_title:'🚀 Meus outros projetos', projects_sub:'Meus projetos aparecerão aqui em breve',
    proj_drones:'Jogo de drones', proj_drones_desc:'Arcade rápido sobre drones — em desenvolvimento',
    proj_more:'Mais projetos', proj_more_desc:'Os projetos dos meus assistentes estarão aqui',
    soon:'Em breve', footer:'© 2025 LooKlj. Todos os direitos reservados.',
    dl_soon:'Download em breve!', langChanged:'Idioma alterado', hi:'👋 Olá, sou Denis — autor do LooKlj',
    dl_started:'Download iniciado...', dl_error:'Erro de download' },

  tr: { title:'LooKlj indir', subtitle:'Sohbet et, çalış, öğren — hepsi bir arada',
    win:'Windows', win_sub:'.exe — PC için', android:'Android', android_sub:'.apk — telefon için',
    mac:'macOS', mac_sub:'.dmg — Mac için', linux:'Linux', linux_sub:'.AppImage — Linux için',
    projects:'Diğer projelerim', projects_title:'🚀 Diğer projelerim', projects_sub:'Projelerim yakında burada görünecek',
    proj_drones:'Drone oyunu', proj_drones_desc:'Dronlar hakkında hızlı arcade — geliştiriliyor',
    proj_more:'Daha fazla proje', proj_more_desc:'Asistanlarımın projeleri burada olacak',
    soon:'Yakında', footer:'© 2025 LooKlj. Tüm hakları saklıdır.',
    dl_soon:'İndirme yakında!', langChanged:'Dil değiştirildi', hi:"👋 Merhaba, ben Denis — LooKlj yazarı",
    dl_started:'İndirme başladı...', dl_error:'İndirme hatası' },

  zh: { title:'下载 LooKlj', subtitle:'聊天、学习、工作 — 一站式',
    win:'Windows', win_sub:'.exe — PC 版', android:'Android', android_sub:'.apk — 手机版',
    mac:'macOS', mac_sub:'.dmg — Mac 版', linux:'Linux', linux_sub:'.AppImage — Linux 版',
    projects:'我的其他项目', projects_title:'🚀 我的其他项目', projects_sub:'我的项目即将出现在这里',
    proj_drones:'无人机游戏', proj_drones_desc:'关于无人机的快速街机游戏 — 开发中',
    proj_more:'更多项目', proj_more_desc:'我的助手的项目将在这里',
    soon:'即将推出', footer:'© 2025 LooKlj. 保留所有权利。',
    dl_soon:'下载即将推出！', langChanged:'语言已更改', hi:'👋 你好，我是 Denis — LooKlj 的作者',
    dl_started:'下载已开始...', dl_error:'下载错误' },

  ja: { title:'LooKlj をダウンロード', subtitle:'チャット、勉強、仕事 — すべて一箇所で',
    win:'Windows', win_sub:'.exe — PC 用', android:'Android', android_sub:'.apk — スマホ用',
    mac:'macOS', mac_sub:'.dmg — Mac 用', linux:'Linux', linux_sub:'.AppImage — Linux 用',
    projects:'私の他のプロジェクト', projects_title:'🚀 私の他のプロジェクト', projects_sub:'私のプロジェクトはまもなくここに表示されます',
    proj_drones:'ドローンのゲーム', proj_drones_desc:'ドローンについての高速アーケード — 開発中',
    proj_more:'その他のプロジェクト', proj_more_desc:'私のアシスタントのプロジェクトがここにあります',
    soon:'近日公開', footer:'© 2025 LooKlj. 全著作権所有。',
    dl_soon:'ダウンロード近日公開！', langChanged:'言語が変更されました', hi:'👋 こんにちは、Denis です — LooKlj の作者',
    dl_started:'ダウンロードを開始しました...', dl_error:'ダウンロードエラー' },

  ko: { title:'LooKlj 다운로드', subtitle:'채팅, 공부, 작업 — 한 곳에서',
    win:'Windows', win_sub:'.exe — PC용', android:'Android', android_sub:'.apk — 휴대폰용',
    mac:'macOS', mac_sub:'.dmg — Mac용', linux:'Linux', linux_sub:'.AppImage — Linux용',
    projects:'내 다른 프로젝트', projects_title:'🚀 내 다른 프로젝트', projects_sub:'내 프로젝트가 곧 여기에 나타납니다',
    proj_drones:'드론 게임', proj_drones_desc:'드론에 관한 빠른 아케이드 — 개발 중',
    proj_more:'더 많은 프로젝트', proj_more_desc:'내 조수들의 프로젝트가 여기에 있습니다',
    soon:'곧 출시', footer:'© 2025 LooKlj. 모든 권리 보유.',
    dl_soon:'다운로드 곧 출시!', langChanged:'언어 변경됨', hi:'👋 안녕하세요, 저는 Denis — LooKlj 제작자입니다',
    dl_started:'다운로드가 시작되었습니다...', dl_error:'다운로드 오류' },

  ar: { title:'تحميل LooKlj', subtitle:'الدردشة والدراسة والعمل — كل شيء في مكان واحد',
    win:'Windows', win_sub:'.exe — للكمبيوتر', android:'Android', android_sub:'.apk — للهاتف',
    mac:'macOS', mac_sub:'.dmg — لـ Mac', linux:'Linux', linux_sub:'.AppImage — لـ Linux',
    projects:'مشاريعي الأخرى', projects_title:'🚀 مشاريعي الأخرى', projects_sub:'ستظهر مشاريعي هنا قريبًا',
    proj_drones:'لعبة الطائرات بدون طيار', proj_drones_desc:'أركيد سريع عن الطائرات بدون طيار — قيد التطوير',
    proj_more:'المزيد من المشاريع', proj_more_desc:'ستكون مشاريع مساعديّ هنا',
    soon:'قريبًا', footer:'© 2025 LooKlj. جميع الحقوق محفوظة.',
    dl_soon:'التحميل قريبًا!', langChanged:'تم تغيير اللغة', hi:'👋 مرحبًا، أنا دينيس — مؤلف LooKlj',
    dl_started:'بدأ التحميل...', dl_error:'خطأ في التحميل' },

  hi: { title:'LooKlj डाउनलोड करें', subtitle:'चैट करें, पढ़ें, काम करें — सब एक जगह',
    win:'Windows', win_sub:'.exe — PC के लिए', android:'Android', android_sub:'.apk — फोन के लिए',
    mac:'macOS', mac_sub:'.dmg — Mac के लिए', linux:'Linux', linux_sub:'.AppImage — Linux के लिए',
    projects:'मेरे अन्य प्रोजेक्ट', projects_title:'🚀 मेरे अन्य प्रोजेक्ट', projects_sub:'मेरे प्रोजेक्ट जल्द ही यहाँ दिखेंगे',
    proj_drones:'ड्रोन गेम', proj_drones_desc:'ड्रोन के बारे में तेज़ आर्केड — विकास में',
    proj_more:'और प्रोजेक्ट', proj_more_desc:'मेरे सहायकों के प्रोजेक्ट यहाँ होंगे',
    soon:'जल्द ही', footer:'© 2025 LooKlj. सर्वाधिकार सुरक्षित।',
    dl_soon:'डाउनलोड जल्द ही!', langChanged:'भाषा बदली गई', hi:'👋 नमस्ते, मैं डेनिस हूँ — LooKlj का लेखक',
    dl_started:'डाउनलोड शुरू हुआ...', dl_error:'डाउनलोड त्रुटि' }
};

let currentLang = localStorage.getItem('looklj_lang') || 'uk';
function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || I18N.uk[key] || key; }

function applyLang() {
  const L = I18N[currentLang];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('t_title', L.title);
  set('t_subtitle', L.subtitle);
  set('t_win', L.win); set('t_win_sub', L.win_sub);
  set('t_android', L.android); set('t_android_sub', L.android_sub);
  set('t_mac', L.mac); set('t_mac_sub', L.mac_sub);
  set('t_linux', L.linux); set('t_linux_sub', L.linux_sub);
  set('t_projects', L.projects);
  set('t_projects_title', L.projects_title);
  set('t_projects_sub', L.projects_sub);
  set('t_proj_drones', L.proj_drones);
  set('t_proj_drones_desc', L.proj_drones_desc);
  set('t_proj_more', L.proj_more);
  set('t_proj_more_desc', L.proj_more_desc);
  set('t_soon', L.soon); set('t_soon2', L.soon);
  set('t_footer', L.footer);
  document.querySelectorAll('.langs button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';
}

/* =========================================================
   ЗВУКИ — генерируются кодом (Web Audio API)
   ========================================================= */
const Sound = (() => {
  let ctx = null;
  function ensure() {
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){} }
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
  return {
    hover()   { tone({ freq: 1200, dur: 0.04, vol: 0.025 }); },
    click()   { tone({ freq: 700, dur: 0.06, type: 'triangle', vol: 0.07 });
                setTimeout(() => tone({ freq: 1100, dur: 0.05, vol: 0.05 }), 35); },
    download(){ tone({ freq: 523, dur: 0.1 }); setTimeout(() => tone({ freq: 659, dur: 0.1 }), 90);
                setTimeout(() => tone({ freq: 784, dur: 0.12 }), 180);
                setTimeout(() => tone({ freq: 1047, dur: 0.2 }), 280); },
    open()    { tone({ freq: 300, dur: 0.2, slideTo: 900, type: 'sine', vol: 0.08 }); },
    close()   { tone({ freq: 900, dur: 0.2, slideTo: 300, type: 'sine', vol: 0.08 }); },
    success() { tone({ freq: 659, dur: 0.1 }); setTimeout(() => tone({ freq: 880, dur: 0.1 }), 90);
                setTimeout(() => tone({ freq: 1175, dur: 0.25 }), 180); },
    notify()  { tone({ freq: 880, dur: 0.08 }); setTimeout(() => tone({ freq: 1175, dur: 0.08 }), 80);
                setTimeout(() => tone({ freq: 1568, dur: 0.15 }), 160); },
    error()   { tone({ freq: 200, dur: 0.25, type: 'sawtooth', vol: 0.07 }); }
  };
})();

/* =========================================================
   ЧАСТИЦЫ
   ========================================================= */
(function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = window.innerWidth < 600 ? 30 : 70;
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 0.5,
      color: Math.random() > 0.5 ? '124,92,255' : '94,200,200',
      alpha: Math.random() * 0.6 + 0.3
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(124,92,255,${0.2 * (1 - dist/130)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 180) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(94,200,200,${0.4 * (1 - dist/180)})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
      ctx.shadowBlur = 0;
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
  if (!el) return;
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2500);
}

/* =========================================================
   СКАЧИВАНИЕ
   ========================================================= */
function download(os) {
  Sound.download();

  // ⚠️ ЗАМЕНИ на точное имя файла с твоей страницы релиза
  // https://github.com/IABG73FStudio/LooKlj/releases/tag/v1.0.0
  const files = {
    windows: 'https://github.com/IABG73FStudio/LooKlj/releases/download/v1.0.0/LooKlj.Setup.exe',
    android: 'downloads/LooKlj.apk',
    mac:     'downloads/LooKlj.dmg',
    linux:   'downloads/LooKlj.AppImage'
  };

  const file = files[os];
  if (!file) {
    toast(t('dl_error'));
    return;
  }

  // Проверяем есть ли файл
  fetch(file, { method: 'HEAD', mode: 'no-cors' })
    .then(() => {
      // Файл скорее всего есть — начинаем скачивание
      const a = document.createElement('a');
      a.href = file;
      a.download = file.split('/').pop() || 'LooKlj-Setup.exe';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast(t('dl_started'));
    })
    .catch(() => {
      // Ошибка сети — всё равно пробуем скачать
      const a = document.createElement('a');
      a.href = file;
      a.download = file.split('/').pop() || 'LooKlj-Setup.exe';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast(t('dl_started'));
    });
}

/* =========================================================
   МОДАЛКА ПРОЕКТОВ
   ========================================================= */
function openProjects() {
  Sound.open();
  document.getElementById('projectsModal').classList.add('open');
}
function closeProjects() {
  Sound.close();
  document.getElementById('projectsModal').classList.remove('open');
}

/* =========================================================
   СОБЫТИЯ
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dl-btn, .extra-btn, .langs button, .modal-close, .project-item, .logo')
    .forEach(el => el.addEventListener('mouseenter', () => Sound.hover()));

  document.querySelectorAll('.dl-btn, .extra-btn').forEach(el => {
    el.addEventListener('click', () => Sound.click());
  });

  document.querySelectorAll('.langs button').forEach(b => {
    b.addEventListener('click', () => {
      currentLang = b.dataset.lang;
      localStorage.setItem('looklj_lang', currentLang);
      applyLang();
      Sound.success();
      toast(t('langChanged'));
    });
  });

  const logo = document.getElementById('logo');
  let timeout;
  logo.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { toast(t('hi')); Sound.notify(); }, 450);
  });
  logo.addEventListener('mouseleave', () => clearTimeout(timeout));

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjects(); });
});

/* =========================================================
   СТАРТ
   ========================================================= */
applyLang();

document.addEventListener('click', function unlock() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    if (c.state === 'suspended') c.resume();
    c.close();
  } catch(e){}
  document.removeEventListener('click', unlock);
}, { once: true });
