/* switch */

function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); // transforma todos caracteres de cor em minusculo

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;    
        default:
            document.getElementById("texto1").innerHTML = "Nenhuma cor disponível";
            break;
    }
}