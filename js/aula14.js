/* JSON */

const carro = { marca: "Fiat", modelo: "Uno", ano: "2018" };
let textoCarro = JSON.stringify(carro); // converte objeto em texto (JSON)
let objetoCarro = JSON.parse(textoCarro); // converte texto (JSON) em objeto

document.getElementById("texto").innerHTML = textoCarro;
console.log(objetoCarro.marca);

let requisicao = new XMLHttpRequest;
requisicao.open("GET", "https://viacep.com.br/ws/01001000/json/");
requisicao.send();
requisicao.onload = function () {
    document.getElementById("cep").innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText); // tivemos que usar function convencional, arrow functions não possuem this próprio, como em "this.responseText"
    console.log(obj);
};