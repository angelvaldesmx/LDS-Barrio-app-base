export function includeComponent(id, path) {
  const placeholder = document.getElementById(id);
  if (placeholder) {
    return fetch(path)
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;
      });
  } else {
    return Promise.resolve(); // Si no existe, no hace nada pero no rompe la ejecución
  }
}