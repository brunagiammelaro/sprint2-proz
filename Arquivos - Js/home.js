let checkboxContainer = document.getElementById("selecionar");


let params = new URLSearchParams(window.location.search);
let categoria = params.get('categoria');

if (categoria === "cachorro") {
    checkboxContainer.innerHTML = `
        <br />
        <p><b>Pet</b></p>
        <label for="cachorro"><input type="checkbox" value="cachorro" class="checkbox" id="cachorro" checked /> Cachorro</label
        ><br />
        <label for="gato"><input type="checkbox" value="gato" class="checkbox" id="gato"/> Gato</label><br />
        <label for="todos"><input type="checkbox" value="todos" class="checkbox" id="todos" /> Todos</label><br />
    `;
} else if (categoria === "gato") {
    checkboxContainer.innerHTML = `
        <br />
        <p><b>Pet</b></p>
        <label for="cachorro"><input type="checkbox" value="cachorro" class="checkbox" id="cachorro" /> Cachorro</label
        ><br />
        <label for="gato"><input type="checkbox" value="gato" class="checkbox" id="gato" checked /> Gato</label><br />
        <label for="todos"><input type="checkbox" value="todos" class="checkbox" id="todos" /> Todos</label><br />
    `;
}