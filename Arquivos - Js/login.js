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
