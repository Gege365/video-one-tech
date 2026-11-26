// Galeria: hero estática nos cards.
// Modal: preview do site rolável à esquerda; infos fixas à direita.
import modelos from '../data/modelos-sites.json';
import { montarRola } from './toque.js';
import { lenis, reduzido } from './rolagem.js';

const WA = 'https://wa.me/5534998335489';
const LARGURA_BASE = 1280;
const VELOCIDADE = 64;

export function iniciarSites() {
  const secao = document.querySelector('#sites');
  if (!secao) return null;

  const grade = secao.querySelector('[data-sites-grade]');
  const modal = document.querySelector('[data-sites-modal]');
  if (!grade || !modal) return null;

  grade.innerHTML = modelos.map((m) => cardHtml(m)).join('');
  montarRola(grade);

  const els = {
    tipo: modal.querySelector('[data-sites-tipo]'),
    nome: modal.querySelector('[data-sites-nome]'),
    preco: modal.querySelector('[data-sites-preco]'),
    precoObs: modal.querySelector('[data-sites-preco-obs]'),
    precoParc: modal.querySelector('[data-sites-preco-parc]'),
    ideal: modal.querySelector('[data-sites-ideal]'),
    comprar: modal.querySelector('[data-sites-comprar]'),
    vivo: modal.querySelector('[data-sites-vivo]'),
    poster: modal.querySelector('[data-sites-poster]'),
    frame: modal.querySelector('[data-sites-frame]'),
    caixa: modal.querySelector('.sites-modal__preview'),
  };

  const modalLive = criarIframeModal(els);
  let ultimoFoco = null;

  function abrir(slug) {
    const m = modelos.find((x) => x.slug === slug);
    if (!m) return;
    ultimoFoco = document.activeElement;
    els.tipo.textContent = m.tipo;
    els.nome.textContent = m.nome;
    if (els.preco) els.preco.textContent = m.precoVista || m.preco || 'R$ 1.200';
    if (els.precoObs) els.precoObs.textContent = m.precoObs || 'à vista no PIX';
    if (els.precoParc) els.precoParc.textContent = m.precoParc || 'ou 10x de R$ 145';
    els.ideal.innerHTML = m.ideal.map((t) => `<li>${t}</li>`).join('');
    els.comprar.href = `${WA}?text=${encodeURIComponent(
      `Olá, Video One! Vi o modelo “${m.nome}” no site e quero usá-lo no site do meu negócio. Podem me passar os próximos passos para personalizar e colocar no ar?`
    )}`;
    // Ver Site: só Lorenna Kerin Clinic e Campanha Black Friday
    if (els.vivo) {
      els.vivo.href = m.live || '#';
      els.vivo.hidden = !m.verSite;
    }
    if (els.poster) {
      els.poster.src = m.hero || m.preview;
      els.poster.alt = `Hero do modelo ${m.nome}`;
    }

    modal.hidden = false;
    document.documentElement.classList.add('sites-modal-aberto');
    lenis?.stop();

    requestAnimationFrame(() => {
      modal.classList.add('is-aberto');
      // sites externos (Lorenna / Black Friday) não embutem; usam a hero
      const podeEmbed = m.live && !m.semEmbed && String(m.live).startsWith('/');
      if (podeEmbed) modalLive.abrir(m.live);
      else {
        modalLive.fechar();
        els.caixa?.classList.remove('is-vivo');
      }
    });
    modal.querySelector('[data-sites-fechar]')?.focus();
  }

  function fechar() {
    if (modal.hidden || !modal.classList.contains('is-aberto')) return;
    modal.classList.remove('is-aberto');
    document.documentElement.classList.remove('sites-modal-aberto');
    lenis?.start();
    modalLive.fechar();
    let fechou = false;
    const done = () => {
      if (fechou) return;
      fechou = true;
      modal.hidden = true;
      if (ultimoFoco && typeof ultimoFoco.focus === 'function') ultimoFoco.focus();
    };
    modal.addEventListener('transitionend', done, { once: true });
    setTimeout(done, 350);
  }

  grade.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-sites-abrir]');
    if (!btn) return;
    abrir(btn.getAttribute('data-sites-abrir'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-sites-fechar]') || e.target.matches('[data-sites-backdrop]')) {
      e.preventDefault();
      fechar();
    }
  });

  // trava o fundo, mas deixa o preview do site receber scroll
  const noPreview = (el) => !!el?.closest?.('.sites-modal__preview');
  modal.addEventListener('touchmove', (e) => {
    if (modal.hidden) return;
    if (!noPreview(e.target)) e.preventDefault();
  }, { passive: false });
  modal.addEventListener('wheel', (e) => {
    if (modal.hidden) return;
    if (!noPreview(e.target)) e.preventDefault();
  }, { passive: false });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) fechar();
  });

  window.addEventListener('resize', () => {
    if (!modal.hidden) modalLive.medir();
  });

  return { abrir, fechar };
}

