// index.js
document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');

  function hideIntro() {
    introOverlay.classList.add('hidden');
  }

  introOverlay.addEventListener('click', hideIntro);
  setTimeout(hideIntro, 3000);
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