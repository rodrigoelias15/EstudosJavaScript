/* Operadores aritméticos */

// +, -, *, /, ++ e --
var num1;

num1 = 1 + 10;
++num1; // decremento modifica valor inicial da variável
console.log(num1);


/* Operadores de atribuição */

// sinais: =, +=, -=, *= e /=
var var2;

var2 = 10; // atribuição


/* Operador de sequencia */
// concatena strings com operador +
var var3, var4;

var3 = "Rodrigo";
var4 = "Elias";
console.log(var3 + " " + var4);


/* Operadores de comparação */
// >, <, ==, >=, <= e != (comparam conteúdo das variáveis)
// === e !== (comparam conteúdo e tipo das variáveis)
var var5, var6, total;

var5 = "10";
var6 = 10;
total = (var5 === var6)
console.log(total);


/* Operadores ternários */
var velocidadeVeic, radar;

velocidadeVeic = 80;
radar = (velocidadeVeic > 60) ? "Multa por excesso de velocidade!" : "Dentro do limite de velocidade!";
console.log(radar);


/* Operadores lógicos */
var valor1, valor2, resultado;

valor1 = 2;
valor2 = 3;
resultado = (valor1 > 20 || valor2 < 60) ? "Proposição verdadeira" : "Proposição falsa";
console.log(resultado);
resultado = !(valor1 > 20 || valor2 < 60) ? "Proposição verdadeira" : "Proposição falsa";
console.log(resultado);
resultado = (valor1 > 20 && valor2 < 60) ? "Proposição verdadeira" : "Proposição falsa";
console.log(resultado);
