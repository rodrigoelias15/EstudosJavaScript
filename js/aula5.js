/* Objetos */

// normalmente é declarado como const
const carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: "2018",
    placa: "GUZ-5650",
    especificacoes: function () {
        return  this.marca + " " +
                this.modelo + " " +
                this.ano + " " +
                this.placa;
    }
};

console.log(carro); // exibe objeto com seus atributos
console.log(carro.especificacoes()); //exibe atributo especifico do objeto