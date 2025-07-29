import './global.js';

// Mostrar intro si aplica
import { handleIntroAnimation } from './intro.js';
handleIntroAnimation();

// Incluir header y footer si existen
import { includeComponent } from './utils.js';
document.addEventListener('DOMContentLoaded', () => {
  includeComponent('header', '/components/header.html');
  includeComponent('footer', '/components/footer.html');
});

// Registrar Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/service-worker.js')
      .then(reg => console.log('SW registrado', reg))
      .catch(err => console.error('SW fallo:', err));
  });
}