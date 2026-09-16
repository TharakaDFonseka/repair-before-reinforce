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

  const codeBtn = document.getElementById("code-btn");
  const codeModal = document.getElementById("code-modal");
  const closeModal = () => {
    if (!codeModal) return;
    codeModal.hidden = true;
    document.body.style.overflow = "";
  };
  const openModal = () => {
    if (!codeModal) return;
    codeModal.hidden = false;
    document.body.style.overflow = "hidden";
  };
  if (codeBtn && codeModal) {
    codeBtn.addEventListener("click", openModal);
    codeModal.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !codeModal.hidden) closeModal();
    });
  }

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
