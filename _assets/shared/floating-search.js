// ══════════════════════════════════════════════════════════════════
// ভাসমান সার্চ বাডি — reusable widget
//
// উৎস: open_current_affairs রিপো (docs/index.html)-এর ভাসমান সার্চ
// ফিচার থেকে পোর্ট করা (১৬ আগস্ট ২০২৬)। মূল কোড দেখে যাচাই করে
// জেনারালাইজ করা হয়েছে যাতে open_job_solution-এর একাধিক আলাদা পেজে
// (আলাদা CSS variable নাম, আলাদা ডেটা স্ট্রাকচার) বসানো যায়।
//
// মূল থেকে ইচ্ছাকৃত পার্থক্য:
// - CSS variable নির্ভরতা বাদ দিয়ে নিজস্ব স্বয়ংসম্পূর্ণ ডিজাইন টোকেন
//   ব্যবহার করা হয়েছে (--fs-* প্রিফিক্স) — কারণ open_job_solution-এর
//   প্রতিটা পেজে ভিন্ন ভিন্ন variable নাম আছে (--text vs --text-primary
//   ইত্যাদি), শুধু [data-theme="dark"] অ্যাট্রিবিউটটাই সব পেজে কমন।
// - scroll-pin (নির্দিষ্ট টুলবার এলিমেন্ট অনুসরণ করে) বাদ দেওয়া হয়েছে —
//   প্রতিটা পেজের হেডার/টুলবার গঠন আলাদা, তাই সবসময় bottom-right
//   fixed পজিশনে বসানো হয়েছে, সরলতার জন্য।
// - ফন্ট Kalpurush-এর বদলে Noto Serif Bengali (যেটা /fonts/-এ
//   self-hosted আছে এবং সব পেজেই লোড হয়)।
// - স্থানীয় ফলাফল ক্লিক করলে কী হবে তা প্রতিটা পেজ নিজে ঠিক করে
//   (config.localSearch-এর প্রতিটা আইটেমে onSelect callback)।
//
// ব্যবহার (পেজের নিজস্ব <script> ব্লকে, ডেটা লোড হওয়ার পর):
//   initFloatingSearch({
//     localSearch: function(q) {
//       // q ছোট হাতের, ট্রিম করা স্ট্রিং
//       // সর্বোচ্চ ৮টা আইটেম রিটার্ন করুন: [{label, onSelect}, ...]
//       return [];
//     }
//   });
// ══════════════════════════════════════════════════════════════════

