/* Laço de repetição for */

let ano = new Date().getFullYear();

for (ano; ano >= 1980; ano--) {
    document.getElementById("ano").innerHTML += 
    "<option value='" + ano + "'>" + ano + "</option>"; // acrescenta opções ao elemento select e vai preenchendo valores de cada um com os respectivos indices. Tags HTML podem ser adicionadas aos códigos JS, aspas simples transforma qualquer expressão em texto e aspas duplas faz com que o JS reconheça métodos, variáveis, etc.
}