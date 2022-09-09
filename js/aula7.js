/* Arrays */

let valorLista, objeto, filtro;
const listaMercado = ["arroz", "feijão", "leite"];
const listaCarros = ["gol", "uno", "brasilia"];
const listaSalgadinhos = ["bolinha de queijo", "kibe", "coxinha", "rissole"];
const listaNumerica = [3, 5, 34, 6, 12];
const listaConcatenada = listaMercado.concat(listaCarros, listaSalgadinhos); // concatena quantas listas quiser
const objLista = { cereal1: "arroz", cereal2: "feijão", laticinio: "leite" };

listaMercado[1] = "café"; // altera item do array
valorLista = listaMercado[1];
objeto = objLista.cereal1;
console.log(
    "Valor da lista: " + valorLista + ", ",
    "Atributo do objeto: " + objeto
);
console.log(listaMercado[listaMercado.length - 1]);  // imprime ultimo valor do array
console.log(listaMercado); // imprime todos índices do array
console.log(Array.isArray(objLista)); // verifica se é ou não array

listaMercado.pop(); // remove ultimo elemento do array
listaMercado.shift(); // remove primeiro elemento do array
listaMercado.unshift("cerveja"); // acrescenta um item no inicio do array
listaMercado.push("tomate"); // acrescenta um item no final do array
listaMercado.splice(1, 0, "Item", "Item2"); // splice = emendar/juntar. Primeiro parametro indica o indice do array em que será adicionado um novo item; segundo parametro indica o número de elementos que serão deletados a partir do indice mencionado no primeiro parametro; terceiro parametro em diante indica quais itens serão adicionados, esses itens "empurram" o restante dos elementos do array para frente. Dessa forma podemos adicionar elementos em qualquer lugar o array, mas podemos também excluir qualquer elemento, basta deixar o terceiro parametro em diante vazios
console.log("Lista fatiada: " + listaMercado.slice(1, 3)); // obtém elementos do array a partir da posição 1 até 3 (ultima posição destacada não é incluida, inclusive podemos omiti-la, como em lista.slide(1))

document.getElementById("texto1").innerHTML = listaMercado.join(", "); // método join é usado para separar elementos de um array
document.getElementById("texto2").innerHTML = "Listas de mercado, carros e salgadinhos concatenadas: " + listaConcatenada.join(", "); // método join é usado para separar elementos de um array
listaSalgadinhos.sort(); // método sort deixa elementos em ordem alfabética
document.getElementById("texto3").innerHTML = "Lista em ordem inversa: " + listaSalgadinhos.reverse().join(", "); // método reverse inverte ordem dos elementos

// ordenar números
listaNumerica.sort((a, b) => a - b); // Arrow functions são usadas para expressões curtas, podemos omitir nome da função, substituir {} que envolvem declarações (statements) e substituir return
listaNumerica.sort(function (a, b){ // função anônima (nome pode ser omitido)
    return a - b;
});
document.getElementById("texto4").innerHTML = "Lista em ordem: " + listaNumerica.join(", ");

filtro = listaNumerica.filter(filtragem); // filter recebe valor retornado de filtragem
console.log("Valor maior que 10: " + filtro);

function maiorNumero(array) {
    return Math.max.apply(null, array);
}

function menorNumero(array) {
    return Math.min.apply(null, array);
}

function filtragem(value, index, array) {
    return value > 10;
}