(function () {
  const STYLE = `
  .fs-widget{
    --fs-accent:#0f6b4a;
    --fs-accent-deep:#0a4f37;
    --fs-accent-light:#e3f5ee;
    --fs-on-accent:#ffffff;
    --fs-paper:#ffffff;
    --fs-ink:#1a1814;
    --fs-muted:#6b6358;
    --fs-line:#e0dcd7;
    position:fixed;
    right:16px;
    bottom:16px;
    z-index:9999;
    font-family:'Noto Serif Bengali','Noto Sans Bengali',serif;
  }
  [data-theme="dark"] .fs-widget{
    --fs-accent:#3ddc97;
    --fs-accent-deep:#2bb886;
    --fs-accent-light:#123626;
    --fs-on-accent:#0a2015;
    --fs-paper:#1c1a18;
    --fs-ink:#f0ece4;
    --fs-muted:#a89e92;
    --fs-line:#3a3530;
  }
  .fs-pill{
    display:flex; align-items:center; gap:8px;
    position:relative; background:transparent; border:none;
    border-radius:999px; padding:0; width:48px; height:48px;
    transition:width 0.32s cubic-bezier(.34,1.2,.4,1), transform 0.25s ease;
    overflow:hidden; cursor:grab; box-shadow:0 4px 14px rgba(0,0,0,0.22);
  }
  .fs-pill:hover{ transform:translateY(-3px) rotate(-3deg); }
  .fs-pill.dragging{ cursor:grabbing; transition:none; transform:scale(1.05) rotate(-2deg); }
  .fs-pill.open{
    width:min(86vw, 280px); cursor:default; border-radius:24px;
    padding-left:6px; padding-right:6px;
    background:linear-gradient(160deg, var(--fs-paper) 0%, var(--fs-accent-light) 100%);
    border:2px solid var(--fs-accent-deep);
    box-shadow:0 2px 0 rgba(0,0,0,0.1), 0 20px 38px -10px rgba(0,0,0,0.35);
    transform:none;
  }
  .fs-icon{
    flex:0 0 auto; line-height:1; user-select:none; cursor:grab;
    display:flex; align-items:center; justify-content:center;
    width:48px; height:48px;
    filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));
    animation:fsBreathe 3.6s ease-in-out infinite; transform-origin:50% 50%;
  }
  .fs-svg{ width:100%; height:100%; overflow:visible; }
  @keyframes fsBreathe{ 0%,100%{transform:scale(1) rotate(0deg);} 50%{transform:scale(1.035) rotate(-1.5deg);} }
  .fs-pill:not(.open):hover .fs-icon{ animation:fsWiggle 0.55s ease-in-out; }
  @keyframes fsWiggle{
    0%{transform:scale(1) rotate(0deg);} 25%{transform:scale(1.18) rotate(-14deg);}
    50%{transform:scale(0.96) rotate(9deg);} 75%{transform:scale(1.1) rotate(-5deg);}
    100%{transform:scale(1) rotate(0deg);}
  }
  .fs-pill.dragging .fs-icon{ cursor:grabbing; animation:none; transform:scale(1.12) rotate(-6deg); }
  .fs-icon.fs-pop{ animation:fsPop 0.4s cubic-bezier(.34,1.56,.64,1); }
  @keyframes fsPop{ 0%{transform:scale(1);} 40%{transform:scale(0.82) rotate(6deg);} 70%{transform:scale(1.15) rotate(-4deg);} 100%{transform:scale(1) rotate(0deg);} }
  .fs-eye{ transition:none; transform-origin:center; transform-box:fill-box; }
  .fs-face.fs-blink .fs-eye{ animation:fsBlink 0.28s ease-in-out; }
  @keyframes fsBlink{ 0%,100%{transform:scaleY(1);} 50%{transform:scaleY(0.12);} }
  .fs-pill.open .fs-icon{ width:26px; height:26px; animation:none; }
  .fs-pill.open .fs-glint, .fs-pill.open .fs-eye-glint{ opacity:0.9; }
  .fs-pill #fs-input{
    flex:1 1 auto; min-width:0; border:none; outline:none; background:transparent;
    color:var(--fs-ink); font-family:inherit; font-size:16px; padding:2px 0;
    opacity:0; transform:translateX(4px);
    transition:opacity 0.22s ease 0.08s, transform 0.22s ease 0.08s;
  }
  .fs-pill.open #fs-input{ opacity:1; transform:translateX(0); }
  .fs-pill #fs-input::placeholder{ color:var(--fs-muted); }
  .fs-close{
    flex:0 0 auto; display:none; align-items:center; justify-content:center;
    width:24px; height:24px; border:none; background:var(--fs-accent-light);
    color:var(--fs-muted); font-size:14px; cursor:pointer; border-radius:50%;
    transition:background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }
  .fs-pill.open .fs-close{ display:flex; }
  .fs-close:hover{ background:var(--fs-accent); color:var(--fs-on-accent); transform:rotate(90deg); }
  .fs-results{
    position:absolute; right:0; bottom:56px; top:auto;
    width:min(92vw, 360px); max-height:min(58vh, 420px); overflow-y:auto;
    background:var(--fs-paper); border:1px solid var(--fs-line);
    border-radius:16px;
    box-shadow:0 4px 12px rgba(0,0,0,0.1), 0 20px 44px -12px rgba(0,0,0,0.3);
    padding:8px; display:none; opacity:0;
    transform:translateY(6px) scale(0.98);
    transition:opacity 0.18s ease, transform 0.18s ease;
  }
  .fs-results.visible{ display:block; opacity:1; transform:translateY(0) scale(1); }
  .fs-result-item{
    display:block; width:100%; text-align:right; background:transparent; border:none;
    border-radius:10px; padding:10px 12px; font-family:inherit; font-size:15px;
    color:var(--fs-ink); cursor:pointer; transition:background 0.15s ease, padding-right 0.15s ease;
  }
  .fs-result-item:hover, .fs-result-item:focus-visible{ background:var(--fs-accent-light); padding-right:16px; }
  .fs-result-item + .fs-result-item{ margin-top:2px; }
  .fs-empty{ padding:14px 10px; text-align:center; color:var(--fs-muted); font-size:14px; }
  .fs-wiki-loading{ font-style:italic; }
  .fs-wiki-result{ padding:12px 12px 10px; }
  .fs-wiki-badge{
    display:inline-flex; align-items:center; gap:5px; background:var(--fs-accent-light);
    color:var(--fs-accent-deep); font-size:13px; font-weight:600; letter-spacing:0.03em;
    padding:3px 10px; border-radius:999px; margin-bottom:7px;
  }
  .fs-wiki-badge-icon{ width:14px; height:14px; flex:0 0 auto; border-radius:50%; }
  .fs-wiki-title{ font-weight:700; font-size:17px; color:var(--fs-ink); margin-bottom:5px; }
  .fs-wiki-extract{ font-size:15.5px; line-height:1.55; color:var(--fs-ink); margin-bottom:9px; }
  .fs-wiki-link{ display:inline-block; font-size:14.5px; font-weight:600; color:var(--fs-accent-deep); text-decoration:none; }
  .fs-wiki-link:hover{ text-decoration:underline; }
  @media (max-width:480px){
    .fs-widget{ right:10px; bottom:10px; }
    .fs-results{ width:min(94vw, 320px); }
  }
  `;

  const WIKI_BADGE_ICON = `<svg class="fs-wiki-badge-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#f8f9fa"/>
    <circle cx="10" cy="10" r="9.2" fill="none" stroke="#a2a9b1" stroke-width="0.6"/>
    <g stroke="#202122" stroke-width="1" fill="none" opacity="0.85">
      <ellipse cx="10" cy="10" rx="4" ry="8"/>
      <line x1="2" y1="10" x2="18" y2="10"/>
      <line x1="3.2" y1="6" x2="16.8" y2="6"/>
      <line x1="3.2" y1="14" x2="16.8" y2="14"/>
    </g>
  </svg>`;

  const MARKUP = `
    <div class="fs-pill" id="fs-pill">
      <span class="fs-icon" id="fs-icon" aria-hidden="true">
        <svg class="fs-svg" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="fsLensGrad" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="50%" stop-color="#c9f5e0"/>
              <stop offset="100%" stop-color="var(--fs-accent)"/>
            </radialGradient>
            <linearGradient id="fsRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--fs-accent)"/>
              <stop offset="100%" stop-color="var(--fs-accent-deep)"/>
            </linearGradient>
          </defs>
          <circle cx="22" cy="22" r="21" fill="url(#fsRimGrad)"/>
          <circle cx="22" cy="22" r="18" fill="url(#fsLensGrad)"/>
          <ellipse class="fs-glint" cx="15.5" cy="14" rx="6.5" ry="4.2" fill="#ffffff" opacity="0.85" transform="rotate(-30 15.5 14)"/>
          <g class="fs-face" id="fs-face">
            <circle class="fs-eye fs-eye-l" cx="17.2" cy="23.5" r="3.6" fill="var(--fs-accent-deep)"/>
            <circle class="fs-eye fs-eye-r" cx="27.4" cy="23.5" r="3.6" fill="var(--fs-accent-deep)"/>
            <circle class="fs-eye-glint" cx="18.4" cy="22" r="1.15" fill="#ffffff"/>
            <circle class="fs-eye-glint" cx="28.6" cy="22" r="1.15" fill="#ffffff"/>
            <path class="fs-smile" d="M16.5 29.6 Q22 34.8 27.5 29.6" fill="none" stroke="var(--fs-accent-deep)" stroke-width="2.2" stroke-linecap="round"/>
          </g>
        </svg>
      </span>
      <input id="fs-input" type="text" placeholder="সার্চ..." autocomplete="off">
      <button type="button" class="fs-close" id="fs-close" aria-label="সার্চ বন্ধ করুন">✕</button>
    </div>
    <div class="fs-results" id="fs-results"></div>
  `;

  const wikiCache = new Map();
  let wikiRequestSeq = 0;

  async function fetchWikipediaSummary(q) {
    if (wikiCache.has(q)) return wikiCache.get(q);
    try {
      const searchUrl = `https://bn.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json&origin=*&srlimit=1`;
      const searchRes = await fetch(searchUrl);
      if (!searchRes.ok) { wikiCache.set(q, null); return null; }
      const searchData = await searchRes.json();
      const hit = searchData?.query?.search?.[0];
      if (!hit) { wikiCache.set(q, null); return null; }
      const summaryUrl = `https://bn.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(hit.title)}`;
      const summaryRes = await fetch(summaryUrl);
      if (!summaryRes.ok) { wikiCache.set(q, null); return null; }
      const summaryData = await summaryRes.json();
      if (!summaryData.extract) { wikiCache.set(q, null); return null; }
      const result = {
        title: summaryData.title || hit.title,
        extract: summaryData.extract,
        url: summaryData.content_urls?.desktop?.page || `https://bn.wikipedia.org/wiki/${encodeURIComponent(hit.title)}`
      };
      wikiCache.set(q, result);
      return result;
    } catch (err) {
      wikiCache.set(q, null);
      return null;
    }
  }

  function escapeHtml(text) {
    return String(text || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  window.initFloatingSearch = function (config) {
    config = config || {};
    const localSearch = typeof config.localSearch === 'function' ? config.localSearch : function () { return []; };

    if (document.getElementById('fs-widget-root')) return; // দুইবার init হওয়া ঠেকানো

    const wrap = document.createElement('div');
    wrap.className = 'fs-widget';
    wrap.id = 'fs-widget-root';
    wrap.innerHTML = MARKUP;
    document.body.appendChild(wrap);

    const styleEl = document.createElement('style');
    styleEl.textContent = STYLE;
    document.head.appendChild(styleEl);

    const pill = document.getElementById('fs-pill');
    const input = document.getElementById('fs-input');
    const results = document.getElementById('fs-results');
    const closeBtn = document.getElementById('fs-close');
    const icon = document.getElementById('fs-icon');
    const face = document.getElementById('fs-face');

    function openSearch() {
      pill.classList.add('open');
      input.focus();
    }
    function closeSearch() {
      pill.classList.remove('open');
      input.value = '';
      results.classList.remove('visible');
      results.innerHTML = '';
    }

    function renderWikiFallback(q, seq) {
      results.innerHTML = '<div class="fs-empty fs-wiki-loading">উইকিপিডিয়ায় খোঁজা হচ্ছে…</div>';
      fetchWikipediaSummary(q).then(result => {
        if (seq !== wikiRequestSeq) return;
        if (!result) {
          results.innerHTML = '<div class="fs-empty">কোনো ফলাফল পাওয়া যায়নি</div>';
          return;
        }
        results.innerHTML = `
          <div class="fs-wiki-result">
            <div class="fs-wiki-badge">${WIKI_BADGE_ICON}উইকিপিডিয়া</div>
            <div class="fs-wiki-title">${escapeHtml(result.title)}</div>
            <div class="fs-wiki-extract">${escapeHtml(result.extract)}</div>
            <a class="fs-wiki-link" href="${escapeHtml(result.url)}" target="_blank" rel="noopener noreferrer">পুরো আর্টিকেল পড়ুন ↗</a>
          </div>
        `;
      });
    }

    function renderResults(q) {
      wikiRequestSeq++;
      const seq = wikiRequestSeq;
      if (!q) {
        results.classList.remove('visible');
        results.innerHTML = '';
        return;
      }
      let items = [];
      try {
        items = localSearch(q) || [];
      } catch (err) {
        items = [];
      }
      items = items.slice(0, 8);
      if (items.length === 0) {
        renderWikiFallback(q, seq);
      } else {
        results.innerHTML = items.map((item, i) =>
          `<button type="button" class="fs-result-item" data-idx="${i}">${escapeHtml(item.label)}</button>`
        ).join('');
        results.querySelectorAll('.fs-result-item').forEach(btn => {
          btn.addEventListener('click', () => {
            const item = items[Number(btn.dataset.idx)];
            closeSearch();
            if (item && typeof item.onSelect === 'function') item.onSelect();
          });
        });
      }
      results.classList.add('visible');
    }

    pill.addEventListener('click', () => { if (!pill.classList.contains('open')) openSearch(); });
    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeSearch(); });
    input.addEventListener('click', (e) => e.stopPropagation());
    input.addEventListener('input', (e) => renderResults(e.target.value.trim().toLowerCase()));
    input.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

    // ─── Drag (মাউস/টাচ) ───
    (function enableDrag() {
      let dragging = false, moved = false;
      let startX = 0, startY = 0, startLeft = 0, startTop = 0;

      function getXY(e) {
        if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        return { x: e.clientX, y: e.clientY };
      }
      function dragStart(e) {
        if (e.target === input || e.target === closeBtn) return;
        const { x, y } = getXY(e);
        const rect = wrap.getBoundingClientRect();
        dragging = true; moved = false;
        startX = x; startY = y; startLeft = rect.left; startTop = rect.top;
        pill.classList.add('dragging');
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('touchend', dragEnd);
      }
      function dragMove(e) {
        if (!dragging) return;
        const { x, y } = getXY(e);
        const dx = x - startX, dy = y - startY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
        if (!moved) return;
        if (e.cancelable) e.preventDefault();
        const rect = wrap.getBoundingClientRect();
        const maxLeft = window.innerWidth - rect.width;
        const maxTop = window.innerHeight - rect.height;
        let newLeft = Math.max(0, Math.min(startLeft + dx, Math.max(0, maxLeft)));
        let newTop = Math.max(0, Math.min(startTop + dy, Math.max(0, maxTop)));
        wrap.style.right = 'auto'; wrap.style.bottom = 'auto';
        wrap.style.left = newLeft + 'px';
        wrap.style.top = newTop + 'px';
      }
      function dragEnd() {
        dragging = false;
        pill.classList.remove('dragging');
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('touchmove', dragMove);
        document.removeEventListener('touchend', dragEnd);
        if (moved) {
          const suppress = (ev) => { ev.stopPropagation(); pill.removeEventListener('click', suppress, true); clearTimeout(cleanupTimer); };
          pill.addEventListener('click', suppress, true);
          const cleanupTimer = setTimeout(() => pill.removeEventListener('click', suppress, true), 300);
        }
      }
      pill.addEventListener('mousedown', dragStart);
      pill.addEventListener('touchstart', dragStart, { passive: true });

      function clampToViewport() {
        const rect = wrap.getBoundingClientRect();
        if (wrap.style.left === '' && wrap.style.top === '') return;
        const maxLeft = Math.max(0, window.innerWidth - rect.width);
        const maxTop = Math.max(0, window.innerHeight - rect.height);
        wrap.style.left = Math.min(rect.left, maxLeft) + 'px';
        wrap.style.top = Math.min(rect.top, maxTop) + 'px';
      }
      window.addEventListener('resize', clampToViewport);
      window.addEventListener('orientationchange', clampToViewport);
    })();

    // ─── ছোট্ট "বাডি" পার্সোনালিটি: র‍্যান্ডম পলক + ক্লিকে pop ───
    (function enablePersonality() {
      let blinkTimer = null;
      function scheduleBlink() {
        const delay = 3000 + Math.random() * 4000;
        blinkTimer = setTimeout(() => {
          if (pill.classList.contains('open')) { scheduleBlink(); return; }
          face.classList.add('fs-blink');
          setTimeout(() => face.classList.remove('fs-blink'), 300);
          if (Math.random() < 0.2) {
            setTimeout(() => {
              face.classList.add('fs-blink');
              setTimeout(() => face.classList.remove('fs-blink'), 300);
            }, 260);
          }
          scheduleBlink();
        }, delay);
      }
      scheduleBlink();
      pill.addEventListener('click', () => {
        icon.classList.remove('fs-pop');
        void icon.offsetWidth;
        icon.classList.add('fs-pop');
      });
    })();
  };
})();
