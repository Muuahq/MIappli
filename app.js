const inputListaAmigos = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("ListaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    //console.log('hola')
    if (inputListaAmigos.value === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    } 
   listaAmigos.push(inputListaAmigos.value);
   ulListaAmigos.innerHTML += `<li>${inputListaAmigos.value}</li>`;
}
function sortearAmigos() {
    const suerte = Math.floor (Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random]
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
}
    
    