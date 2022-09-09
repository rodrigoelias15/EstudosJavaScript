/* if e else */

let hora = new Date().getHours()
let minutos = new Date().getMinutes();

if (hora >= 12 && hora < 18) {
    alert("Boa tarde! Agora são " + hora + ":" + minutos);
} else if (hora >= 6 && hora < 12) {
    alert("Bom dia! Agora são " + hora + ":" + minutos);
} else {
    alert("Boa noite! Agora são " + hora + ":" + minutos);
}


function verificaTexto() {
    let campoTexto = document.getElementById("campoTexto").value;

    if (campoTexto == "" || campoTexto == null) {
        document.getElementById("texto1").innerHTML = "Campo não pode ser vazio!";
        document.getElementById("texto1").style.color = "red";
    } else {
        document.getElementById("texto1").innerHTML = "Campo está preenchido corretamente!";
        document.getElementById("texto1").style.color = "green";
    }
}