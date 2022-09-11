/* Manipulação de datas */

const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"];
let hoje, ano, mes, mesEscrito, diaMes, diaSemana, hora, minutos, segundos, milisegundos, dataBR1, dataBR2, dataBR3;

hoje = new Date();
diaMes = hoje.getDate(); // 1 à 31
diaSemana = hoje.getDay(); // 0 à 6
mes = hoje.getMonth(); // 0 à 11
ano = hoje.getFullYear(); // ano atual com 4 caracteres
mesEscrito = mesesDoAno[hoje.getMonth()];
hora = hoje.getHours(); // 0 à 23
minutos = hoje.getMinutes(); // 0 à 59
segundos = hoje.getSeconds(); // 0 à 59
milisegundos = hoje.getMilliseconds(); // 0 à 999
dataBR1 = hoje.toLocaleString("pt-BR"); // data.toLocaleString("br") ou data.toLocaleString() também funciona. Podemos escrever simbolos de outras regiões tbm
dataBR2 = hoje.toLocaleString("pt-BR", {dateStyle: "short"});
dataBR3 = hoje.toLocaleString("pt-BR", {timeStyle: "short"});


console.log(hoje);
console.log(diaMes);
console.log(diasDaSemana[diaSemana]);
console.log(mesEscrito);
console.log(hora + ":" + minutos + ":" + segundos + ":" + milisegundos);
console.log(dataBR1);
console.log(dataBR2);
console.log(dataBR3);

let vencimento = new Date(2023, 0, 5);
if (hoje > vencimento) {
    console.log("Conta vencida!");
} else {
    console.log("Conta ainda não venceu!");
}