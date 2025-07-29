function handleIntroAnimation() {
  const lastVisit = localStorage.getItem('lastIntro');
  const now = Date.now();

  if (!lastVisit || now - parseInt(lastVisit) > 86400000) { // 24 horas
    includeComponent('intro', '/components/intro.html');
    localStorage.setItem('lastIntro', now.toString());
  }
}