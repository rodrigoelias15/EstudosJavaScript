/* Classes */

class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    
    apresentacao() {
        return "Nome do carro: " + this.modelo;
    }
}

const gol = new Carro("Volkswagen", "Gol", 2018);
const uno = new Carro("Fiat", "Uno", 2012);
console.log(gol.apresentacao());
console.log(uno.apresentacao());