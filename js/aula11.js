/* setTimeout e setInterval */

// setTimeout
function ativarContagemSetTimeout() {
    document.getElementById("tempoSetTimeout").innerHTML = "Começou a contar";
    // variável "tempo" de escopo global, neste caso não é declarada como let ou var
    tempo1 = setTimeout(function () {
        document.getElementById("tempoSetTimeout").innerHTML = "Executou o setTimeout!";
    }, 2000); // executa a função passada por parâmetro uma vez em um determinado intervalo de tempo (milissegundos)
}

// forma alternativa de escrever setTimeout usando arrow function
/* 
function ativarContagemSetTimeout() {
    document.getElementById("tempoSetTimeout").innerHTML = "Começou a contar";
    tempo1 = setTimeout(() => {
        document.getElementById("tempoSetTimeout").innerHTML = "Executou o setTimeout!";
    }, 2000);
} 
*/

function pararContagemSetTimeout() {
    clearTimeout(tempo1);
    document.getElementById("tempoSetTimeout").innerHTML = "Parou a contagem!";
}


// setInterval
function ativarContagemSetInterval() {
    tempo2 = setInterval(function () {
        var cronometro = document.getElementById("tempoSetInterval").innerHTML;
        var soma = parseInt(cronometro) + 1; // converte string em inteiro
        document.getElementById("tempoSetInterval").innerHTML = soma;
    }, 1000); // setInterval repete a execução da função passada por parâmetro a cada intervalo de tempo determinado (milissegundos)
}

function pararContagemSetInterval() {
    clearInterval(tempo2);
}