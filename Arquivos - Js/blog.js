function abrirModal(carregarModal) {
    console.log("Carregar a Janela Modal: " + carregarModal)
    let modal = document.getElementById(carregarModal)

    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function fecharModal(fecharModal) {
    console.log("Fechar a Janela Modal: " + fecharModal)
    let modal = document.getElementById(fecharModal)

    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}