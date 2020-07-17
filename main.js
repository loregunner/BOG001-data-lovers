import { example } from './data.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
document.getElementById("btnabrir").addEventListener("click",function(){
    document.getElementsByClassName("fondo_transparente")[0].style.display="block" 
       return false
})
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo_transparente")[0].style.display="none" 
})