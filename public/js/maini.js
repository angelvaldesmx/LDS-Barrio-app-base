// js/main.js

async function loadIntroComponent() {
  try {
    const response = await fetch('./components/intro.html');
    const html = await response.text();
    document.body.insertAdjacentHTML('afterbegin', html);
  } catch (e) {
    console.error('Error al cargar intro:', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadIntroComponent();
});