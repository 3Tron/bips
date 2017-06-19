const passcodes = ['put', 'the', 'passcodes', 'in', 'this', 'array'];
const interval = 1000;

passcodes.map(function(code) {
  setInterval(function() {
    console.log(`submitting: ${code}`);
    document.getElementById('passcode').value = code;
    document.getElementById('submit').click();
  }, interval);
});
