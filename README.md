# Academic Project Page Template

A clean, responsive, single-page template for computer vision and machine learning research papers. Originally built for [NERFIFY](https://seemandhar.github.io/NERFIFY) (CVPR 2026).

**[Live Demo](https://seemandhar.github.io/NERFIFY)** · **[Use This Template](https://github.com/seemandhar/paper-template/generate)**

---

## Features

- Responsive on all devices (phone, tablet, desktop)
- Built-in PDF viewer modal (Paper + Supplementary buttons)
- BibTeX block with one-click copy
- Scroll fade-in animations
- Visit counter (no backend needed)
- Video player section
- Stat cards, comparison tables, figure captions
- Two card styles: stage cards and accent-border cards
- Modular: separate HTML / CSS / JS files
- Zero build step. Just open `index.html`.

---

## Quick Start

### 1. Clone or use as template

```bash
# Option A: Use GitHub's template button (recommended)
# Click "Use this template" on the repo page

# Option B: Clone directly
git clone https://github.com/seemandhar/paper-template.git my-project-page
cd my-project-page
```

### 2. Add your content

Open `index.html` and replace the placeholder text. Every section is clearly commented.

### 3. Add your assets

```
static/
├── css/style.css       ← Edit colors in :root variables
├── js/main.js          ← No edits needed
├── images/             ← Drop your figures here
│   ├── teaser.png
│   ├── pipeline.png
│   └── qualitative.png
├── videos/             ← Drop your demo video here
│   └── demo.mp4
└── pdfs/               ← Drop your PDFs here
    ├── paper.pdf
    └── supplementary.pdf
```

### 4. Deploy

Push to GitHub and enable GitHub Pages (Settings → Pages → Source: main branch). Your page will be live at `https://yourusername.github.io/your-repo/`.

---

## File Structure

```
.
├── index.html              ← Main page (edit this)
├── README.md               ← You are here
├── LICENSE                  ← CC BY-SA 4.0
└── static/
    ├── css/
    │   └── style.css       ← All styles, edit :root for theming
    ├── js/
    │   └── main.js         ← PDF viewer, copy, animations
    ├── images/             ← Your figures (.png, .jpg)
    ├── videos/             ← Your videos (.mp4)
    └── pdfs/               ← Your papers (.pdf)
```

---

## Customization

### Change the accent color

Open `static/css/style.css` and edit the variables at the top:

```css
:root {
  --color-accent: #2563eb;        /* Main brand color */
  --color-accent-light: #dbeafe;  /* Light tint for badges */
  --color-accent-dark: #1d4ed8;   /* Hover / dark variant */
}
```

Some ideas:
| Color | Hex | Use case |
|-------|-----|----------|
| Blue (default) | `#2563eb` | General purpose |
| Emerald | `#059669` | Biology, medical |
| Purple | `#7c3aed` | Generative models |
| Red | `#dc2626` | Robotics |
| Amber | `#d97706` | NLP, language |

### Change fonts

Replace the Google Fonts `<link>` in `index.html` and update `--font-serif` / `--font-sans` in the CSS.

### Sections you can remove

Every section in `index.html` is independent. Just delete the `<section>...</section>` block you don't need:

- TL;DR banner
- Stat cards
- Video demo
- Any table or figure

### Visit counter

The visitor badge uses [visitor-badge.laobi.icu](https://visitor-badge.laobi.icu) (free, no signup). Change the `page_id` in the footer `<img>` tag:

```
page_id=yourusername.yourproject
```

---

## Available Components

### Figures

```html
<!-- Narrow (max 720px) -->
<div class="figure fig-narrow">
  <img src="static/images/your_fig.png" alt="Description">
  <div class="figure-caption"><strong>Figure N.</strong> Caption text.</div>
</div>

<!-- Medium (max 800px) -->
<div class="figure fig-medium">...</div>

<!-- Wide (full width) -->
<div class="figure fig-wide">...</div>
```

### Tables

```html
<div class="table-wrapper">
  <table>
    <thead><tr><th>Method</th><th>PSNR ↑</th></tr></thead>
    <tbody>
      <tr><td>Baseline</td><td>25.00</td></tr>
      <tr><td>Ours</td><td class="cell-highlight">30.00</td></tr>
    </tbody>
  </table>
</div>
```

Cell classes: `cell-highlight` (blue bg), `cell-check` (green ✓), `cell-fail` (red ✗), `cell-partial` (amber).

### Cards

```html
<!-- Stage cards -->
<div class="card-grid">
  <div class="card">
    <div class="card-tag">Stage 1</div>
    <h4>Title</h4>
    <p>Description.</p>
  </div>
</div>

<!-- Accent border cards -->
<div class="accent-cards">
  <div class="accent-card">
    <h4>1. Title</h4>
    <p>Description.</p>
  </div>
</div>
```

### Buttons

```html
<!-- Primary (filled) -->
<a href="#" class="btn btn-primary">Primary</a>

<!-- Default (outlined) -->
<a href="#" class="btn">Default</a>

<!-- Disabled (grayed out) -->
<a href="#" class="btn btn-disabled">Coming Soon</a>

<!-- PDF viewer trigger -->
<a href="#" class="btn" onclick="openPDF('static/pdfs/paper.pdf','Title');return false;">Paper</a>
```

---

## Deployment Options

| Platform | How |
|----------|-----|
| **GitHub Pages** | Push to repo → Settings → Pages → Source: main |
| **Netlify** | Drag and drop the folder, or connect your repo |
| **Vercel** | Import repo, framework: Other, output: `.` |
| **Any static host** | Just upload all files |

---

## Credits

- Originally designed for [NERFIFY](https://seemandhar.github.io/NERFIFY) (CVPR 2026)
- Inspired by the [Nerfies](https://nerfies.github.io) project page
- Template by [Seemandhar Jain](https://seemandhar.github.io)

## License

This template is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). You are free to use, modify, and share it, as long as you credit this template and share your modifications under the same license.
