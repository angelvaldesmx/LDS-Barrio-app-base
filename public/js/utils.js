export function includeComponent(id, path) {
  const placeholder = document.getElementById(id);
  if (placeholder) {
    fetch(path)
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;
      });
  }
}