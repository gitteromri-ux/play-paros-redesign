// ============================================================
// PLAY PAROS — App logic: hash router, renderers, interactions
// ============================================================

const ICONS = {
  pool: '<path d="M2 17c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0"/><path d="M2 21c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0"/><circle cx="17" cy="6" r="2.5"/><path d="M6 13 12 4l3 5"/>',
  terrace: '<path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6"/>',
  lounge: '<path d="M3 18v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3M3 18h18M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/>',
  beach: '<circle cx="12" cy="9" r="4"/><path d="M2 21c2-4 6-6 10-6s8 2 10 6M12 5V2"/>',
  transfer: '<rect x="3" y="10" width="18" height="8" rx="2"/><path d="M6 10 8 5h8l2 5M7 18v1M17 18v1"/>',
  town: '<path d="M4 21V9l5-4 5 4v12M14 21V13l4-2 3 2v8M9 21v-4h1v4M11 9h.01M11 13h.01"/>',
  reception: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  breakfast: '<path d="M4 3h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V3zM17 8h2a2 2 0 0 1 0 4h-2M6 21h8"/>'
};

function svgIcon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.town}</svg>`;
}

// ---------- Renderers ----------

function renderRoomCard(r) {
  return `
  <article class="room-card">
    <div class="thumb"><img src="${r.img}" alt="${r.name} at PLAY Paros" loading="lazy"></div>
    <div class="body">
      <h3>${r.name}</h3>
      <div class="meta"><span>${[r.occ, r.bed, r.extra].filter(Boolean).join(' · ')}</span></div>
      <p>${r.desc}</p>
      <div class="tags">${ROOM_TAGS.slice(0, 5).map(t => `<span>${t}</span>`).join('')}</div>
      <a href="https://simplebooking.brownhotels.com/ibe2/hotel/11401" target="_blank" rel="noopener noreferrer" class="btn btn--ghost" style="margin-top:var(--space-5); width:100%; justify-content:center">Check Availability</a>
    </div>
  </article>`;
}

function renderDealCard(d) {
  return `
  <article class="deal-card">
    <span class="pct">${d.pct}<span style="font-size:.4em; vertical-align:top">off</span></span>
    <h3>${d.title}</h3>
    <p style="opacity:.55; font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.06em">${d.window}</p>
    <p>${d.body}</p>
    ${d.code ? `<span class="code">Code: ${d.code}</span>` : ''}
    <p style="font-size:var(--text-xs); opacity:.55; margin-top:auto">${d.fine}</p>
    <a href="https://simplebooking.brownhotels.com/ibe2/hotel/11401" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-top:var(--space-2); width:fit-content">More Details &amp; Order</a>
  </article>`;
}

function renderFacilityTile(f) {
  return `
  <div class="facility-tile">
    <div class="icon">${svgIcon(f.icon)}</div>
    <h3>${f.name}</h3>
    <p>${f.desc}</p>
    <span class="hours">${f.hours}</span>
    ${f.cta ? `<a href="${f.cta.href}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost" style="width:fit-content; margin-top:var(--space-2)">${f.cta.label}</a>` : ''}
  </div>`;
}

function renderExpItem(e, i) {
  return `
  <div class="exp-item">
    <div class="exp-media reveal"><img src="${e.img}" alt="${e.title}" loading="lazy"></div>
    <div>
      <span class="exp-num">0${i + 1}</span>
      <h2 class="h-sub" style="margin-top:var(--space-3)">${e.title}</h2>
      <p class="body-copy" style="margin-top:var(--space-4)">${e.desc}</p>
    </div>
  </div>`;
}

function renderGalleryItem(g) {
  const span = g.big ? 26 : 16;
  return `<div class="m-item" data-cat="${g.cat}" style="grid-row-end: span ${span}"><img src="${g.src}" alt="PLAY Paros gallery image" loading="lazy"></div>`;
}

function renderFaqItem(f, i) {
  return `
  <div class="faq-item" data-idx="${i}">
    <button class="faq-q" aria-expanded="false">
      <span>${f.q}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`;
}

function mountAll() {
  // Home previews
  document.getElementById('homeRoomsPreview').innerHTML = ROOMS.slice(0, 3).map(renderRoomCard).join('');
  document.getElementById('homeDealsPreview').innerHTML = DEALS.map(renderDealCard).join('');
  document.getElementById('homeFacilitiesPreview').innerHTML = FACILITIES.slice(0, 3).map(renderFacilityTile).join('');
  var homeGalleryPicks = [
    { src: './assets/images/hero-facade.jpg', alt: 'PLAY Paros facade at golden hour' },
    { src: './assets/images/rooftop-pool.jpg', alt: 'Rooftop plunge pool' },
    { src: './assets/images/room-interior.jpg', alt: 'Room interior with sea view' },
    { src: './assets/images/beach-bar.jpg', alt: 'PLAY Paros beach bar' },
    { src: './assets/images/village-street.jpg', alt: 'Parikia village street' }
  ];
  document.getElementById('homeGalleryPreview').innerHTML = homeGalleryPicks.map(g => `<div><img src="${g.src}" alt="${g.alt}" loading="lazy"></div>`).join('');

  // Full pages
  document.getElementById('roomsFull').innerHTML = ROOMS.map(renderRoomCard).join('');
  document.getElementById('dealsFull').innerHTML = DEALS.map(renderDealCard).join('');
  document.getElementById('facilitiesFull').innerHTML = FACILITIES.map(renderFacilityTile).join('');
  document.getElementById('expList').innerHTML = EXPERIENCES.map(renderExpItem).join('');
  document.getElementById('galleryFull').innerHTML = GALLERY.map(renderGalleryItem).join('');
  document.getElementById('faqFull').innerHTML = FAQ.map(renderFaqItem).join('');

  renderStrategy();

  bindFaqAccordions();
  bindGalleryTabs();
  observeReveals();
}

function bindFaqAccordions() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function bindGalleryTabs() {
  const tabs = document.getElementById('galleryTabs');
  if (!tabs) return;
  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('#galleryFull .m-item').forEach(item => {
      item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
    });
  });
}

function observeReveals() {
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

// ---------- Router ----------

const VALID_ROUTES = ['home', 'rooms', 'deals', 'facilities', 'experience', 'gallery', 'contact', 'strategy'];

function route() {
  let hash = (location.hash || '#home').replace('#', '');
  if (!VALID_ROUTES.includes(hash)) hash = 'home';

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${hash}`).classList.add('active');

  document.querySelectorAll('.main-nav a[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === hash);
  });

  window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });

  const nav = document.getElementById('mainNav');
  nav.classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');

  // re-run reveal observer for newly shown view
  requestAnimationFrame(observeReveals);
}

window.addEventListener('hashchange', route);

// ---------- Header hide-on-scroll ----------

(function () {
  let lastY = window.scrollY;
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 160) {
      header.classList.add('site-header--hidden');
    } else {
      header.classList.remove('site-header--hidden');
    }
    lastY = y;
  }, { passive: true });
})();

// ---------- Nav toggle (mobile) ----------

document.getElementById('navToggle').addEventListener('click', () => {
  const nav = document.getElementById('mainNav');
  const isOpen = nav.classList.toggle('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', String(isOpen));
});

// ---------- Theme toggle ----------

(function () {
  const btn = document.querySelector('[data-theme-toggle]');
  const stored = localStorage.getItem('pp-theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);

  function icon(isDark) {
    return isDark
      ? '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
  function syncIcon() {
    const current = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    btn.querySelector('svg').innerHTML = icon(current === 'dark');
    btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('pp-theme', next);
    syncIcon();
  });
  syncIcon();
})();

// ---------- Route link interception (data-route on non-hash elements not needed since all use href=#x) ----------

// ---------- Init ----------

mountAll();
route();
