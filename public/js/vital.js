// Carga de componentes comunes (header, footer, intro)
document.addEventListener('DOMContentLoaded', () => {
  includeComponent('header', '/components/header.html');
  includeComponent('footer', '/components/footer.html');

  // Mostrar intro animada si aplica
  handleIntroAnimation();
});

function includeComponent(id, path) {
  const placeholder = document.getElementById(id);
  if (placeholder) {
    fetch(path)
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;
      });
  }
}