// index.js

document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');

  // Ocultar intro al hacer click o después de 3 segundos
  function hideIntro() {
    introOverlay.classList.add('hidden');
  }

  introOverlay.addEventListener('click', hideIntro);

  setTimeout(hideIntro, 3000);
});