function cardHtml(m) {
  const hero = m.hero || m.preview;
  return `
  <li class="card-site${m.destaque ? ' card-site--destaque' : ''}">
    <button class="card-site__hit" type="button" data-sites-abrir="${m.slug}" aria-label="Ver modelo ${m.nome}">
      <span class="card-site__preview" aria-hidden="true">
        <img src="${hero}" alt="" width="900" height="640" loading="lazy" decoding="async">
        <span class="card-site__selo">Video One</span>
      </span>
      <span class="card-site__meta">
        <span class="card-site__titulo">${m.nome}</span>
        <span class="card-site__tag">${m.tipo}</span>
      </span>
    </button>
  </li>`;
}

function criarIframeModal(els) {
  const { caixa, frame } = els;
  if (!caixa || !frame) {
    return { abrir() {}, fechar() {}, medir() {} };
  }

  const scaler = caixa.querySelector('.sites-modal__scaler');
  let ativo = false;
  let dir = 1;
  let raf = 0;
  let ultimo = 0;
  let pausaManual = 0;

  function medir() {
    if (!scaler) return;
    const w = caixa.clientWidth || 1;
    const h = caixa.clientHeight || 1;
    const scale = w / LARGURA_BASE;
    scaler.style.width = `${LARGURA_BASE}px`;
    scaler.style.height = `${Math.ceil(h / scale)}px`;
    scaler.style.transform = `scale(${scale})`;
  }

  function docWin() {
    try {
      return { doc: frame.contentDocument, win: frame.contentWindow };
    } catch {
      return { doc: null, win: null };
    }
  }

  function quadro(agora) {
    if (!ativo || reduzido) return;
    if (pausaManual && agora < pausaManual) {
      raf = requestAnimationFrame(quadro);
      return;
    }
    const { doc, win } = docWin();
    if (!doc || !win) return;
    const dt = Math.min(0.05, (agora - (ultimo || agora)) / 1000);
    ultimo = agora;
    const max = Math.max(0, doc.documentElement.scrollHeight - win.innerHeight);
    if (max < 8) {
      raf = requestAnimationFrame(quadro);
      return;
    }
    let y = win.scrollY + dir * VELOCIDADE * dt;
    if (y >= max) { y = max; dir = -1; }
    if (y <= 0) { y = 0; dir = 1; }
    win.scrollTo(0, y);
    raf = requestAnimationFrame(quadro);
  }

  function onLoad() {
    let bloqueado = false;
    try {
      const doc = frame.contentDocument;
      if (!doc || !doc.body || doc.body.childElementCount === 0) bloqueado = true;
    } catch {
      bloqueado = true;
    }
    if (bloqueado) {
      caixa.classList.remove('is-vivo');
      fechar();
      return;
    }
    caixa.classList.add('is-vivo');
    medir();
    const { doc, win } = docWin();
    try {
      const style = doc.createElement('style');
      style.textContent = 'html,body{scrollbar-width:thin}';
      doc.head?.appendChild(style);
      win?.addEventListener('wheel', () => { pausaManual = performance.now() + 2800; }, { passive: true });
      win?.addEventListener('touchstart', () => { pausaManual = performance.now() + 2800; }, { passive: true });
    } catch { /* ignore */ }
    win?.scrollTo(0, 0);
    dir = 1;
    if (ativo && !reduzido) {
      ultimo = 0;
      raf = requestAnimationFrame(quadro);
    }
  }

  function abrir(url) {
    fechar();
    ativo = true;
    caixa.classList.remove('is-vivo');
    frame.addEventListener('load', onLoad, { once: true });
    frame.src = url;
    medir();
  }

  function fechar() {
    ativo = false;
    cancelAnimationFrame(raf);
    raf = 0;
    pausaManual = 0;
    caixa.classList.remove('is-vivo');
    frame.removeAttribute('src');
  }

  return { abrir, fechar, medir };
}
