/* var, let e const */


/* var */
// declarar variáveis de uma só vez para ficar mais organizado
// com a palavra chave var, podemos redeclarar a mesma variavel, com let e const isso não é possível
var a, b, c, nome1;

a=1;
b=2;
c=a+b;
nome1="Jaco";
nome1=c+nome1; // não é recomendado concatenar números e strings nas variáveis

document.getElementById("texto").innerHTML = nome1;

var nome1="Jamelao";

document.getElementById("texto").innerHTML = "Nome atualizado usando palavra-chave \"var\": " + nome1;


/* let */
let nome2, nome3;

nome2="Rodrigo";
console.log("Primeiro nome: " + nome2);

nome3="Oliveira"
console.log("Segundo nome: " + nome3);

// let nome3="Elias" // let não aceita declarar a mesma variável

{
    // dentro de um escopo diferente, a variável pode ser redeclarada utilizando let, dessa forma se torna mais segura a redeclaração porque o valor inicial não será perdido
    let nome3 = "Elias";
    document.getElementById("texto").innerHTML = "Variável redeclarada em outro escopo utilizando a palavra-chave \"let\": " + nome3;
}

// Neste caso a variável mantém o valor declarado fora do escopo
document.getElementById("texto").innerHTML = "Valor mantido para variável \"nome3\": " + nome3;


/* const */
const constante1=10; // constantes precisam receber valor na declaração

{
   const constante1=3;
   console.log(constante1);
}

// const constante1=20; // constante não pode ser redeclarada no msm escopo
// constante1=20; // constante não pode sofrer alteração no valor
console.log(constante1);