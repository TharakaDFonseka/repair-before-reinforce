// Render LaTeX equations once KaTeX auto-render has loaded.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }

  const drawHowArrow = () => {
    const svg = document.getElementById("how-to-pipeline");
    const from = document.getElementById("how-card");
    const to = document.getElementById("pipeline-figure");
    const wrap = document.getElementById("overview-to-pipeline");
    if (!svg || !from || !to || !wrap) return;

    if (window.matchMedia("(max-width: 720px)").matches) {
      svg.innerHTML = "";
      return;
    }

    const wr = wrap.getBoundingClientRect();
    const a = from.getBoundingClientRect();
    const b = to.getBoundingClientRect();
    const x1 = a.left + a.width * 0.55 - wr.left;
    const y1 = a.bottom - wr.top;
    const x2 = b.left + b.width * 0.28 - wr.left;
    const y2 = b.top - wr.top + 6;
    const dy = Math.max(y2 - y1, 80);
    const c1x = x1 - 90;
    const c1y = y1 + dy * 0.42;
    const c2x = x2 - 40;
    const c2y = y2 - 28;
    const d = `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;

    svg.setAttribute("viewBox", `0 0 ${wr.width} ${wr.height}`);
    svg.setAttribute("preserveAspectRatio", "none");
    svg.innerHTML = `
      <defs>
        <marker id="how-arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M 0 1.2 L 9 5 L 0 8.8 Z" fill="#0e7466" />
        </marker>
      </defs>
      <path d="${d}" fill="none" stroke="#0e7466" stroke-width="2.4" stroke-linecap="round" marker-end="url(#how-arrowhead)" />
    `;
  };

  drawHowArrow();
  window.addEventListener("resize", drawHowArrow);
  window.addEventListener("load", drawHowArrow);

  // Copy-BibTeX button
  const copyBtn = document.getElementById("copy-bibtex");
  const bibtex = document.getElementById("bibtex-text");
  if (copyBtn && bibtex) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(bibtex.textContent);
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
      } catch {
        copyBtn.textContent = "Failed";
        setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
      }
    });
  }
});
