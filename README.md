# Repair Before Reinforce — Paper Website

Static project page for **"Repair Before Reinforce: Context-Augmented Knowledge Graph Reasoning"**.
Plain HTML/CSS/JS — no build step required. Equations are rendered with KaTeX (loaded from a CDN).

## Files

- `index.html` — all page content. Everything you need to edit is marked with `[PLACEHOLDER — ...]`.
- `styles.css` — the visual theme (colors are defined as variables at the top of the file).
- `script.js` — KaTeX equation rendering and the copy-BibTeX button.
- `assets/` — put your figures here (PNG/SVG), then replace the dashed placeholder boxes.

## Filling in content

1. Search `index.html` for `PLACEHOLDER` and replace each one.
2. Replace `[Your Name]` in the hero and the BibTeX entry.
3. Set the real URLs on the Paper / Code / Blog buttons (currently `href="#"`).
4. To swap a figure placeholder for a real image, replace the `<div class="placeholder-box">...</div>`
   block with:

   ```html
   <img src="assets/figure2_pipeline.png" alt="Pipeline overview" />
   ```

   (keep the surrounding `<figure>` and `<figcaption>`).
5. Equations use standard LaTeX inside `\[ ... \]` — edit them directly in the `equation-card` divs.

## Preview locally

```bash
cd repair-before-reinforce-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages (new repo)

1. Create a new **public** repo on GitHub named `repair-before-reinforce.github.io`
   *under an organization of that name*, or more simply a repo named `repair-before-reinforce`
   under your account (URL becomes `https://<username>.github.io/repair-before-reinforce/`).
2. Push this folder:

   ```bash
   cd repair-before-reinforce-site
   git init
   git add .
   git commit -m "Paper website"
   git branch -M main
   git remote add origin git@github.com:<username>/repair-before-reinforce.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `/ (root)` → Save**.
4. The site goes live at the URL shown on that Pages settings screen within a minute or two.
