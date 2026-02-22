/* ═══════════════════════════════════════════════════════════
   Academic Project Page — main.js
   PDF viewer, BibTeX copy, scroll animations.
   No edits needed unless you want to customize behavior.
   ═══════════════════════════════════════════════════════════ */

// ── PDF Viewer ──────────────────────────────────────────

function openPDF(url, title) {
  var overlay = document.getElementById('pdfOverlay');
  var frame   = document.getElementById('pdfFrame');

  document.getElementById('pdfTitle').textContent    = title || 'PDF';
  document.getElementById('pdfDownload').href         = url;
  document.getElementById('pdfNewTab').href           = url;
  frame.src = url;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      overlay.classList.add('show');
    });
  });
}

function closePDF() {
  var overlay = document.getElementById('pdfOverlay');
  overlay.classList.remove('show');
  document.body.style.overflow = '';

  setTimeout(function () {
    overlay.classList.remove('active');
    document.getElementById('pdfFrame').src = '';
  }, 250);
}

// Close on Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePDF();
});

// Close on backdrop click
document.getElementById('pdfOverlay').addEventListener('click', function (e) {
  if (e.target === e.currentTarget) closePDF();
});


// ── Copy BibTeX ─────────────────────────────────────────

function copyBibtex() {
  var el  = document.getElementById('bibtex');
  var bib = el.innerText.replace('Copy', '').trim();

  navigator.clipboard.writeText(bib).then(function () {
    var btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
  });
}


// ── Scroll Fade-In ──────────────────────────────────────

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(function (el) {
  observer.observe(el);
});
