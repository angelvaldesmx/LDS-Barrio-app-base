import { includeComponent } from './utils.js';

export function handleIntroAnimation() {
  includeComponent('intro', '../components/intro.html').then(() => {
    const introContainer = document.getElementById("introContainer");
    const mainContent = document.getElementById("mainContent");
    const svgObject = document.getElementById("svgIntro");
    const cerrarBtn = document.getElementById("cerrarIntro");

    if (!introContainer || !svgObject || !cerrarBtn) return;

    const yaVisto = localStorage.getItem("introVisto");

    function reproducirAnimacionSVG() {
      svgObject.data = svgObject.data; // Reinicia
    }

    function cerrarIntro() {
      introContainer.classList.add("oculto");
      setTimeout(() => {
        introContainer.style.display = "none";
        if (mainContent) mainContent.style.display = "block";
      }, 1000);
      localStorage.setItem("introVisto", "true");
    }

    if (yaVisto === "true") {
      introContainer.style.display = "none";
      if (mainContent) mainContent.style.display = "block";
    } else {
      reproducirAnimacionSVG();
      setTimeout(() => {
        if (introContainer.style.display !== "none") {
          cerrarIntro();
        }
      }, 7000);
    }

    cerrarBtn.addEventListener("click", cerrarIntro);
  });
}