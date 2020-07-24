import { datalol } from './data.js';
import data from './data/lol/lol.js';

console.log(datalol, data);
document.getElementById("btnabrir").addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "block"

})
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none"
})
const select = document.querySelector('#select')
const option = document.querySelector('#options')
const contentSelect = document.querySelector('#select .contentSelect')
document.querySelectorAll('#options > .option').forEach((options) => {
    options.addEventListener('click', (e) => {
        e.preventDefault()
        contentSelect.innerHTML = e.currentTarget.innerHTML
        select.classList.toggle('active')
        option.classList.toggle('active')
    })
})
select.addEventListener('click', () => {
    select.classList.toggle('active')
    option.classList.toggle('active')
})

console.log(data.data);
let datos = data.data;
function Tarjetas(personajes) {
    Object.values(personajes).forEach(campeon => {
    let contenedor = document.getElementById("content-campeones");
    let contenedorCampeones = document.createElement("div");
    contenedorCampeones.classList.add("campeones");
    const imagen = document.createElement("img");
    imagen.classList.add("splash");
    imagen.src = campeon.splash;
    const info = document.createElement("div");
    info.classList.add("name");
    const apen = document.createElement("b")
    apen.classList.add("fuerza")
    contenedorCampeones.appendChild(apen);
    contenedorCampeones.appendChild(imagen);
    contenedorCampeones.appendChild(info);
    info.appendChild(document.createTextNode(` ${campeon.name}` + " "));
    info.appendChild(document.createTextNode(` ${campeon.title}` + " "));
    contenedorCampeones.appendChild(document.createTextNode(campeon.blurb))
    apen.appendChild(document.createTextNode(`Ataque: ${campeon.info.attack}` + "   "))
    apen.appendChild(document.createTextNode(`Defensa: ${campeon.info.defense}` + "   "))
    apen.appendChild(document.createTextNode(`Magia: ${campeon.info.magic}` + " "))
    apen.appendChild(document.createTextNode(`Dificultad: ${campeon.info.difficulty}` + " "))
    if (campeon.tags) {
        campeon.tags.forEach(tag => {
            contenedorCampeones.appendChild(document.createTextNode(`Rol: ${tag}` + " "))
        });
    }
    else {

        contenedorCampeones.appendChild(document.createTextNode("No tiene rol"))
    };
    contenedor.appendChild(contenedorCampeones);
    
});
}
window.onload = Tarjetas(datos);
const data0 = (data.data.Aatrox.name);
const data1 = (data.data.info);
let data2 = data.data.Aatrox.info;
console.log(data1, data2)

let lol = JSON.stringify(data.data);
const lol1 = JSON.stringify(data1);
const img1 = (data.data.Aatrox.splash);

document.getElementById("icon-search").addEventListener("click", show_search);
document.getElementById("cover-ctn-search").addEventListener("click", hide_search);

let ctn_bars_search = document.getElementById("ctn-bars-search")
let cover_ctn_search = document.getElementById("cover-ctn-search")
let inputSearch = document.getElementById("inputSearch")
let box_search = document.getElementById("box-search")

function show_search() {
    ctn_bars_search.style.top = "100px"
    cover_ctn_search.style.display = "block"
    inputSearch.focus()
}

function hide_search() {
    ctn_bars_search.style.top = "-100px"
    cover_ctn_search.style.display = "none"
    inputSearch.value = ""
}


