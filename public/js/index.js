import { handleIntroAnimation } from './intro.js';
import './global.js'; // Se importa globalmente para activarlo

document.addEventListener('DOMContentLoaded', () => {
  // Ejecutar animación de intro si aplica
  handleIntroAnimation();

  // Delegar el clic y timeout solo si el overlay ya fue cargado
  const observer = new MutationObserver(() => {
    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) {
      function hideIntro() {
        introOverlay.classList.add('hidden');
      }

      introOverlay.addEventListener('click', hideIntro);
      setTimeout(hideIntro, 7000);
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(reg => {
        console.log('✅ Service Worker registrado con éxito:', reg.scope);
      })
      .catch(err => {
        console.error('❌ Error al registrar el Service Worker:', err);
      });
  });
}