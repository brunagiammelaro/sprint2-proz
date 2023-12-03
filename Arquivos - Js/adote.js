document.addEventListener("DOMContentLoaded", function () {

    function aplicarFiltros() {

        var regiao = document.querySelector('select[name="regiao"]').value;
        var cidade = document.querySelector('input[type="search"]').value;
        var petCachorro = document.getElementById('cachorro').checked;
        var petGato = document.getElementById('gato').checked;
        var petTodos = document.getElementById('todos').checked;
        var filhote = document.getElementById('filhote').checked;
        var jovem = document.getElementById('jovem').checked;
        var adulto = document.getElementById('adulto').checked;
        var porteGrande = document.getElementById('pGrande').checked;
        var porteMedio = document.getElementById('pMedio').checked;
        var portePequeno = document.getElementById('pPequeno').checked;

 
        var perfis = document.querySelectorAll('.perfis > div');


        perfis.forEach(function (perfil) {
            var mostrar = true;


            if (regiao && perfil.dataset.regiao !== regiao) {
                mostrar = false;
            }
            if (cidade && perfil.dataset.cidade !== cidade) {
                mostrar = false;
            }
            if ((petCachorro && perfil.dataset.pet !== 'cachorro') ||
                (petGato && perfil.dataset.pet !== 'gato') ||
                (petTodos && !perfil.dataset.pet)) {
                mostrar = false;
            }
            if ((filhote && perfil.dataset.idade !== 'filhote') ||
                (jovem && perfil.dataset.idade !== 'jovem') ||
                (adulto && perfil.dataset.idade !== 'adulto')) {
                mostrar = false;
            }
            if ((porteGrande && perfil.dataset.porte !== 'pGrande') ||
                (porteMedio && perfil.dataset.porte !== 'pMedio') ||
                (portePequeno && perfil.dataset.porte !== 'pPequeno')) {
                mostrar = false;
            }


            perfil.style.display = mostrar ? 'block' : 'none';
        });
    }


    document.querySelectorAll('.filtro input, .filtro select').forEach(function (elemento) {
        elemento.addEventListener('change', aplicarFiltros);
    });

   
    aplicarFiltros();
});