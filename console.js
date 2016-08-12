var passcodes = ['put','the','passcodes','in','this','array']
var interval = 1000;
  passcodes.map(function(code){
    setInterval(function(){
      console.log('checking '+code);
      document.getElementById('passcode').value=code;
      document.getElementById('submit').click();
    }, interval);
  }
);
