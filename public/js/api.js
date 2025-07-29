function obtenerDatosWard() {
  fetch('/.netlify/functions/church')
    .then(res => {
      if (!res.ok) throw new Error('Error en la respuesta de la API');
      return res.json();
    })
    .then(data => {
      document.getElementById('datos-api').innerHTML = `
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
    })
    .catch(err => {
      document.getElementById('datos-api').innerHTML = `<p>Error al cargar datos: ${err.message}</p>`;
      console.error(err);
    });
}
