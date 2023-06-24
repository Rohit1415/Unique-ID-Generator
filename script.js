function generateUniqueId(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var id = '';
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  
    return id;
  }
  
  var generateBtn = document.getElementById('generateBtn');
  var idOutput = document.getElementById('idOutput');
  
  generateBtn.addEventListener('click', function() {
    var uniqueId = generateUniqueId(10);
    idOutput.textContent = uniqueId;
  });
  