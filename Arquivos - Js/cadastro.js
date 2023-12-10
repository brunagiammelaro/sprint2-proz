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

// Exibi o nome do arquivo logado
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

// Verificações do fomulário

// -------- VALIDAR O NOME -------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

nomeInput.addEventListener('focus', () => {
    nomeLabel.classList.add('required-popup');
})

nomeInput.addEventListener('blur', () => {
    nomeLabel.classList.remove('required-popup');
})
 
nomeInput.addEventListener('change', (e) => {
    let valor = e.target.value

    if (valor.length < 3) {
        nomeInput.classList.add('error')
        nomeHelper.classList.add('visible')
        nomeHelper.innerText = 'Digite um nome válido maior que 3 caracteres'
    } else {
        nomeInput.classList.remove('error')
        nomeHelper.classList.remove('visible')
        nomeInput.classList.add('correct')
    }
})

// -------- VALIDAR O EMAIL -------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostrarPopUp (input, label) {
    input.addEventListener('focus', () => {
        label.classList.add('required-popup');
    })

    input.addEventListener('blur', () => {
        label.classList.remove('required-popup');
    })
}
mostrarPopUp(emailInput, emailLabel)
emailInput.addEventListener('change', (e) => {
    
    let valorEmail = e.target.value

    if (!valorEmail.includes("@") && !valorEmail.includes(".com")) {
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailHelper.innerText = 'O email deve conter @ e .com'
    } else {
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
    }
})

// -------- VALIDAR O CPF -------- //

let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

function mostrarPopUp (input, label) {
    input.addEventListener('focus', () => {
        label.classList.add('required-popup');
    })

    input.addEventListener('blur', () => {
        label.classList.remove('required-popup');
    })
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    const cpfsInvalidos = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];

    if (cpf.length !== 11 || cpfsInvalidos.includes(cpf)) {
        return false;
    }

    return true;
}

cpfInput.addEventListener('input', (e) => {
    let cpf = e.target.value;

    if (!validarCPF(cpf)) {
        cpfInput.classList.add('error');
        cpfHelper.classList.add('visible');
        cpfHelper.innerText = 'CPF inválido';
    } else {
        cpfInput.classList.remove('error');
        cpfHelper.classList.remove('visible');
        cpfInput.classList.add('correct');
    }
})

// ------ ENVIAR AS INFORMAÇÕES, RESETAR O FORMULÁRIO, ENCAMINHAR O USUARIO A PAGINA INDEX -----//

document.getElementById("botao").addEventListener("click", function(event) {
    event.preventDefault();

    // Obter os dados do formulário
    let dadosFormulario = {
        desejoAdotar: document.querySelector('input[name="opcao"]:checked').value,
        desejoDoar: document.querySelector('input[name="opcao"]:checked').value,
    };

    // Simular o envio para o banco de dados
    console.log("Dados a serem enviados para o banco de dados:", dadosFormulario);
    document.querySelector('form').reset();

    // Exibir o pop-up
    mostrarPopup();

});

function mostrarPopup() {
    document.getElementById("popupCadastro").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popupCadastro").style.display = "none";
}