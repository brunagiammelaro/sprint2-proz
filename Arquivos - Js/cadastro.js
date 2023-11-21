document.addEventListener("DOMContentLoaded", function() {
  var radioAdotarElement = document.getElementById("iadotar");
  var radioDoarElement = document.getElementById("idoar");
  var campoAdotarElement = document.getElementById("campo-adotar");
  var campoDoarElement = document.getElementById("campo-doar");


  radioAdotarElement.addEventListener("change", function() {
  
      campoAdotarElement.style.display = "block";
      campoDoarElement.style.display = "none";
  });

  radioDoarElement.addEventListener("change", function() {
    
      campoDoarElement.style.display = "block";
      campoAdotarElement.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var inputFoto = document.getElementById("foto");
  var nomeArquivoSpan = document.getElementById("nome-arquivo");

  inputFoto.addEventListener("change", function () {
      if (inputFoto.files.length > 0) {
          nomeArquivoSpan.textContent = " " + inputFoto.files[0].name;
      } else {
          nomeArquivoSpan.textContent = ""; 
      }
  });
});