if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => {
      console.log('Service Worker registrado con éxito:', reg.scope);
    })
    .catch(error => {
      console.error('Error al registrar el Service Worker:', error);
    });
}