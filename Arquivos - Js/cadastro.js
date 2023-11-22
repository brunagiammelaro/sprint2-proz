document.addEventListener("DOMContentLoaded", function() {
    var radioAdotarElement = document.getElementById("iadotar");
    var radioDoarElement = document.getElementById("idoar");
    var campoAdotarElement = document.getElementById("campo-adotar");
    var campoDoarElement = document.getElementById("campo-doar");
  
    // Adiciona um ouvinte de evento para cada botão de rádio
    radioAdotarElement.addEventListener("change", function() {
        // Mostra o campo de adoção e oculta o campo de doação
        campoAdotarElement.style.display = "block";
        campoDoarElement.style.display = "none";
    });
  
    radioDoarElement.addEventListener("change", function() {
        // Mostra o campo de doação e oculta o campo de adoção
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
            nomeArquivoSpan.textContent = ""; // Limpa o texto se nenhum arquivo estiver selecionado
        }
    });
  });